# Contributing

[中文说明](./CONTRIBUTING.zh-CN.md) | English

This repository is no longer just a case collection.  
It is a **GPT-image prompt engineering library**.

There are four main contribution types:

- Principles: `principles/`
- Modules: `modules/`
- Recipes: `recipes/`
- Examples: `examples/`

## 1. Add a principle

Best placed in:

- `principles/`

Examples:

- what makes a prompt modular
- how to improve controllability
- how to break ideas into variables
- how to remove vague or low-value wording

## 2. Add a module

Best placed in:

- `modules/`

Examples:

- photography style modules
- scene modules
- character modules
- lighting modules
- atmosphere modules
- material modules

## 3. Add a recipe

Best placed in:

- `recipes/`

Examples:

- portrait prompt formulas
- poster prompt formulas
- e-commerce formulas
- product-shot formulas

## 4. Add an example

Examples validate how module combinations behave.

Directory format:

```text
examples/<use-case>/<style>/<case-id>/
```

Steps:

1. Add the image as `image.webp` or `image.png`
2. Write `prompt.md`
3. Write `meta.json`
4. Run:

```bash
node scripts/build-index.js
```

5. Confirm `data/*.json` was updated

## Naming rules

- Use lowercase kebab-case for `case-id`
- Examples:
  - `clean-girl-portrait`
  - `cyber-movie-poster`
  - `minimal-skincare-product-shot`

## Recommended example metadata fields

`meta.json` should include at least:

- `id`
- `title`
- `use_case`
- `style`
- `model`
- `tags`
- `aspect_ratio`
- `cover`
- `created_at`

## Image recommendations

- Prefer `webp`
- Keep the main image filename stable: `image.webp` or `image.png`

## Prompt recommendations

- Keep the full original prompt
- Prefer modular prompt writing
- If useful, also include:
  - scene notes
  - style notes
  - control variables
  - replaceable modules
