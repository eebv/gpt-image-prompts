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

## Featured Cases
<!-- FEATURED_CASES_START -->
### 01. Case 0021

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0021/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0021/image.png" alt="Case 0021" width="360" />

#### Prompt

```text
请根据{主题}自动生成一张“博物馆图鉴式中文拆解信息图”。

要求整张图兼具真实写实主视觉、结构拆解、中文标注、材质说明、纹样寓意、色彩含义和核心特征总结。你需要根据主题自动判断最合适的主体对象、服饰体系、器物结构、时代风格、关键部件、材质工艺、颜色方案与版式结构，用户无需再提供其他信息。

整体风格应为：国家博物馆展板、历史服饰图鉴、文博专题信息图，而不是普通海报、古风写真、电商详情页或动漫插画。背景采用米白、绢纸白、浅茶色等纸张质感，整体高级、克制、专业、可收藏。

版式固定为：
- 顶部：中文主标题 + 副标题 + 导语
- 左侧：结构拆解区，中文引线标注关键部件，并配局部特写
- 右上：材质 / 工艺 / 质感区，展示真实纹理小样并附说明
- 右中：纹样 / 色彩 / 寓意区，展示主色板、纹样样本和文化解释
- 底部：穿着顺序 / 构成流程图 + 核心特征总结

若主题适合人物展示，则以真实人物全身站姿为中央主体；若更适合器物或单体结构，则改为中心主体拆解图，但整体仍保持完整中文信息图形式。所有文字必须为简体中文，清晰、规整、可读，不要乱码、错字、英文或拼音。重点突出真实结构、材质差异、文化说明与图鉴气质。

避免：海报感、影楼感、电商感、动漫感、cosplay感、乱标注、错结构、糊字、假材质、过度装饰。
```

#### Negative Prompt

```text

```

### 02. Case 0020

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0020/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0020/image.png" alt="Case 0020" width="360" />

#### Prompt

```text
你是一位世界级游戏与动漫概念设计大师，擅长制作 “深度拆解式角色设定图”。你的能力包括：• 像素级结构推理 • 多层服装与配件透视 • 情绪微表情分析 • 物品与材质的真实还原 • 基于性格推理日常物品（而非简单套用模版）[创作目标] 严格基于用户提供的角色形象（照片 / 描述），生成一张完整的全景式角色概念分解图（横图），风格专业、逻辑自洽、生活化厚度高。 图中必须包含： 1.中心人物全身立绘（标准姿势或轻动态） 2.围绕人物的拆解元素：服装/表情/材质/随身物品/武器横置展示3.生活物件 + 私密物品 + 化妆品 + 包内物展示，可以发散思维4.材质与细节放大图5.手写风注释 + 引导线 6.生成一张包含所有这些元素的组合图，确保透视准确，光影统一，注释清晰7.背景: 使用米黄色、羊皮纸或浅灰色纹理背景，营造设计手稿的氛围。[构图规范] 1.中心主体（最大块）• 全身立绘，光影统一 • 姿势自然、专业 • 保持概念设计美术的规范比例2.环绕拆解区（有序排列）使用结构化的环绕展示方式，包含： • 服装分层展示（外套 → 内层 → 配件 → 鞋袜）• 头部表情集（3–4 个不同情绪）• 材质特写（皮革/金属/织物/饰品）• 随身包袋与内容物 : 绘制角色的日常通勤包或手拿包，并将其“打开”，展示散落在旁的物品。 • 化妆品 / 护理用品组合 • “私密物品”展示（基于人物性格推理，不落入刻板类型）[深度拆解要求]1. 服装分层（多样化）根据角色性格、职业、生活习惯自动生成：运动型，干练型，文艺，冷酷型2. 表情集 • 3–4 个头部特写（注意原图角色特征）• 每个展示不同微表达层次：• 微笑 • 若有所思 • 紧张 • 放松3. 材质特写 • 放大关键材质（皮革、金属、织物纹理） • 展示光泽、粗糙度、纹理深度 • 增加“物品材质变化”而不是重复一种4. 随身与私密物品（去套路化）围绕“角色真实生活方式”推理其物品，而非随机择取： • 工作相关物 • 兴趣物品 • 小型收藏 • 日常药品 / 维生素 • 使用痕迹 • 不作无意义性感化处理[约束]使用中文，注意检查中文是否错误
```

