# Awesome GPT-image Prompt Engineering

中文 | [English](./README.md)

> 不是让 AI 随便生成一张“还不错”的图。  
> 而是让你更快、更稳、更可控地画出**你真正想要的图**。

一个围绕 **GPT-image / GPT Image 2 提示词工程** 持续演进的公开项目。

这个库的核心理念不是“堆案例”，而是训练一套 **模块化、可组合、可复用** 的生图思维：

- 摄影风格
- 镜头语言
- 场景设定
- 人物描述
- 光线控制
- 构图方式
- 色彩氛围
- 材质细节
- 情绪表达
- 文字排版

最终目标不是背 Prompt，  
而是慢慢从“会写提示词”，走到“精通提示词工程”。

---

## 这个项目解决什么问题？

这个项目要解决的，不是：

- AI 能不能生成好图

而是：

- **怎么才能更快画出我脑子里真正想要的图**
- **怎么把模糊感觉拆成明确可控的提示词模块**
- **怎么从随机出图，走向稳定出图**
- **怎么建立自己的提示词工程体系**

换句话说：

**好图不是重点。**  
**可控地得到好图，才是重点。**

---

## 核心理念：把 Prompt Engineering 当成模块化设计

一条强 Prompt，很多时候不是“灵机一动写出来的”，  
而是由多个模块组合出来的。

例如一张图，可能由这些模块共同决定：

- 摄影风格：cinematic / editorial / documentary / studio
- 场景设定：cafe / street / luxury apartment / futuristic city
- 人物描述：年龄、气质、服装、姿态、表情、身份感
- 镜头与构图：close-up / mid shot / wide shot / top-down
- 光线控制：soft light / rim light / neon / golden hour
- 氛围控制：moody / dreamy / clean / luxury / lonely
- 材质与细节：skin texture / fabric / glass / metal / fog

所以这个仓库不只是给你看“结果”，  
而是帮你学会：

- **怎么拆**
- **怎么组**
- **怎么调**
- **怎么稳**

---

## 仓库结构

```text
principles/
  提示词工程原则、方法论、拆解思路

modules/
  各类可复用提示词模块
  例如：光线、镜头、人物、场景、氛围、材质

recipes/
  可直接套用的组合公式 / Prompt Recipe

examples/
  最终案例，用来验证模块组合效果

data/
  给后期网站直接读取的结构化索引

scripts/
  索引生成脚本
```

---

## 学习路径

这个库后面会按下面这条学习路径逐步长出来：

### 1. Principles

先建立判断标准：

- 什么叫可控 Prompt
- 什么叫模块化写法
- 为什么很多 Prompt“看起来很长但没法复用”
- 怎么从“描述结果”转成“控制变量”

### 2. Modules

再积累模块：

- 摄影模块
- 场景模块
- 人物模块
- 光线模块
- 氛围模块
- 细节模块

### 3. Recipes

再学组合：

- 人像公式
- 海报公式
- 电商图公式
- 场景图公式
- 产品图公式

### 4. Examples

最后用案例验证：

- 什么模块组合出了什么效果
- 哪些微调会让结果明显变化

---

## 分类方式

按 **用途 > 风格** 组织最终案例；  
按 **控制维度** 组织方法与模块。

### 用途

- 头像
- 海报
- 电商图
- 场景图
- 产品图
- 社媒封面

### 风格

- 写实
- 电影感
- 插画
- 二次元
- 极简
- 潮流

### 模块维度

- 摄影风格
- 镜头语言
- 场景设定
- 人物描述
- 光线控制
- 构图方式
- 氛围控制
- 材质细节
- 色彩控制
- 文字排版

---

## Featured Cases

### 01. Shanghai Bund Rooftop Portrait

