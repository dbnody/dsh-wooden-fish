import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
const markup = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0]
if (!markup) throw new Error('index.html is missing its main widget')
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8')
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8')
const audio = fs.readFileSync(path.join(root, 'audio', 'wooden-fish.m4a'))
const dataUrl = 'data:audio/mp4;base64,' + audio.toString('base64')
const appWithAudio = app.replace("new Audio('audio/wooden-fish.m4a')", 'new Audio(' + JSON.stringify(dataUrl) + ')')
if (appWithAudio === app) throw new Error('Could not embed wooden-fish.m4a')
const template = fs.readFileSync(path.join(root, 'src', 'client.template.js'), 'utf8')
const output = template
  .replace('/*__MARKUP__*/', JSON.stringify(markup))
  .replace('/*__CSS__*/', JSON.stringify(css))
  .replace('/*__APP__*/', 'function () { return ' + appWithAudio + ' }')
fs.writeFileSync(path.join(root, 'src', 'client.js'), output, 'utf8')
console.log('Created DSH client module with embedded wooden-fish.m4a (' + audio.length + ' bytes)')
