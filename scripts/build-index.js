const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const examplesDir = path.join(rootDir, "examples");
const dataDir = path.join(rootDir, "data");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function walkMetaFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...walkMetaFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name === "meta.json") {
      results.push(fullPath);
    }
  }

  return results;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function buildPromptRecord(metaPath) {
  const meta = readJson(metaPath);
  const caseDir = path.dirname(metaPath);
  const relativeCaseDir = toPosix(path.relative(rootDir, caseDir));
  const promptPath = path.join(caseDir, "prompt.md");
  const promptText = fs.existsSync(promptPath)
    ? fs.readFileSync(promptPath, "utf8").trim()
    : "";

  return {
    ...meta,
    prompt: meta.prompt || promptText,
    case_path: relativeCaseDir,
    image_path: meta.cover ? `${relativeCaseDir}/${meta.cover}` : null
  };
}

function uniqueSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) =>
    String(a).localeCompare(String(b), "zh-Hans-CN")
  );
}

function main() {
  ensureDir(dataDir);

  const metaFiles = walkMetaFiles(examplesDir);
  const prompts = metaFiles.map(buildPromptRecord).sort((a, b) =>
    String(a.title || a.id).localeCompare(String(b.title || b.id), "zh-Hans-CN")
  );

  const tags = uniqueSorted(prompts.flatMap((item) => item.tags || []));

  const categoriesMap = new Map();
  for (const item of prompts) {
    const useCase = item.use_case || "未分类";
    const style = item.style || "未分类";
    if (!categoriesMap.has(useCase)) categoriesMap.set(useCase, new Set());
    categoriesMap.get(useCase).add(style);
  }

  const categories = Array.from(categoriesMap.entries())
    .map(([use_case, styleSet]) => ({
      use_case,
      styles: uniqueSorted(Array.from(styleSet))
    }))
    .sort((a, b) => a.use_case.localeCompare(b.use_case, "zh-Hans-CN"));

  fs.writeFileSync(
    path.join(dataDir, "prompts.json"),
    JSON.stringify(prompts, null, 2) + "\n",
    "utf8"
  );
  fs.writeFileSync(
    path.join(dataDir, "tags.json"),
    JSON.stringify(tags, null, 2) + "\n",
    "utf8"
  );
  fs.writeFileSync(
    path.join(dataDir, "categories.json"),
    JSON.stringify(categories, null, 2) + "\n",
    "utf8"
  );

  console.log(`Indexed ${prompts.length} prompt case(s).`);
}

main();