- [打开案例目录](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/shanghai-bund-rooftop-portrait/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/shanghai-bund-rooftop-portrait/image.png" alt="Shanghai Bund Rooftop Portrait" width="360" />

#### Prompt

```text
Today's Portrait, elegant Chinese woman, iconic Shanghai The Bund skyline background with Oriental Pearl Tower and Lujiazui skyscrapers, evening dusk golden hour sunset light, high-rise rooftop terrace setting. Features an exquisite and refined beautiful young Chinese woman, natural facial bone structure, clear sharp jawline, seductive yet serene almond-shaped fox eyes, flawless porcelain skin with visible pores and subsurface scattering, no plastic skin. She is in a highly elegant, relaxed, and sophisticated pose, sitting on a vintage terrace sofa. One hand gently supports her chin, fingers delicate and elongated with visible palm lines, the other hand gracefully resting on her knee. Calm and distant expression, subtle enigmatic smile, looking towards the camera. Wearing an oversized white button-up shirt, made of high-quality linen, loosely unbuttoned at the collar, paired with high-waisted tailored khaki trousers. The fabric subtly moves in the wind. Her long, natural black hair is gently blown by the summer evening breeze, loose strands across her face. 35mm film photography aesthetic, analog black mist filter, authentic film grain, high contrast, warm nostalgic film color grading. Shot on Hasselblad medium format, ultra-high resolution, 8k, highly detailed. Perfect anatomical hand and face details, no digital over-sharpening. Composition focused on her as the serene center within the vibrant urban backdrop, shallow depth of field, beautiful bokeh of city lights.
```

#### Negative Prompt

```text
bad anatomy, distorted hands, extra fingers, missing fingers, fused fingers, too many fingers, deformed hands, bad arm anatomy, bad leg anatomy, extra limbs, missing limbs, fused limbs, distorted face, bad face anatomy, plastic skin, overly smooth, smooth skin texture, cartoon, illustration, painting, drawing, low quality, worst quality, lowres, blurred, blurry, jpeg artifacts, watermark, text, signature, bad composition, ugly, deformed, noisy
```

这个案例可以明显看到几种模块的叠加效果：

- 地标场景：上海外滩 + 东方明珠 + 陆家嘴天际线
- 氛围控制：黄昏 golden hour + 城市灯光 bokeh
- 摄影语言：35mm film aesthetic + black mist filter
- 人物描述：精致五官 + 松弛姿态 + 风吹发丝
- 材质细节：亚麻衬衫、皮肤纹理、胶片颗粒

### 02. Coffeehouse Golden Hour Portrait

- [打开案例目录](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/coffeehouse-golden-hour-portrait/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/coffeehouse-golden-hour-portrait/image.png" alt="Coffeehouse Golden Hour Portrait" width="360" />

#### Prompt

```text
Ultra-realistic portrait of a stunningly approachable and friendly young Chinese woman, distinctive refined Asian features, radiant natural glowing skin, warm healing smile, expressive sparkling eyes. She is sitting by the window of a stylish modern coffee house. Wearing a fashionable premium oatmeal-colored chunky knit cardigan over a minimalist silk camisole, layered with delicate dainty gold necklaces. One hand gently resting on her cheek, the other holding a latte with intricate foam art. Relaxed and elegant posture, looking at the camera with kindness. Large glass windows reflecting a blurred contemporary Chinese city street scene. Cinematic lighting with soft golden hour sunlight filtering through, creating subtle lens flares and hazy atmosphere. Warm indoor ambient lighting, Rembrandt lighting on her face. Shot with a 35mm lens, f/1.8 aperture, shallow depth of field, creamy bokeh background. Hasselblad medium format quality, 8k resolution, extreme details, visible skin pores, subsurface scattering, realistic clothing fabric texture, no digital over-sharpening, professional editorial fashion photography style.
```

#### Negative Prompt

```text
bad anatomy, distorted hands, extra fingers, missing fingers, fused fingers, too many fingers, deformed hands, bad arm anatomy, bad leg anatomy, extra limbs, missing limbs, fused limbs, distorted face, bad face anatomy, plastic skin, overly smooth, smooth skin texture, cartoon, illustration, painting, drawing, low quality, worst quality, lowres, blurred, blurry, jpeg artifacts, watermark, text, signature, bad composition, ugly, deformed, noisy
```

这条案例的模块叠加也很明显：

- 场景设定：现代咖啡馆 + 中国城市街景反射
- 氛围控制：治愈感微笑 + 温暖生活方式氛围
- 光线控制：golden hour 窗边光 + 柔和 Rembrandt lighting
- 人物造型：燕麦色针织开衫 + 真丝吊带 + 轻珠宝
- 镜头语言：35mm 镜头 + 浅景深 + 奶油化背景虚化

---

## 适合谁

如果你想要的不是“偶尔出一张好图”，  
而是：

- 稳定出图
- 快速迭代
- 明确控制风格
- 提高命中率
- 降低试错成本

那这个库就是给你准备的。

---

## 怎么使用这个仓库

你可以把这个仓库当成 4 样东西：

### 1. 方法库

看 `principles/`，理解提示词工程的底层思路。

### 2. 模块库

看 `modules/`，积累可复用的控制模块。

### 3. 配方库

看 `recipes/`，直接套用成熟组合公式。

### 4. 案例库

看 `examples/`，验证模块组合后的最终效果。

---

## Data-first，网站友好

虽然这个项目强调传播和学习，  
但底层仍然是为后期网站准备好的。

后期网站可以直接读取：

- `data/prompts.json`
- `data/tags.json`
- `data/categories.json`

来实现：

- 搜索
- 分类筛选
- 标签筛选
- 模块筛选
- 模型筛选

---

## 新增内容

后续新增内容时，可以有 4 种方向：

- 新增一个方法论文档到 `principles/`
- 新增一个提示词模块到 `modules/`
- 新增一个组合公式到 `recipes/`
- 新增一个最终案例到 `examples/`

案例新增仍然使用：

```text
examples/<用途>/<风格>/<案例ID>/
```

并包含：

- `image.webp` 或 `image.png`
- `prompt.md`
- `meta.json`

更新索引：

```bash
node scripts/build-index.js
```

---

## Vision

我希望这个项目最后变成的不是“又一个 Prompt 收集仓库”，  
而是一个真正有用的：

- GPT-image 提示词工程库
- 模块化生图方法库
- 从新手走向老手的训练库
- 可公开传播、也可继续产品化的网站底座

如果你也认同这个方向，欢迎 Star。