#### Negative Prompt

```text

```

### 03. Case 0019

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0019/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0019/image.png" alt="Case 0019" width="360" />

#### Prompt

```text
中文版】

[文字内容]
画面具有精美的文字排版设计（无背景框设计）。左上角如同专属图标般，使用优雅的中文衬线体写上作品名“一代女皇 武则天”。画面左下角以电影字幕的形式，排版一句霸气的经典台词“日月当空，唯我独尊”。画面右下角清晰地带有小巧的手写体签名文本“eebv”。
[主体面部/手部与穿搭描述]
画面聚焦于千古女帝“武则天”的高品质二次元形象。
【左侧+中央区域（60%）】：武则天的腰部以上大半身特写。她面容绝美且充满不可侵犯的威严，额头点缀着标志性的红色花钿（Huadian），眼神睥睨天下，视线灵动且充满压迫感。她头戴极其繁复华丽的大唐金色凤冠（流苏与步摇细节极其精致），身着玄黑、朱红与赤金交织的奢华帝王华服，丝绸的质感与厚重的金线刺绣栩栩如生。发丝随风飘扬，皮肤白皙如玉，眼眸中带有金色的高光与虹彩层次。
【右侧区域（40%）】：武则天的全身动态立像。展现其君临天下的“经典名场面”——她屹立于九五之尊的高台之上，单手霸气挥舞长袖，周身环绕着盘旋的金色巨龙虚影。全身像带有轻微的发光描边与虚化过渡，与左侧半身像在暖金色调和光照方向上保持绝对统一。
[环境与细节]
背景为契合大唐盛世与帝王气场的宏大氛围渲染。隐约可见盛唐宫殿建筑的虚影，空气中飘散着璀璨的金色光斑、神圣的粒子光芒以及缓缓飘落的国色牡丹花瓣。背景色彩与角色完美融合，不喧宾夺主。
[构图与镜头]
采用16:9横版双区域布局构图。左侧极具视觉冲击力的特写与右侧宏大的全身动态相呼应，构图纯净、宏大，留白与元素分布平衡，呼吸感充足。
[光影与色彩]
整体采用极具皇家威仪的暖金与赤红色调（暖色系）。光影细腻绝伦，体积光从斜上方打下，照亮凤冠与金丝刺绣，形成绝美的明暗过渡。
[风格与渲染]
忠于经典东方奇幻史诗设定的高品质二次元动漫插画。笔触细腻如同官方顶级原画级别（Official Art）。4K超高清画质，无噪点、无伪影，具备可直接用作桌面壁纸或史诗级海报的极致完成度。
```

#### Negative Prompt

```text

```

### 04. Case 0018

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0018/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0018/image.png" alt="Case 0018" width="360" />

#### Prompt

```text
Prompt:
cinematic vertical movie poster, modern military realism, modern warfare, 1girl, 4boys, layered vertical composition, ensemble cast, (right side close-up profile of male soldier:1.2), helmet, (night vision goggle unit:1.1), (NVG:1.1), tactical gear, detailed patches, (orange tinted goggles:1.1), calm expression, resolute gaze, (upper left profile close-up of short-haired female soldier:1.1), tactical scarf, (holding military knife:1.1), focused expression, (left center mature male soldier:1.1), communication headsets, (tactical sunglasses:1.1), looking down, alert, (lower center young soldier:1.1), frontal alert pose, (holding assault rifle:1.1), (immediate foreground bottom aimed soldier hands and rifle barrel:1.2), creating strong depth of field, all soldiers in varied modern tactical gear and camouflage, war-torn modern city ruins, smoke, smoke plume, fire embers, debris, helicopters in sky, tense global anti-terrorism operation atmosphere, strong cinematic lighting, heavy volume rays, dust motes, gritty texture, film grain, highly detailed, 8k resolution, cinematic lighting, ultra-realistic rendering, epic feel, emphasized military realism, grimy style, low saturation, cold-toned color palette.

Negative Prompt:
ugly, deformed, poorly drawn, plastic skin, digital over-sharpening, overly retouched, unnatural anatomy, bad hands, extra fingers, missing fingers, floating limbs, cartoon, illustration, anime, low resolution, blurry, studio artificial lighting, over-saturated, bright colors, clean uniform, smiling faces, cheerful mood, non-military equipment, civilian background.
```

