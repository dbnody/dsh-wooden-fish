# 妙妙木鱼 · DSH 插件

右下角悬浮木鱼。点击一次木鱼会：

- 木槌敲击一次；
- 顶部出现“功德 +1”动画；
- 累计功德保存到浏览器 `localStorage`；
- 播放 `audio/wooden-fish.m4a`；
- 使用 Web Speech API 朗读“阿弥陀佛”；
- 自动跟随 DSH 浅色/深色主题切换黑白配色。

悬浮层只有木鱼、语音和清零按钮响应点击，透明区域会把点击交给下面的 DSH 界面。

## 安装到 DSH 桌面端

此仓库已包含 DSH 识别所需的 `package.json` 与 `cordis.patch.yml` 组合包声明。安装时在 DSH 的插件管理中填写 Git 仓库地址：

`https://github.com/dbnody/dsh-wooden-fish`

安装器会读取 `package.json` 中的 `dsh.bundle` 配置，并加载 `src/client.js`。不需要手动加载 `index.html`；它仅用于浏览器预览和构建客户端模块。

## 音频资源

项目已内置 `audio/wooden-fish.m4a` 敲击音效。程序优先播放该文件；如果浏览器拒绝播放或文件被替换，会用浏览器 Web Audio 生成轻量本地敲击声作为兜底。语音使用浏览器内置 Web Speech API，偏好选择中文/少女音色，最终音色由操作系统和浏览器提供的语音列表决定。

需要重新生成音效时，运行 `python tools/generate_audio.py`。

## 目录

```text
index.html       插件入口
styles.css       木鱼、木槌、功德动画和主题样式
app.js           计数、音效、语音和主题同步
plugin.json      插件元数据
audio/           放置 wooden-fish.m4a
```
