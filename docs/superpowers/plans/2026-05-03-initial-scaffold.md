# GPT-image Prompt Library Initial Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立一个可维护、可扩展、可被未来网站直接读取的提示词资料库骨架。

**Architecture:** 使用 `examples/` 存储人工维护内容，使用 `scripts/build-index.js` 从 `meta.json` 生成 `data/*.json` 结构化索引，保证 GitHub 维护和后期网站消费两条链路兼容。

**Tech Stack:** Markdown, JSON, Node.js

---

### Task 1: 创建基础目录与项目说明

**Files:**
- Create: `README.md`
- Create: `CONTRIBUTING.md`
- Create: `.gitignore`
- Create: `templates/case/prompt.md`
- Create: `templates/case/meta.json`

- [ ] 写入仓库用途、目录规范、案例规范、贡献规范
- [ ] 为单条案例提供可复制模板

### Task 2: 创建数据索引脚本

**Files:**
- Create: `scripts/build-index.js`
- Create: `package.json`
- Create: `data/prompts.json`
- Create: `data/tags.json`
- Create: `data/categories.json`

- [ ] 扫描 `examples/` 下全部 `meta.json`
- [ ] 输出统一 JSON 索引
- [ ] 保持字段尽量稳定，利于后期网站消费

### Task 3: 验证脚本输出

**Files:**
- Verify: `scripts/build-index.js`
- Verify: `data/*.json`

- [ ] 运行 `node scripts/build-index.js`
- [ ] 确认脚本成功执行
- [ ] 确认输出 JSON 格式正确