#### Negative Prompt

```text

```

### 05. Case 0017

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0017/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0017/image.png" alt="Case 0017" width="360" />

#### Prompt

```text
请根据【菜名】生成一张高完成度竖版「菜谱步骤卡」。

整体风格干净、温暖、有生活气息，适合小红书和公众号发布。

图片需要包含：
菜名标题
成品主视觉
食材清单
调料清单
步骤 1 到步骤 6
烹饪时间
难度等级
口味标签
小贴士

版式要求：
竖版 3:4
信息清楚
步骤图标化
食材视觉真实
整体像一本高级家庭料理书的单页

不要做成普通菜单海报，要让用户看完就能照着做。
```

#### Negative Prompt

```text

```

### 06. Case 0016

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0016/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0016/image.png" alt="Case 0016" width="360" />

#### Prompt

```text
【中文版】

[文字内容]
画面中无明显文字内容。右下角带有小巧的手写体签名文本“eebv”。
[主体面部/手部与穿搭描述]
同一位亚洲人物的四宫格职业形象照。面部保留极其真实的原生质感、五官结构与年龄感，拒绝过度磨皮或夸张的“商务精英”滤镜，表情自然亲和。

专业简历照（左上）：身穿剪裁得体的深色西装或高级职业套装，姿态端庄专业。

LinkedIn头像（右上）：身穿现代商务休闲装（Smart Casual），展现自信且极具亲和力的微笑。

创业者品牌照（左下）：身穿具有设计感的高级便装，姿态从容，展现自信的创业者松弛感。

轻商务社交照（右下）：身穿舒适的浅色针织衫或高质感衬衫，姿态放松，极具沟通欲与社交亲和力。
[环境与细节]

左上：干净纯粹的浅灰或高级白色无缝背景。

右上：明亮通透的现代写字楼玻璃窗或自然虚化的办公室背景。

左下：极具格调的创意工作室或高级休息区。

右下：采光极好的安静咖啡馆或充满自然光的高级室内一角。
[构图与镜头]
采用2x2网格拼图排版（2x2 grid layout）。主要使用85mm经典人像镜头，包含半身像与胸像特写。视线平视，景深控制得当，主体清晰，背景柔和虚化，彻底告别传统证件照的死板与僵硬感。
[光影与色彩]
高级且自然的人像摄影光影。根据不同场景切换打光方式（如棚拍平滑柔光、办公室自然窗光、咖啡馆通透漫反射光）。色彩干净、通透，呈现出专业且值得信赖的基调。
[风格与渲染]
顶级的高端职业肖像与个人品牌摄影（High-end professional portraiture）。极其注重真实感的物理渲染，8K分辨率，肤质生动自然，呈现出适合于官网、LinkedIn、小红书的顶级商业人像大片。
```

#### Negative Prompt

```text

```

### 07. Case 0015

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0015/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0015/image.png" alt="Case 0015" width="360" />

#### Prompt

