const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const inboxDir = path.join(rootDir, "inbox");
const processedDir = path.join(inboxDir, "processed");
const examplesDir = path.join(rootDir, "examples");
const readmeEn = path.join(rootDir, "README.md");
const readmeZh = path.join(rootDir, "README.zh-CN.md");

const DEFAULT_USE_CASE = "头像";
const DEFAULT_STYLE = "电影感";
const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const PROMPT_EXTS = new Set([".txt", ".md"]);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readText(file) {
  return fs.readFileSync(file, "utf8").trim();
}

function writeText(file, content) {
  fs.writeFileSync(file, content, "utf8");
}

function slugify(input) {
  const trimmed = String(input).trim();
  if (/^[a-z0-9-]+$/i.test(trimmed)) return trimmed.toLowerCase();
  if (/^\d+$/.test(trimmed)) return trimmed;
  const ascii = trimmed
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
  return ascii || `case-${Date.now()}`;
}

function titleFromBase(base) {
  if (/^\d+$/.test(base)) return `Case ${base}`;
  return base
    .split(/[-_]/g)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function parsePromptFile(text) {
  let prompt = text.trim();
  let negativePrompt = "";
  let aspectRatio = "";

  const ratioMatch = prompt.match(/--(\d+:\d+)\s*$/);
  if (ratioMatch) {
    aspectRatio = ratioMatch[1];
    prompt = prompt.replace(/\s*--\d+:\d+\s*$/, "").trim();
  }

  const negMatch = prompt.match(/\(\s*Negative Prompt:\s*([\s\S]*?)\)\s*$/i);
  if (negMatch) {
    negativePrompt = negMatch[1].trim();
    prompt = prompt.replace(/\(\s*Negative Prompt:\s*[\s\S]*?\)\s*$/i, "").trim();
  }

  return { prompt, negativePrompt, aspectRatio };
}

function makePromptMarkdown(title, prompt, negativePrompt, useCase, style, aspectRatio) {
  const parts = [
    `# ${title}`,
    "",
    "## Full Prompt",
    "",
    prompt,
  ];

  if (negativePrompt) {
    parts.push("", "## Negative Prompt", "", negativePrompt);
  }

  parts.push(
    "",
    "## Notes",
    "",
    `- 用途：${useCase}`,
    `- 风格：${style}`
  );

  if (aspectRatio) {
    parts.push(`- 比例：${aspectRatio}`);
  }

  return parts.join("\n") + "\n";
}

function collectPairs() {
  ensureDir(inboxDir);
  const entries = fs.readdirSync(inboxDir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile());
  const byBase = new Map();

  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase();
    const base = path.basename(file.name, ext);
    if (!IMAGE_EXTS.has(ext) && !PROMPT_EXTS.has(ext)) continue;
    if (!byBase.has(base)) byBase.set(base, {});
    const item = byBase.get(base);
    if (IMAGE_EXTS.has(ext)) item.image = file.name;
    if (PROMPT_EXTS.has(ext)) item.prompt = file.name;
  }

  return Array.from(byBase.entries())
    .filter(([, pair]) => pair.image && pair.prompt)
    .map(([base, pair]) => ({ base, ...pair }))
    .sort((a, b) => a.base.localeCompare(b.base, "en"));
}

function importPair({ base, image, prompt: promptFile }) {
  const imagePath = path.join(inboxDir, image);
  const promptPath = path.join(inboxDir, promptFile);
  const rawPrompt = readText(promptPath);
  if (!rawPrompt) {
    console.log(`Skipped ${base}: prompt file is empty.`);
    return false;
  }
  const parsed = parsePromptFile(rawPrompt);
  const caseId = slugify(base);
  const title = titleFromBase(caseId);
  const caseDir = path.join(examplesDir, DEFAULT_USE_CASE, DEFAULT_STYLE, caseId);
  const imageExt = path.extname(image).toLowerCase();
  const imageTargetName = `image${imageExt}`;

  ensureDir(caseDir);
  fs.copyFileSync(imagePath, path.join(caseDir, imageTargetName));

  const promptMd = makePromptMarkdown(
    title,
    parsed.prompt,
    parsed.negativePrompt,
    DEFAULT_USE_CASE,
    DEFAULT_STYLE,
    parsed.aspectRatio
  );
  writeText(path.join(caseDir, "prompt.md"), promptMd);

  const meta = {
    id: caseId,
    title,
    use_case: DEFAULT_USE_CASE,
    style: DEFAULT_STYLE,
    model: "gpt-image",
    prompt: parsed.prompt,
    negative_prompt: parsed.negativePrompt,
    tags: [],
    aspect_ratio: parsed.aspectRatio || "",
    cover: imageTargetName,
    created_at: new Date().toISOString(),
    notes: "Imported automatically from inbox."
  };
  writeText(path.join(caseDir, "meta.json"), JSON.stringify(meta, null, 2) + "\n");

  ensureDir(processedDir);
  fs.renameSync(imagePath, path.join(processedDir, image));
  fs.renameSync(promptPath, path.join(processedDir, promptFile));
  return true;
}

