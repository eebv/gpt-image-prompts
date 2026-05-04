# GPT-image 提示词资料库设计

## 目标
搭建一个可持续收录 GPT-image 生图案例的 GitHub 仓库，既方便人工维护，也方便后续网站直接导入。

## 设计结论
- 内容层：使用 `examples/` 保存案例
- 数据层：使用 `data/*.json` 输出可被网站读取的索引
- 组织方式：按 `用途/风格/案例ID` 分层
- 单条案例：固定为图片、提示词、元数据三件套

## 目录结构
```text
examples/<用途>/<风格>/<案例ID>/
  image.webp
  prompt.md
  meta.json
```

## 元数据原则
`meta.json` 作为后期网站的主数据来源，至少包含：
- id
- title
- use_case
- style
- model
- tags
- aspect_ratio
- cover
- created_at

## 网站兼容策略
通过 `scripts/build-index.js` 扫描全部 `meta.json`，自动生成：
- `data/prompts.json`
- `data/tags.json`
- `data/categories.json`

后期网站可直接基于这 3 份数据做：
- 搜索
- 分类筛选
- 标签筛选
- 模型筛选

## 第一版范围
- 骨架目录
- 文档
- 模板
- 索引脚本

不包含：
- 网站前端
- 图片压缩流程
- 在线投稿系统
