# GPT-image Prompt Library

一个专门收录 **GPT-image 生图提示词案例** 的仓库。

目标：
- 方便在 GitHub 中长期沉淀案例
- 每条案例都能保留图片、提示词、元数据
- 后期可直接导入网站，做搜索、筛选、分类展示

## 目录结构

```text
examples/
  <用途>/
    <风格>/
      <案例ID>/
        image.webp
        prompt.md
        meta.json

data/
  prompts.json
  tags.json
  categories.json

scripts/
  build-index.js

templates/
  case/
    prompt.md
    meta.json
```

## 内容组织规则

- 第一层：用途
  - 头像
  - 海报
  - 电商图
  - 场景图
  - 产品图
- 第二层：风格
  - 写实
  - 电影感
  - 插画
  - 二次元
  - 极简

## 单条案例规范

每条案例一个独立文件夹，至少包含：

- `image.webp`：生成图片
- `prompt.md`：完整提示词
- `meta.json`：结构化元数据

## 快速开始

### 1. 新增一个案例

复制模板：

```text
templates/case/
```

然后新建到：

```text
examples/<用途>/<风格>/<案例ID>/
```

### 2. 生成网站索引

```bash
node scripts/build-index.js
```

或：

```bash
npm run build:index
```

## 数据输出说明

索引脚本会生成：

- `data/prompts.json`：全部案例主索引
- `data/tags.json`：标签列表
- `data/categories.json`：分类结构

后期网站可直接读取这些 JSON 做：

- 搜索
- 用途筛选
- 风格筛选
- 标签筛选
- 模型筛选

## 推荐维护方式

- 图片尽量统一为 `webp`
- `案例ID` 用英文短横线命名
- 每次新增案例后，重新跑一次索引脚本

## 后续可扩展

- 静态站点展示
- 在线搜索筛选
- 自动生成预览页
- 投稿 PR 工作流