function runBuildIndex() {
  execFileSync("node", [path.join(__dirname, "build-index.js")], {
    cwd: rootDir,
    stdio: "inherit"
  });
}

function loadPrompts() {
  return JSON.parse(fs.readFileSync(path.join(rootDir, "data", "prompts.json"), "utf8"));
}

function sortPrompts(prompts) {
  return [...prompts].sort((a, b) => {
    const ad = String(a.created_at || "");
    const bd = String(b.created_at || "");
    if (ad !== bd) return bd.localeCompare(ad);
    return String(a.title || a.id).localeCompare(String(b.title || b.id), "en");
  });
}

function featuredBlockEn(item, index) {
  const n = String(index + 1).padStart(2, "0");
  const img = item.image_path.replace(/\\/g, "/");
  const folder = item.case_path.replace(/\\/g, "/");
  const neg = item.negative_prompt || "";
  return [
    `### ${n}. ${item.title}`,
    "",
    `- [Open case folder](./${encodeURI(folder).replace(/#/g, "%23")}/)`,
    "",
    "#### Output",
    "",
    `<img src="./${encodeURI(img).replace(/#/g, "%23")}" alt="${item.title}" width="360" />`,
    "",
    "#### Prompt",
    "",
    "```text",
    item.prompt || "",
    "```",
    "",
    "#### Negative Prompt",
    "",
    "```text",
    neg,
    "```",
    ""
  ].join("\n");
}

function featuredBlockZh(item, index) {
  const n = String(index + 1).padStart(2, "0");
  const img = item.image_path.replace(/\\/g, "/");
  const folder = item.case_path.replace(/\\/g, "/");
  const neg = item.negative_prompt || "";
  return [
    `### ${n}. ${item.title}`,
    "",
    `- [打开案例目录](./${encodeURI(folder).replace(/#/g, "%23")}/)`,
    "",
    "#### Output",
    "",
    `<img src="./${encodeURI(img).replace(/#/g, "%23")}" alt="${item.title}" width="360" />`,
    "",
    "#### Prompt",
    "",
    "```text",
    item.prompt || "",
    "```",
    "",
    "#### Negative Prompt",
    "",
    "```text",
    neg,
    "```",
    ""
  ].join("\n");
}

function replaceBetween(content, start, end, replacement) {
  const s = content.indexOf(start);
  const e = content.indexOf(end);
  if (s === -1 || e === -1 || e < s) return content;
  return content.slice(0, s + start.length) + "\n" + replacement + "\n" + content.slice(e);
}

function refreshReadme(readmePath, builder) {
  const prompts = sortPrompts(loadPrompts());
  const blocks = prompts.map(builder).join("\n");
  const original = fs.readFileSync(readmePath, "utf8");
  const updated = replaceBetween(
    original,
    "<!-- FEATURED_CASES_START -->",
    "<!-- FEATURED_CASES_END -->",
    blocks
  );
  fs.writeFileSync(readmePath, updated, "utf8");
}

function main() {
  const pairs = collectPairs();
  if (!pairs.length) {
    console.log("No inbox pairs found.");
    return;
  }

  let importedCount = 0;
  for (const pair of pairs) {
    if (importPair(pair)) {
      importedCount += 1;
    }
  }

  runBuildIndex();
  refreshReadme(readmeEn, featuredBlockEn);
  refreshReadme(readmeZh, featuredBlockZh);

  console.log(`Imported ${importedCount} inbox pair(s).`);
}

main();
