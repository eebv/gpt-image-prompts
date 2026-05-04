# 项目上下文

## 项目名称
github-eebv-gpt-image2

## 目的
建设一个以 GPT-image 提示词工程为核心的公开项目，优先支持：
- 模块化提示词方法沉淀
- 提示词工程训练与传播
- GitHub 内人工维护
- 后期网站直接读取结构化数据
- 搜索 / 分类 / 标签筛选

## 当前目标
完成第一版“提示词工程库”骨架：
- 方法目录 `principles/`
- 模块目录 `modules/`
- 配方目录 `recipes/`
- 案例目录 `examples/`
- 中英文双版仓库说明
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
- `principles/`：提示词工程原则 / 方法论
- `modules/`：可复用提示词模块
- `recipes/`：组合公式 / prompt recipes
- `examples/`：最终案例验证内容
- `README.md`：英文首页
- `README.zh-CN.md`：中文首页
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

## 当前仓库状态
- 新仓库已创建：`eebv/gpt-image-prompts`
- 仓库地址：
  - `https://github.com/eebv/gpt-image-prompts`
- 当前本地目录已初始化 git 并成功推送到 `main`
