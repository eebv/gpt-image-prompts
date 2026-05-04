# Contributing

## 新增案例步骤

1. 在 `examples/<用途>/<风格>/<案例ID>/` 下创建新目录
2. 放入图片：`image.webp`
3. 按模板编写 `prompt.md`
4. 按模板编写 `meta.json`
5. 运行：

```bash
node scripts/build-index.js
```

6. 确认 `data/*.json` 已更新

## 命名规则

- `案例ID` 使用英文小写短横线
- 示例：
  - `clean-girl-portrait`
  - `cyber-movie-poster`
  - `minimal-skincare-product-shot`

## 建议字段

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
- 保持主图文件名固定为 `image.webp`

## 提示词建议

- `prompt.md` 中保留完整原始提示词
- 如果有补充说明，可单独加：
  - 场景说明
  - 风格说明
  - 可替换变量