```text
【中文版】

[文字内容]
画面呈现极具高级感的小红书风格发型顾问报告排版。包含清晰的排版文本：大标题“AI 发型分析 / Hairstyle Analysis Report”，以及各区块的独立标签“Before 原始发型”、“Best Match 最推荐发型”、“Worth Trying 可尝试发型”、“Avoid 不太推荐发型”。版面中整齐穿插着“脸型分析”、“发量与头型”、“刘海建议”、“发长建议”、“卷度建议”、“发色建议”与“发型师总结”的文本信息区块。画面右下角清晰地带有小巧的手写体签名文本“eebv”。
[主体面部/手部与穿搭描述]
画面中所有的头像拼图都必须严格保持为同一位女性的真实面孔（极其一致的五官结构、脸型比例、真实肤质、年龄感与气质）。她身穿极简高级的纯色基础款上衣。图片通过并排拼图直观展示她驾驭不同发型的真实效果（所有小图也必须是她本人的脸）：包含一张【Before】的原始发型大图；一张完美修饰脸型的【Best Match】主推发型大图（例如：蓬松高颅顶的法式微卷发，显得脸小且气质优雅）；以及作为辅助参考的【Worth Trying】小图（例如：干练修饰下颌线的锁骨短发）和【Avoid】避雷发型小图（例如：贴头皮的直发或厚重压抑的齐刘海）。
[环境与细节]
极简纯净的浅灰色或奶油白无缝纯色背景。没有任何杂乱的背景元素，将视觉焦点绝对集中在人物面容与发型纹理的适配对比上。
[构图与镜头]
竖版3:4比例，高端形象管理画册与干货海报排版构图（Infographic / Presentation board layout）。主次分明，“Before”与“Best Match”的对比大图占据视觉核心，其他建议款式的小图与文字分析报告有序环绕或分区排列。统一采用平视标准肖像镜头，无透视畸变。
[光影与色彩]
顶级沙龙人像棚拍光影（Premium salon beauty lighting）。光线明亮、柔和且均匀，完美展现每一丝头发的质感、光泽与发丝走向，同时还原肤色的自然通透感，整体色彩低饱和、克制且高级。
[风格与渲染]
首尔高端美发沙龙/形象定制视觉报告风格。极度写实的摄影质感与精美的平面排版相结合，摒弃重度磨皮的网红滤镜感（保留真实皮肤毛孔），8K超高分辨率，呈现出极具权威感与参考价值的专业发型图鉴。
```

#### Negative Prompt

```text

```

### 08. Case 0014

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0014/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0014/image.png" alt="Case 0014" width="360" />

#### Prompt

```text
请生成一张适合小红书发布的【城市】三天旅游攻略信息图。

图片为竖版 3:4，整体风格清爽、明亮、有旅行杂志感。

内容需要包含：
城市名称
三天路线安排
每天核心景点
交通建议
美食推荐
拍照打卡点
住宿区域建议
预算参考
避坑提醒

整体排版要像一张高收藏旅游攻略卡，信息清楚，模块分明，适合用户截图保存。画面要有城市地标、路线箭头、小图标、时间轴和清晰标题。
```

#### Negative Prompt

```text

```

### 09. Case 0013

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0013/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0013/image.png" alt="Case 0013" width="360" />

#### Prompt

```text
请根据【主题】生成一张高质量竖版「科普百科图」。

这张图需要兼具图鉴感、百科感、信息结构感、收藏感。整体风格参考高级博物图鉴、现代百科书页、生活方式知识卡和社交媒体高传播信息图。

请让画面包含：
清晰漂亮的主题主视觉
局部特征放大细节
多个圆角模块化信息分区
清楚的标题层级与重点标签
简洁但丰富的百科内容
可视化评分、要点总结或 Top 5 模块

内容栏目请根据主题自动适配，可以包含：
基础档案
分类信息
外观特征
习性或生态
形成机制
使用条件
养护建议
风险与注意事项
适合人群
优缺点对比
快速评分卡

视觉要求：浅色干净背景，柔和配色，轻阴影，精致小图标，圆角信息框，整洁排版，信息密度高但不拥挤。
```

#### Negative Prompt

```text

```

### 10. Case 0012

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0012/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0012/image.png" alt="Case 0012" width="360" />

#### Prompt

```text
个人色彩 × 风格总诊断页 (Overall Diagnosis)
【中文版】
[文字内容]
高级专业的图文排版，大标题为“Personal Color Diagnosis / 个人色彩诊断”，包含“Best Colors”、“Worst Colors”、“Style Vibe”等标签。右下角带有小巧的手写体签名文本“eebv”。
[主体面部/手部与穿搭描述]
核心视觉为一个极度清晰、真实还原上传者五官比例与肤质的面部大头像（Headshot/Portrait）。她面带自然微笑，穿着极简的高级基础款上衣，展现出诊断后的和谐色彩氛围。
[环境与细节]
浅奶油色或米白色纯色无缝背景。人物头像周围环绕着具有设计感的几何色块、高级布料色卡，呈现出她的专属色彩图谱。
[构图与镜头]
竖版3:4小红书干货海报排版。人物的正面半身/肩颈头像稳居画面正中央或视觉重心，文字与色板信息有序分布在四周。
[光影与色彩]
明亮且柔和的平视美颜光（Flat beauty lighting），完美还原肤色冷暖调，整体色彩低饱和、高级且和谐。
[风格与渲染]
小红书高赞形象顾问分析报告风格，8K高清写实，极具专业知性与轻奢质感。
```

