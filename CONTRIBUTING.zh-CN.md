# Contributing

中文 | [English](./CONTRIBUTING.md)

这个仓库现在不只是案例库，而是一个 **GPT-image 提示词工程库**。

所以你可以提交 4 类内容：

- 方法论：`principles/`
- 模块：`modules/`
- 配方：`recipes/`
- 案例：`examples/`

## 1. 新增方法论

适合放到：

- `principles/`

内容方向例如：

- 什么是模块化 Prompt
- 怎样提升可控性
- 怎样拆解想法
- 怎样减少无效描述

## 2. 新增模块

适合放到：

- `modules/`

内容方向例如：

- 摄影风格模块
- 场景模块
- 人物模块
- 光线模块
- 氛围模块
- 材质模块

## 3. 新增配方

适合放到：

- `recipes/`

内容方向例如：

- 人像组合公式
- 海报组合公式
- 电商图组合公式
- 产品图组合公式

## 4. 新增案例

案例用于验证模块组合效果。

目录格式：

```text
examples/<用途>/<风格>/<案例ID>/
```

步骤：

1. 放入图片：`image.webp` 或 `image.png`
2. 编写 `prompt.md`
3. 编写 `meta.json`
4. 运行：

```bash
node scripts/build-index.js
```

5. 确认 `data/*.json` 已更新

## 命名规则

- `案例ID` 使用英文小写短横线
- 示例：
  - `clean-girl-portrait`
  - `cyber-movie-poster`
  - `minimal-skincare-product-shot`

## 案例元数据建议字段

`meta.json` 建议至少包含：

- `id`
- `title`
- `use_case`
- `style`
- `model`
- `tags`
- `aspect_ratio`
- `cover`
- `created_at`

## 图片建议

- 优先使用 `webp`
- 保持主图文件名固定为 `image.webp` 或 `image.png`

## Prompt 建议

- 保留完整原始 Prompt
- 优先体现“模块化写法”
- 如果有补充说明，可写：
  - 场景说明
  - 风格说明
  - 控制变量
  - 可替换模块
