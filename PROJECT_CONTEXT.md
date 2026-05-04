# 项目上下文

## 项目名称
github-eebv-gpt-image2

## 目的
建设一个以 GPT-image 生图提示词为核心的案例资料库，优先支持：
- GitHub 内人工维护
- 后期网站直接读取结构化数据
- 搜索 / 分类 / 标签筛选

## 当前目标
完成第一版仓库骨架：
- 内容目录 `examples/`
- 数据索引目录 `data/`
- 索引脚本 `scripts/build-index.js`
- 项目说明与投稿规范
- 可复用案例模板
- 清理 eebv 账号旧仓库，为新仓库发布做准备

## 技术栈
- Markdown
- JSON
- Node.js（用于生成索引）

## 目录约定
- `examples/`：人工维护的案例内容
- `data/`：网站读取的结构化索引
- `scripts/`：索引生成脚本
- `templates/`：新增案例模板
- `docs/superpowers/specs/`：设计文档
- `docs/superpowers/plans/`：实现计划

## 运行命令
- 生成索引：`node scripts/build-index.js`
- 或：`npm run build:index`

## 约束
- 一条案例一个文件夹
- 后期应可被网站直接读取，不依赖 Markdown 解析
- 优先按“用途 > 风格”组织

## 风险
- 如果后期字段频繁变化，需要保持 `meta.json` 与索引脚本同步
- 如果图片体积过大，仓库可能膨胀，建议后续统一为 `webp`

## GitHub 账号状态
- 账号：`eebv`
- 本次通过 GitHub token 直接查询全量仓库，不再依赖公开页判断
- 已删除仓库：
  - `NotionRelayLiteWeb`
  - `cfmail-bt2001-private-guide`
  - `blog`
- 当前剩余仓库：
  - `42cf-skill`