#### Negative Prompt

```text

```

### 11. Case 0011

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0011/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0011/image.png" alt="Case 0011" width="360" />

#### Prompt

```text
画面呈现类似高端配镜顾问提案板的专业图文排版。包含清晰的中文与辅助英文文本：大标题“AI 眼镜风格适配报告 / Before & After Glasses Style Matching Report”，以及各个板块标签“Before 原始状态”、“After 主推推荐”、“Face Shape 脸型”、“Feature Weight 五官量感”、“Nose Bridge 鼻梁条件”、“Frame Width Fit 镜框宽度适配”、“Best Options 推荐区”、“Worth Trying 可尝试区”、“Less Flattering 不推荐区”和底部的“Glasses Guide”。画面右下角清晰地带有小巧的手写体签名文本“eebv”。
[主体面部/手部与穿搭描述]
画面中展示的是同一位人物（严格保持一致的真实面部特征、五官比例、肤质纹理、年龄感与原有衣着）的多张头像拼图。所有展示区均是人物亲自佩戴眼镜的真实效果，绝非单纯的空镜框：

左侧（Before）：人物未戴眼镜的原始面部大图，表情自然。

右侧（After主推）：人物佩戴最完美适配的高级质感眼镜（如精致的细边金属框或轻量化板材框）的大图。

周围区域：分别展示该人物佩戴不同款式眼镜的半身头像，包含推荐款（如经典玳瑁色圆框）、可尝试款（如透明亚克力框）以及避雷款（如过于笨重的粗黑方框或完全不修饰脸型的款式），直观对比不同框型、粗细、颜色对同一张脸的气质改变。
[环境与细节]
极简的浅色高级灰或纯白背景，没有任何抢眼的背景杂物，确保视觉焦点完全集中在人物面部与眼镜的适配度分析上。
[构图与镜头]
采用横向4:3比例的杂志型分析海报构图（Infographic/Presentation board layout）。左侧原始大图与右侧佩戴大图形成强烈对比，周围有条理地环绕着其他款式试戴图与排版整洁的分析文本区块。底部横向排列执行指南。镜头统一采用证件/肖像标准的平视视角，无透视畸变。
[光影与色彩]
专业的高级棚拍人像光影，光线明亮、均匀且透彻（Flat beauty lighting）。精准展现镜框材质的光泽（金属反光或板材透光感），同时避免镜片出现严重的杂乱反光遮挡眼睛，整体色彩克制、专业。
[风格与渲染]
高端形象管理视觉报告风格。极致的写实摄影与精美平面设计的结合，8K超高分辨率。彻底摒弃过度磨皮的美颜滤镜感，保留真实的毛孔与皮肤细节，呈现出极具说服力与参考价值的专业配镜图鉴。
```

#### Negative Prompt

```text

```

### 12. Case 0010

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0010/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0010/image.png" alt="Case 0010" width="360" />

#### Prompt

