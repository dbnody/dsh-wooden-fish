# 木鱼 · DSH 插件

DSH 桌面端右下角的悬浮木鱼。敲一下：木槌落下、功德 +1、音效响起；松手就能继续干活。

## 功能

- **今日 / 总计双计数**：跨过零点后「今日」自动归零，「总计」继续累加；两个数都保存在浏览器 `localStorage`。
- **敲击音效**：内置一段程序生成的木鱼声（`audio/wooden-fish.m4a`，已内嵌进客户端模块）；浏览器拒绝播放时自动退回 Web Audio 合成音。
- **静音开关**：右下角按钮一键静音/取消，状态本地保存。
- **随手摆放**：拖动木鱼到任意位置，位置会被记住；双击顶部拖动手柄复位到右下角。
- **跟随主题**：读取 DSH 的 `data-theme` / class，自动切换浅色与深色配色。
- **不挡操作**：悬浮层只有木鱼、音量和清零按钮接收点击，透明区域把事件交给下层界面。
- **无障碍与低动效**：木鱼是原生 `button`，键盘可敲；尊重系统 `prefers-reduced-motion`，关掉抖动与飞行动画。

## 安装到 DSH 桌面端

仓库自带 DSH 识别所需的 `package.json` 与 `cordis.patch.yml`。在 DSH 的插件管理里填 Git 地址：

`https://github.com/dbnody/dsh-wooden-fish`

安装器读取 `package.json` 的 `dsh.bundle` 配置并加载 `src/client.js`，不需要手动引入 `index.html`（它只用于浏览器预览和构建）。

## 本地存储

| 键 | 内容 |
| --- | --- |
| `dsh-wooden-fish-total` | 累计功德 |
| `dsh-wooden-fish-today` | 今日功德 |
| `dsh-wooden-fish-day` | 今日对应的日期戳 |
| `dsh-wooden-fish-muted` | 是否静音 |
| `dsh-wooden-fish-position` | 悬浮位置 |

全部只存在本机浏览器里，不联网、不上报。

## 开发

```bash
npm run build   # 把 index.html + styles.css + app.js + 音频合成 src/client.js
npm run check   # 语法检查
```

改完 `app.js` / `styles.css` / `index.html` 后必须重新 `build`，DSH 加载的是生成后的 `src/client.js`。

重新生成音效：

```bash
python tools/generate_audio.py   # 需要 imageio-ffmpeg
```

## 目录

```text
index.html            浏览器预览与标记来源
styles.css            木鱼、木槌、计数与主题样式
app.js                计数、音效、静音、拖动、主题同步
src/client.js         由 tools/build-client.mjs 生成的 DSH 客户端模块
src/client.template.js  客户端模块模板
src/index.js          host 侧空入口
audio/wooden-fish.m4a 敲击音效
tools/                构建与音效生成脚本
```

## 许可

MIT
