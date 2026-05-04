# Awesome GPT-image Prompt Engineering

[中文说明](./README.zh-CN.md) | English

> This project is not about whether AI *can* generate a beautiful image.  
> It is about how to generate **the exact image you want** faster, more reliably, and with far more control.

An open project focused on **GPT-image / GPT Image 2 prompt engineering**.

This repository is not just a pile of prompts or pretty examples.  
It is built to train a **modular, composable, reusable** way of thinking about image generation:

- photography style
- camera language
- scene setup
- character description
- lighting control
- composition
- color and atmosphere
- material details
- emotion
- typography

The goal is not to memorize prompts.  
The goal is to grow from “someone who can write prompts” into “someone who truly understands prompt engineering.”

---

## What problem does this repo solve?

This project is not trying to answer:

- Can AI generate a good image?

It is trying to answer:

- How do I get the image in my head faster?
- How do I turn vague taste into controllable prompt modules?
- How do I move from random output to stable output?
- How do I build my own prompt engineering system?

In short:

**A good image is not the point.**  
**Getting good images on purpose is the point.**

---

## Core Idea: Prompt Engineering as Modular Design

A strong prompt is often not the result of one lucky paragraph.  
It is the result of multiple modules working together.

For example, one image may be shaped by:

- Photography style: cinematic / editorial / documentary / studio
- Scene setup: cafe / street / luxury apartment / futuristic city
- Character description: age, vibe, outfit, pose, expression, identity
- Camera & composition: close-up / mid shot / wide shot / top-down
- Lighting: soft light / rim light / neon / golden hour
- Atmosphere: moody / dreamy / clean / luxury / lonely
- Material details: skin texture / fabric / glass / metal / fog

So this repository is not only showing results.  
It is teaching you:

- how to break prompts down
- how to combine modules
- how to tune variables
- how to build repeatable control

---

## Repo Structure

```text
principles/
  prompt engineering principles, methods, and breakdown logic

modules/
  reusable prompt modules
  such as lighting, camera, character, scene, atmosphere, material

recipes/
  prompt formulas and reusable compositions

examples/
  final cases used to validate module combinations

data/
  structured data for future websites

scripts/
  indexing scripts
```

---

## Learning Path

This repository is designed to grow along a learning path:

### 1. Principles

Build your judgment first:

- What makes a prompt controllable?
- What makes a prompt modular?
- Why are many long prompts hard to reuse?
- How do you move from “describing results” to “controlling variables”?

### 2. Modules

Then build reusable blocks:

- photography modules
- scene modules
- character modules
- lighting modules
- atmosphere modules
- detail modules

### 3. Recipes

Then learn composition:

- portrait formulas
- poster formulas
- e-commerce formulas
- scene formulas
- product-shot formulas

### 4. Examples

Finally validate with actual outputs:

- which module combination produced which effect
- which small changes created visible differences

---

## Categories

Final cases are organized by **use case > style**.  
Methods and modules are organized by **control dimensions**.

### Use cases

- Portrait
- Poster
- E-commerce
- Scene
- Product Shot
- Social Cover

### Styles

- Realistic
- Cinematic
- Illustration
- Anime
- Minimal
- Trendy

### Module dimensions

- photography style
- camera language
- scene setup
- character description
- lighting control
- composition
- atmosphere
- material detail
- color control
- typography

---

## First Real Case

The first real case is already in the repo:

- [Shanghai Bund Rooftop Portrait](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/shanghai-bund-rooftop-portrait/)

### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/shanghai-bund-rooftop-portrait/image.png" alt="Shanghai Bund Rooftop Portrait" width="360" />

### Prompt

```text
Today's Portrait, elegant Chinese woman, iconic Shanghai The Bund skyline background with Oriental Pearl Tower and Lujiazui skyscrapers, evening dusk golden hour sunset light, high-rise rooftop terrace setting. Features an exquisite and refined beautiful young Chinese woman, natural facial bone structure, clear sharp jawline, seductive yet serene almond-shaped fox eyes, flawless porcelain skin with visible pores and subsurface scattering, no plastic skin. She is in a highly elegant, relaxed, and sophisticated pose, sitting on a vintage terrace sofa. One hand gently supports her chin, fingers delicate and elongated with visible palm lines, the other hand gracefully resting on her knee. Calm and distant expression, subtle enigmatic smile, looking towards the camera. Wearing an oversized white button-up shirt, made of high-quality linen, loosely unbuttoned at the collar, paired with high-waisted tailored khaki trousers. The fabric subtly moves in the wind. Her long, natural black hair is gently blown by the summer evening breeze, loose strands across her face. 35mm film photography aesthetic, analog black mist filter, authentic film grain, high contrast, warm nostalgic film color grading. Shot on Hasselblad medium format, ultra-high resolution, 8k, highly detailed. Perfect anatomical hand and face details, no digital over-sharpening. Composition focused on her as the serene center within the vibrant urban backdrop, shallow depth of field, beautiful bokeh of city lights.
```

### Negative Prompt

```text
bad anatomy, distorted hands, extra fingers, missing fingers, fused fingers, too many fingers, deformed hands, bad arm anatomy, bad leg anatomy, extra limbs, missing limbs, fused limbs, distorted face, bad face anatomy, plastic skin, overly smooth, smooth skin texture, cartoon, illustration, painting, drawing, low quality, worst quality, lowres, blurred, blurry, jpeg artifacts, watermark, text, signature, bad composition, ugly, deformed, noisy
```

This case clearly shows how several modules stack together:

- landmark scene: The Bund + Oriental Pearl Tower + Lujiazui skyline
- atmosphere control: golden-hour dusk + city-light bokeh
- photography language: 35mm film aesthetic + black mist filter
- character description: refined facial features + relaxed pose + wind-blown hair
- material details: linen shirt, skin texture, film grain

---

## For builders, creators, and prompt engineers

If you are not looking for “one lucky good image,” but for:

- more stable output
- faster iteration
- clearer style control
- higher hit rate
- lower trial-and-error cost

then this repository is for you.

---

## How to use this repo

You can use this repository as four things:

### 1. A principles library

Read `principles/` to understand the logic behind controllable prompting.

### 2. A module library

Read `modules/` to collect reusable control blocks.

### 3. A recipe library

Read `recipes/` to reuse tested prompt formulas.

### 4. An example library

Read `examples/` to validate how combinations behave in practice.

---

## Data-first, website-ready

Although this project is built for learning and sharing,  
its underlying structure is also ready for future websites.

Future frontends can directly consume:

- `data/prompts.json`
- `data/tags.json`
- `data/categories.json`

to support:

- search
- category filtering
- tag filtering
- module filtering
- model filtering

---

## Add a new item

There are four main contribution directions:

- add a principle document to `principles/`
- add a prompt module to `modules/`
- add a prompt recipe to `recipes/`
- add a final case to `examples/`

Cases still use:

```text
examples/<use-case>/<style>/<case-id>/
```

and include:

- `image.webp` or `image.png`
- `prompt.md`
- `meta.json`

Rebuild the index with:

```bash
node scripts/build-index.js
```

---

## Vision

I do not want this to become just another prompt dump.

I want it to become a genuinely useful:

- GPT-image prompt engineering library
- modular image-generation knowledge base
- training ground from beginner to expert
- public-facing project that can later evolve into a real product

If that direction resonates with you, feel free to star the repo.