```text
[文字内容]
画面呈现类似小红书风格的时尚杂志排版。包含清晰的排版文本，如“Before”、“After”标签，以及具有设计感的“四季韩系潮牌穿搭指南 / Korean Streetwear Styling Guide”大标题。版面中穿插分布着色彩推荐色板（Color palette swatches）、配色公式与简短的穿搭避雷提示。文字信息占比严格控制在30%以内。画面右下角清晰地带有小巧的手写体签名文本“eebv”。
[主体面部/手部与穿搭描述]
同一位亚洲女性的真实面容，拒绝过度美颜或千篇一律的网红脸，保留极其真实的人像特征与五官比例，身材高挑。画面以多图拼贴的形式展示：左侧或角落带有一张较小的原始形象（Before）；视觉中心为醒目的主推造型（Hero After），她身穿极具首尔街头感的韩系潮牌（如短款露脐上衣搭配宽松高腰阔腿裤，外搭Oversized廓形西装或夹克），展现出轻微的性感与极佳的身材比例；周围环绕着5到6套不同季节（春夏秋冬）的延展街拍Look，包含针织衫、单宁牛仔、风衣与羽绒服等元素的自然变换。
[环境与细节]
极简纯净的纯白或浅灰无缝纸背景（pure white seamless paper background），没有任何杂乱的背景元素，将所有的视觉焦点完全集中在人物穿搭、服饰材质细节与排版设计上。
[构图与镜头]
采用竖版3:4比例的时尚画册排版构图（Editorial lookbook collage layout）。主次分明，最大的主推造型占据核心视觉，辅助造型与文字色块有序排列在四周。使用标准人像镜头拍摄，精准还原衣服的物理版型与人物的真实体态，无畸变。
[光影与色彩]
明亮干净的韩系商业棚拍光影（Bright studio lighting）。光线柔和且分布均匀，完美还原服装面料的真实色彩与质感，整体色调清透、高级且具有潮流感。
[风格与渲染]
首尔买手店（Seoul select shop）高阶时尚Lookbook风格。结合了极其逼真的真人摄影与精美的平面设计排版，画面清晰锐利（8K分辨率），写实感极强，具有真实可参考的穿搭指南属性。
```

#### Negative Prompt

```text

```

### 13. Case 0009

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0009/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0009/image.png" alt="Case 0009" width="360" />

#### Prompt

```text
1girl, live-action cosplay of [Name], photorealistic young woman, ultra-realistic skin texture, multiple views, 4-page magazine layout, fashion magazine spread, photo collage, wearing various different swimsuits, diverse colors and patterns, different hairstyles, varied dynamic poses, no repeated poses, expressive faces, (shy:1.1), (seductively biting lip:1.1), confident expression, playful tongue out, magazine title, stylish catchphrases, typography, small handwritten signature text "eebv" in the bottom-right corner, clean professional lighting, clear atmosphere, minimal visual effects, no excessive glitter, no heavy grain, perfect anatomy, accurate limbs, harmonious and well-balanced composition, highly detailed, 8k, masterpiece, fashion editorial photography.

Negative Prompt:
ugly, deformed, poorly drawn, bad anatomy, bad hands, extra fingers, missing limbs, distorted limbs, messy layout, excessive glitter, heavy noise, overly dramatic lighting, over-sharpened, cluttered background, cartoon, 3d render, illustration, text outside of layout design.
```

#### Negative Prompt

```text

```

### 14. Case 0007

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0007/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0007/image.png" alt="Case 0007" width="360" />

#### Prompt

```text
Japanese negative film aesthetic, late-night last train scene, soft cold fluorescent lighting mixed with subtle motion blur, slight overexposure highlights, low contrast, muted desaturated tones, subtle film grain, candid snapshot feeling, imperfect composition

inside a nearly empty train carriage, quiet and still, faint reflections on the window glass, city lights streaking softly outside

a stunning beautiful Japanese idol with a subtle sensual presence, slender natural body line, effortless charm, slightly distant and emotionally unreadable

outfit: slightly oversized white shirt with a few top buttons undone, revealing a hint of collarbone and inner layer, paired with a short skirt; sheer black stockings; the shirt slightly slipping off one shoulder naturally, not intentional; soft fabric wrinkles adding realism

pose: sitting by the window, legs gently crossed or slightly angled, one hand loosely holding a phone resting near her thigh, the other lightly touching the seat or brushing hair; posture relaxed, slightly leaning, body language open but unguarded

expression: calm, distant gaze, eyes half-lidded, lips slightly parted, looking outside or briefly toward camera without intention

hair: slightly messy natural dark hair, soft strands falling around the face, subtle movement

mood: quiet, intimate, late-night solitude, “moment between moments”, subtle sensuality through natural posture and accidental exposure, not posed, not performative
```

#### Negative Prompt

```text

```

### 15. Case 0006

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0006/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0006/image.png" alt="Case 0006" width="360" />

#### Prompt

