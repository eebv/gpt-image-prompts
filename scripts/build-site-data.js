const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const promptsPath = path.join(rootDir, "data", "prompts.json");
const outputPath = path.join(rootDir, "data", "site-cases.json");

const CATEGORY_RULES = [
  { key: "infographics", label: "图表与信息可视化", match: ["信息图", "图鉴", "拆解", "infographic", "diagram", "museum", "结构拆解", "展板"] },
  { key: "ui", label: "UI 与界面", match: ["ui", "dashboard", "网页", "web page", "app", "界面", "仪表盘"] },
  { key: "ecommerce", label: "商品与电商", match: ["product", "商品", "电商", "包装", "skincare", "cosmetic", "commercial visual", "详情页"] },
  { key: "poster", label: "海报与排版", match: ["poster", "海报", "campaign", "typography", "宣传海报"] },
  { key: "character", label: "人物与角色", match: ["character sheet", "角色设定", "concept art", "角色", "动画分解", "角色设计"] },
  { key: "scene", label: "场景与叙事", match: ["scene", "bedroom", "cafe", "street", "city", "场景", "房间", "咖啡馆", "街景", "露台"] },
  { key: "portrait", label: "摄影与写实", match: ["portrait", "selfie", "1girl", "woman", "人像", "自拍", "live-action cosplay", "fashion models"] },
];

const STYLE_RULES = [
  { key: "cinematic", label: "电影感", match: ["cinematic", "film", "胶片", "golden hour", "35mm", "editorial"] },
  { key: "illustration", label: "插画", match: ["watercolor", "illustration", "插画", "手绘"] },
  { key: "anime", label: "二次元", match: ["anime", "动漫", "二次元"] },
  { key: "minimal", label: "极简", match: ["minimal", "极简", "clean layout"] },
  { key: "realistic", label: "写实", match: ["ultra-realistic", "photorealistic", "真实写实", "highly detailed"] },
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function cleanPromptText(prompt = "") {
  return String(prompt)
    .replace(/^Prompt:\s*/i, "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function extractNegativePrompt(item) {
  if (item.negative_prompt && item.negative_prompt.trim()) {
    return item.negative_prompt.trim();
  }
  const prompt = String(item.prompt || "");
  const match = prompt.match(/Negative Prompt:\s*([\s\S]*)$/i);
  return match ? match[1].trim() : "";
}

function removeEmbeddedNegative(prompt) {
  return String(prompt).replace(/\n*\s*Negative Prompt:\s*[\s\S]*$/i, "").trim();
}

function inferRule(text, rules, fallback) {
  const lower = text.toLowerCase();
  for (const rule of rules) {
    if (rule.match.some((keyword) => lower.includes(keyword.toLowerCase()))) {
      return { key: rule.key, label: rule.label };
    }
  }
  return fallback;
}

function inferKeywords(prompt, categoryLabel, styleLabel, tags) {
  if (Array.isArray(tags) && tags.length) {
    return tags.slice(0, 5).join(" · ");
  }
  const chunks = [categoryLabel, styleLabel];
  if (/golden hour/i.test(prompt)) chunks.push("golden hour");
  if (/selfie|自拍/i.test(prompt)) chunks.push("自拍");
  if (/film|胶片/i.test(prompt)) chunks.push("胶片感");
  if (/coffee|咖啡/i.test(prompt)) chunks.push("咖啡馆");
  if (/museum|博物馆/i.test(prompt)) chunks.push("图鉴式");
  return chunks.filter(Boolean).slice(0, 5).join(" · ");
}

function mapCase(item) {
  const cleanedPrompt = removeEmbeddedNegative(cleanPromptText(item.prompt));
  const negativePrompt = extractNegativePrompt(item);
  const category = inferRule(cleanedPrompt, CATEGORY_RULES, { key: "portrait", label: "摄影与写实" });
  const style = inferRule(cleanedPrompt, STYLE_RULES, { key: "cinematic", label: "电影感" });
  const title = item.title || item.id;
  const imageUrl = item.image_path ? `./${item.image_path.replace(/\\/g, "/")}` : "";
  const tags = Array.isArray(item.tags) ? item.tags.filter(Boolean) : [];
  const keywords = inferKeywords(cleanedPrompt, category.label, style.label, tags);

  return {
    id: item.id,
    title,
    category: category.key,
    categoryLabel: category.label,
    style: style.key,
    styleLabel: style.label,
    useCase: item.use_case || "",
    tags,
    keywords,
    imageUrl,
    imagePath: item.image_path || "",
    casePath: item.case_path || "",
    prompt: cleanedPrompt,
    negativePrompt,
    createdAt: item.created_at || "",
    searchText: [title, cleanedPrompt, negativePrompt, category.label, style.label, tags.join(" ")].join(" ").toLowerCase(),
  };
}

function main() {
  const prompts = readJson(promptsPath);
  const siteCases = prompts
    .map(mapCase)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));

  writeJson(outputPath, siteCases);
  console.log(`Built site data for ${siteCases.length} case(s).`);
}

main();
