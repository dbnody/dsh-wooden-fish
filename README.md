# 妙妙木鱼 · DSH 插件

右下角悬浮木鱼。点击一次木鱼会：

- 木槌敲击一次；
- 顶部出现“功德 +1”动画；
- 累计功德保存到浏览器 `localStorage`；
- 播放 `audio/wooden-fish.m4a`；
- 使用 Web Speech API 朗读“阿弥陀佛”；
- 自动跟随 DSH 浅色/深色主题切换黑白配色。

悬浮层只有木鱼、语音和清零按钮响应点击，透明区域会把点击交给下面的 DSH 界面。

## 安装到 DSH

将整个插件目录放入 DSH 的插件目录，并加载 `index.html`（或按 DSH 的 HTML 插件入口配置填写 `plugin.json`）。如果 DSH 支持脚本注入，也可以把 `styles.css` 和 `app.js` 注入到页面。

## 音频资源

将木鱼音效文件放到 `audio/wooden-fish.m4a`。程序已经配置为优先播放该内置文件；如果文件暂时不可用，会用浏览器 Web Audio 生成轻量本地敲击声作为兜底。语音使用浏览器内置 Web Speech API，偏好选择中文/少女音色，最终音色由操作系统和浏览器提供的语音列表决定。

## 目录

```text
index.html       插件入口
styles.css       木鱼、木槌、功德动画和主题样式
app.js           计数、音效、语音和主题同步
plugin.json      插件元数据
audio/           放置 wooden-fish.m4a
```