```text
Prompt:
1girl, young African woman, casual home attire, ultra-realistic candid iPhone snapshot, relaxed distracted expression, looking away mid-conversation, authentic natural skin texture, slight skin imperfections, visible pores, no plastic skin, casually sitting on an unmade messy bed, loosely holding a skincare product, natural relaxed hand grip, product not perfectly facing camera, normal Nigerian bedroom environment, messy pillows, visible charger cable, everyday clutter, imperfect off-center framing, slightly uneven natural window daylight, realistic daylight shadows, slight motion blur, digital camera noise, authentic film grain, raw casual snapshot aesthetic, highly detailed, unpolished reality.

Negative Prompt:
commercial product photography, ad-style posing, studio lighting, perfect glowing skin, plastic skin, over polished, centered perfect composition, heavy makeup, artificial lighting, rim lighting, clean organized room, holding product directly to camera, professional photo shoot, text, watermark, depth of field overkill.
```

#### Negative Prompt

```text

```

### 16. Case 0005

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0005/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0005/image.png" alt="Case 0005" width="360" />

#### Prompt

```text
Prompt:
character sheet, concept art, 1girl, young woman, multiple views, scrapbook layout, journaling style, cozy aesthetic, vintage watercolor and pencil sketch style, beautiful delicate features, messy high bun, loose hair strands, wearing a loose navy blue button-up shirt, sleeves rolled up, light beige loose drawstring pants, vintage film camera on shoulder strap. Main half-body portrait standing with hand in pocket, six expression headshots (happy, annoyed, sleepy, surprised, focused, laughing), three full-body action poses (running with tote bag, taking a photo with camera, sitting cross-legged writing in a notebook). Warm textured paper background, masking tape, paper clips, floral doodles, cute illustrated small icons (coffee cup, books, cat, camera, color palette swatches), text, typography, handwritten notes, warm vintage color grading, soft diffused lighting, earthy tones, highly detailed illustration, masterpiece, aesthetic, visually pleasing.

Negative Prompt:
ugly, deformed, poorly drawn, poorly written text, bad anatomy, bad hands, extra fingers, missing fingers, floating limbs, messy layout, over-saturated, bright neon colors, photorealistic, 3d render, low resolution, blurry, chaotic composition, completely different characters in views.
```

#### Negative Prompt

```text

```

### 17. Case 0004

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0004/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0004/image.png" alt="Case 0004" width="360" />

#### Prompt

```text
Prompt:
2x2 grid layout, multiple views of the same person, 1girl, young woman, natural casual look, ultra-realistic delicate facial features, natural freckles, wearing round tortoiseshell glasses, (top-left: front-facing portrait, direct eye contact, calm expression:1.1), (top-right: extreme macro close-up of eye behind glasses, ultra-detailed iris:1.2), (bottom-left: slightly lower angle portrait, subtle expression:1.1), (bottom-right: side profile portrait, natural pose, looking away:1.1), soft neutral background, minimalist photography studio setup, 85mm lens, shallow depth of field, soft diffused natural lighting, soft shadows, warm neutral color grading, high-end editorial portrait photography, ultra-detailed authentic skin texture, visible skin pores, minimal retouching, subsurface scattering, no digital over-sharpening, 8k, masterpiece.

Negative Prompt:
ugly, deformed, poorly drawn, plastic skin, over polished, heavily retouched, thick makeup, facial hair, beard, messy background, text, watermarks, distorted glasses, bad eyes, studio artificial harsh lighting, overly saturated, anime, cartoon, illustration, low resolution, blurry.
```

#### Negative Prompt

```text

```

### 18. Case 0003

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0003/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0003/image.png" alt="Case 0003" width="360" />

#### Prompt

