const fs = require("fs");
const path = require("path");

const SOURCE_JSON =
  "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main/data/cases.json";
const SOURCE_RAW_BASE =
  "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/main";
const OUTPUT_PATH = path.join(__dirname, "..", "data", "site-cases.json");
const SAMPLE_SIZE = 8;

function slugify(input) {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "") || "other";
}

function toImageUrl(imagePath) {
  if (!imagePath) return "";
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  return `${SOURCE_RAW_BASE}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
}

function splitNegativePrompt(prompt = "") {
  const text = String(prompt).trim();
  const match = text.match(/\n+\s*Negative Prompt:\s*([\s\S]*)$/i);
  if (!match) {
    return { prompt: text, negativePrompt: "" };
  }
  return {
    prompt: text.slice(0, match.index).trim(),
    negativePrompt: match[1].trim(),
  };
}

function pickSampleCases(cases) {
  const featured = cases.filter((item) => item.featured);
  const picked = [];
  const usedCategories = new Set();

  for (const item of featured) {
    if (!usedCategories.has(item.category)) {
      picked.push(item);
      usedCategories.add(item.category);
    }
    if (picked.length >= SAMPLE_SIZE) break;
  }

  if (picked.length < SAMPLE_SIZE) {
    for (const item of featured) {
      if (!picked.find((x) => x.id === item.id)) {
        picked.push(item);
      }
      if (picked.length >= SAMPLE_SIZE) break;
    }
  }

  return picked;
}

function mapCase(item) {
  const { prompt, negativePrompt } = splitNegativePrompt(item.prompt || "");
  const styleLabel = Array.isArray(item.styles) && item.styles.length ? item.styles[0] : "Mixed";
  const tags = [...new Set([...(item.styles || []), ...(item.scenes || [])])];

  return {
    id: `freestylefly-${item.id}`,
    title: item.title || `Case ${item.id}`,
    category: slugify(item.category),
    categoryLabel: item.category || "Other",
    style: slugify(styleLabel),
    styleLabel,
    tags,
    keywords: tags.slice(0, 4).join(" · "),
    imageUrl: toImageUrl(item.image),
    imagePath: item.image || "",
    prompt,
    negativePrompt,
    sourceLabel: item.sourceLabel || "Original source",
    sourceUrl: item.sourceUrl || item.githubUrl || "",
    sourceRepo: "freestylefly/awesome-gpt-image-2",
    sourcePath: item.githubUrl || "",
    githubUrl: item.githubUrl || "",
    featured: Boolean(item.featured),
    searchText: [
      item.title,
      item.category,
      styleLabel,
      tags.join(" "),
      prompt,
      negativePrompt,
    ]
      .join(" ")
      .toLowerCase(),
  };
}

async function fetchJson(url) {
  const headers = { "User-Agent": "codex-gpt-image-sync" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function main() {
  const payload = await fetchJson(SOURCE_JSON);
  const cases = Array.isArray(payload.cases) ? payload.cases : [];
  const sample = pickSampleCases(cases).map(mapCase);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(sample, null, 2) + "\n", "utf8");
  console.log(`Imported ${sample.length} sample case(s) from freestylefly.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