```text
Prompt:
1girl, slim fit body, toned legs, long flowing hair falling down back, natural casual makeup, subtle smile, relaxed happy expression, looking back over right shoulder, looking at viewer, wearing a short white sleeveless dress, smocked fitted bodice, slightly flared skirt, wide black belt, barefoot, standing, graceful torso twist, holding a light brown spotted cat close to chest, cozy minimalist indoor bedroom, green walls, white stand covered with light blue blanket on the left, background brown tabby cat resting on blanket, extreme worm's-eye view, ground level shot from behind, dramatic low angle, 24mm wide-angle lens, medium shot, dynamic perspective, forced perspective legs dominating foreground, high-key lighting, bright and airy, flat beauty lighting, extremely soft shadows, low contrast, candid lifestyle photography, social media snapshot aesthetic, ultra-detailed, photorealistic, 8k resolution, highly detailed skin texture, authentic fur texture.

Negative Prompt:
low resolution, blurry, incorrect anatomy, extra fingers, distorted face, deformed cat, deformed hands, weak perspective, dark lighting, image noise, digital art, cartoon, illustration, anime, poor proportions, bad framing.
```

#### Negative Prompt

```text

```

### 19. Case 0002

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0002/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0002/image.png" alt="Case 0002" width="360" />

#### Prompt

```text
Prompt:
The word "GenAngels" explicitly and naturally engraved on the wooden structure at the base of the mast, typography, 2girls, professional fashion models, ultra-realistic delicate facial features, natural skin texture, visible skin pores, natural pose, interacting with wooden mast and rigging wires, (foreground model wearing a brown and white striped ribbed-knit one-piece bodysuit:1.2), (background model holding a blue and white striped towel:1.1), traditional sailboat, clear Mediterranean sky, turquoise sea, bright summer day, vertical 9:16 aspect ratio, strictly centered composition, symmetrical balance, medium shot, cinematic Denis Villeneuve style photograph, sun-drenched, bright daylight, natural sunlight, crisp atmosphere, slight lens flare, high contrast, cinematic color grading, highly detailed, ultra-high resolution, 8k, photorealistic, sharp focus, Hasselblad medium format, masterpiece.

Negative Prompt:
ugly, deformed, poorly drawn, plastic skin, digital over-sharpening, overly retouched, unnatural anatomy, bad hands, extra fingers, missing fingers, floating limbs, cartoon, illustration, anime, low resolution, bad text, misspelled, watermark, blurry, studio artificial lighting, over-saturated.
```

#### Negative Prompt

```text

```

### 20. Case 0001

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0001/)

#### Output

<img src="./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/0001/image.png" alt="Case 0001" width="360" />

#### Prompt

```text
Prompt:
1girl, young adult woman in her 20s, ultra-realistic delicate refined East Asian features, soft oval face, slim nose bridge, half-open eyes, lazy dazed expression, slightly parted lips, translucent soft-matte makeup, natural rosy lips, long black-brown straight hair, messy fluffy hair, hair covering one eye, wearing a tall black bunny-ear headband with white lace detail, wearing a black spaghetti-strap camisole with white lace trim, both hands adjusting shoulder straps, detailed hand gestures, visible knuckle shadows, authentic skin texture with visible pores, bathroom mirror selfie, indoor washroom, beige brown-gray tiled wall, towel rack, slightly messy background, phone mirror selfie perspective, vertical 9:16 aspect ratio, close-up half-body shot, holding phone, camera looking slightly upward, slight selfie-angle asymmetry, warm bathroom ceiling downlight, harsh direct top lighting, specular highlights on forehead and shoulders, hair casting shadow on face, warm white balance, localized overexposure, low-resolution phone snapshot, authentic social-media selfie aesthetic, slight noise, compression artifacts, soft focus, slight blur, authentic film grain, no digital over-sharpening, subsurface scattering.

Negative Prompt:
over polished, plastic skin, studio lighting, luxury bathroom, perfect symmetry, oversexualized pose, wide angle distortion, cartoon bunny ears, heavy makeup, sharp commercial photo, extra fingers, deformed hands, wrong mirror reflection, over-retouched influencer face, cinematic controlled lighting.
```

#### Negative Prompt

```text

```

### 21. Coffeehouse Golden Hour Portrait

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/coffeehouse-golden-hour-portrait/)

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

### 22. Shanghai Bund Rooftop Portrait

- [Open case folder](./examples/%E5%A4%B4%E5%83%8F/%E7%94%B5%E5%BD%B1%E6%84%9F/shanghai-bund-rooftop-portrait/)

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

<!-- FEATURED_CASES_END -->

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
