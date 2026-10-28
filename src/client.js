window.__ModuleLoader__.load({
  id: '@dbnody/dsh-wooden-fish',
  factory: (require) => {
    const React = require('react')
    const markup = "<main id=\"dsh-wooden-fish\" class=\"mmwf-root\" aria-label=\"妙妙木鱼\">\n    <div class=\"mmwf-toast-layer\" aria-live=\"polite\"></div>\n    <section class=\"mmwf-widget\" aria-label=\"木鱼计数器\">\n      <button id=\"mmwf-drag-handle\" class=\"mmwf-drag-handle\" type=\"button\" aria-label=\"拖动木鱼\" title=\"按住拖动木鱼\">\n        <span aria-hidden=\"true\">⠿</span>\n      </button>\n      <div class=\"mmwf-count\" title=\"累计功德\">\n        <span class=\"mmwf-count-label\">功德</span>\n        <strong id=\"mmwf-count\">0</strong>\n      </div>\n      <button id=\"mmwf-fish\" class=\"mmwf-fish\" type=\"button\" aria-label=\"敲木鱼，功德加一\">\n        <span class=\"mmwf-aura\" aria-hidden=\"true\"></span>\n        <span class=\"mmwf-fish-base\" aria-hidden=\"true\"></span>\n        <span class=\"mmwf-fish-body\" aria-hidden=\"true\">\n          <span class=\"mmwf-hole\"></span>\n          <span class=\"mmwf-shine\"></span>\n          <span class=\"mmwf-ring mmwf-ring-one\"></span>\n          <span class=\"mmwf-ring mmwf-ring-two\"></span>\n        </span>\n        <span class=\"mmwf-handle\" aria-hidden=\"true\"></span>\n        <span class=\"mmwf-mallet\" aria-hidden=\"true\"></span>\n      </button>\n      <div class=\"mmwf-actions\">\n        <button id=\"mmwf-reset\" class=\"mmwf-small-button\" type=\"button\" title=\"清零累计功德\">清零</button>\n      </div>\n    </section>\n  </main>"
    const css = ".mmwf-root {\n  color-scheme: light;\n  --mmwf-ink: #30231e;\n  --mmwf-muted: #8a7468;\n  --mmwf-panel: rgba(255, 252, 247, .88);\n  --mmwf-panel-border: rgba(104, 71, 49, .18);\n  --mmwf-wood: #a9542e;\n  --mmwf-wood-mid: #c97843;\n  --mmwf-wood-light: #f1b775;\n  --mmwf-wood-dark: #5a2d23;\n  --mmwf-accent: #d9854b;\n  --mmwf-shadow: rgba(49, 27, 17, .25);\n}\n\n.mmwf-root[data-mmwf-theme=\"dark\"] {\n  color-scheme: dark;\n  --mmwf-ink: #fbf1e6;\n  --mmwf-muted: #c8b3a3;\n  --mmwf-panel: rgba(35, 29, 27, .92);\n  --mmwf-panel-border: rgba(255, 235, 216, .18);\n  --mmwf-wood: #f0ab74;\n  --mmwf-wood-mid: #ce7750;\n  --mmwf-wood-light: #ffd2a5;\n  --mmwf-wood-dark: #f8cfab;\n  --mmwf-accent: #ffc48e;\n  --mmwf-shadow: rgba(0, 0, 0, .5);\n}\n\n.mmwf-root, .mmwf-root * { box-sizing: border-box; }\n.mmwf-root { position: fixed; inset: 0; z-index: 2147483000; pointer-events: none; font-family: \"Microsoft YaHei UI\", \"Segoe UI\", sans-serif; }\n.mmwf-widget { position: absolute; right: 24px; bottom: 22px; width: 166px; display: grid; justify-items: center; gap: 7px; pointer-events: auto; user-select: none; touch-action: none; }\n.mmwf-widget.is-dragging { cursor: grabbing; transition: none; }\n.mmwf-drag-handle { display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; color: var(--mmwf-muted); background: var(--mmwf-panel); border: 1px solid var(--mmwf-panel-border); border-radius: 999px; font: inherit; font-size: 10px; letter-spacing: .08em; cursor: grab; backdrop-filter: blur(12px); box-shadow: 0 6px 16px var(--mmwf-shadow); }\n.mmwf-drag-handle:active { cursor: grabbing; }\n.mmwf-drag-handle span:first-child { font-size: 15px; line-height: 9px; letter-spacing: -3px; transform: rotate(90deg); }\n.mmwf-count { min-width: 111px; padding: 8px 18px 7px; color: var(--mmwf-ink); background: var(--mmwf-panel); border: 1px solid var(--mmwf-panel-border); border-radius: 17px; box-shadow: 0 8px 28px var(--mmwf-shadow); text-align: center; backdrop-filter: blur(12px); }\n.mmwf-count-label { display: block; color: var(--mmwf-muted); font-size: 11px; letter-spacing: .18em; }\n.mmwf-count strong { display: block; margin-top: 2px; font-family: Georgia, \"Times New Roman\", serif; font-size: 24px; line-height: 1; letter-spacing: .04em; }\n.mmwf-fish { position: relative; width: 150px; height: 119px; padding: 0; border: 0; background: transparent; cursor: grab; filter: drop-shadow(0 13px 11px var(--mmwf-shadow)); transform-origin: 69% 75%; transition: transform .14s ease; }\n.mmwf-widget.is-dragging .mmwf-fish { cursor: grabbing; }\n.mmwf-fish:focus-visible { outline: 3px solid var(--mmwf-accent); outline-offset: 5px; border-radius: 40px; }\n.mmwf-aura { position: absolute; left: 2px; bottom: 6px; width: 112px; height: 87px; border-radius: 50%; background: radial-gradient(ellipse, color-mix(in srgb, var(--mmwf-wood-light) 28%, transparent) 0%, transparent 69%); opacity: .7; }\n.mmwf-fish-base { position: absolute; left: 15px; bottom: 5px; width: 94px; height: 19px; border-radius: 50%; background: linear-gradient(180deg, var(--mmwf-wood-light), var(--mmwf-wood-dark)); border: 3px solid var(--mmwf-wood-dark); transform: rotate(-6deg); }\n.mmwf-fish-body { position: absolute; left: 13px; bottom: 17px; width: 99px; height: 72px; overflow: visible; border: 4px solid var(--mmwf-wood-dark); border-radius: 48% 52% 48% 53%; background: radial-gradient(ellipse at 31% 20%, color-mix(in srgb, white 45%, transparent) 0 5%, transparent 21%), linear-gradient(145deg, var(--mmwf-wood-light) 1%, var(--mmwf-wood-mid) 47%, var(--mmwf-wood) 70%, var(--mmwf-wood-dark)); box-shadow: inset 7px 6px 10px rgba(255,255,255,.2), inset -10px -10px 14px rgba(70, 25, 13, .28); transform: rotate(-8deg); }\n.mmwf-fish-body::before { content: \"\"; position: absolute; left: 6px; top: 8px; width: 77px; height: 48px; border: 1px solid color-mix(in srgb, var(--mmwf-wood-light) 75%, transparent); border-radius: 50%; opacity: .68; transform: rotate(-12deg); }\n.mmwf-fish-body::after { content: \"\"; position: absolute; right: -22px; top: 24px; width: 30px; height: 30px; border: 4px solid var(--mmwf-wood-dark); border-left: 0; border-radius: 0 52% 52% 0; background: linear-gradient(160deg, var(--mmwf-wood-light), var(--mmwf-wood)); box-shadow: inset -6px -2px 5px rgba(70, 25, 13, .23); }\n.mmwf-hole { position: absolute; left: 36px; top: 24px; width: 25px; height: 19px; border: 4px solid var(--mmwf-wood-dark); border-radius: 50%; box-shadow: inset 2px 2px 4px rgba(52, 20, 13, .45); }\n.mmwf-shine { position: absolute; left: 16px; top: 13px; width: 22px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.45); transform: rotate(-29deg); }\n.mmwf-ring { position: absolute; border: 2px solid color-mix(in srgb, var(--mmwf-wood-light) 84%, transparent); border-radius: 50%; opacity: .72; }\n.mmwf-ring-one { left: 11px; top: 17px; width: 17px; height: 34px; transform: rotate(25deg); }\n.mmwf-ring-two { right: 13px; bottom: 8px; width: 27px; height: 12px; transform: rotate(-14deg); }\n.mmwf-handle { position: absolute; right: 29px; top: 4px; width: 11px; height: 73px; border: 3px solid var(--mmwf-wood-dark); border-radius: 8px; background: linear-gradient(90deg, var(--mmwf-wood-dark), var(--mmwf-wood-light) 45%, var(--mmwf-wood)); box-shadow: inset 2px 0 2px rgba(255,255,255,.35); transform: rotate(36deg); transform-origin: 50% 100%; }\n.mmwf-mallet { position: absolute; right: 10px; top: -2px; width: 34px; height: 25px; border: 4px solid var(--mmwf-wood-dark); border-radius: 54% 49% 52% 47%; background: radial-gradient(circle at 31% 26%, rgba(255,255,255,.44) 0 8%, transparent 9%), linear-gradient(135deg, var(--mmwf-wood-light), var(--mmwf-wood-mid)); box-shadow: inset -4px -3px 5px rgba(67, 25, 13, .22); transform: rotate(36deg); transform-origin: 50% 100%; }\n.mmwf-fish.is-hit { animation: mmwf-hit .28s cubic-bezier(.2,.75,.32,1); }\n.mmwf-fish.is-hit .mmwf-mallet { animation: mmwf-mallet .28s cubic-bezier(.2,.75,.32,1); }\n.mmwf-fish.is-hit .mmwf-aura { animation: mmwf-aura .32s ease-out; }\n@keyframes mmwf-hit { 0%,100% { transform: rotate(0) scale(1); } 38% { transform: rotate(-4.5deg) scale(1.04); } 65% { transform: rotate(1.5deg) scale(.99); } }\n@keyframes mmwf-mallet { 0%,100% { transform: rotate(36deg); } 43% { transform: rotate(76deg) translate(9px,7px); } }\n@keyframes mmwf-aura { 0% { opacity:.45; transform:scale(.8); } 45% { opacity:1; transform:scale(1.16); } 100% { opacity:.7; transform:scale(1); } }\n.mmwf-actions { display: flex; gap: 6px; }\n.mmwf-small-button { padding: 4px 9px; color: var(--mmwf-muted); background: var(--mmwf-panel); border: 1px solid var(--mmwf-panel-border); border-radius: 9px; font: inherit; font-size: 10px; cursor: pointer; backdrop-filter: blur(10px); }\n.mmwf-small-button:hover { color: var(--mmwf-ink); border-color: var(--mmwf-accent); }\n.mmwf-toast-layer { position: absolute; top: 16%; left: 0; width: 100%; display: grid; justify-items: center; gap: 3px; }\n.mmwf-toast { color: var(--mmwf-accent); font-size: clamp(17px, 2.2vw, 27px); font-weight: 800; text-shadow: 0 2px 12px var(--mmwf-shadow); animation: mmwf-toast 1.15s cubic-bezier(.2,.7,.3,1) both; pointer-events: none; }\n@keyframes mmwf-toast { 0% { opacity:0; transform:translateY(20px) scale(.75); } 18% { opacity:1; transform:translateY(0) scale(1.05); } 100% { opacity:0; transform:translateY(-68px) scale(.98); } }\n@media (max-width: 600px) { .mmwf-widget { right: 13px; bottom: 13px; transform: scale(.88); transform-origin: right bottom; } }\n"
    const appSource = function () { return (function () {
  'use strict';

  const root = document.getElementById('dsh-wooden-fish');
  const fish = document.getElementById('mmwf-fish');
  const countEl = document.getElementById('mmwf-count');
  const toastLayer = root.querySelector('.mmwf-toast-layer');
  const resetButton = document.getElementById('mmwf-reset');
  const widget = root.querySelector('.mmwf-widget');
  const STORAGE_KEY = 'dsh-miaomiao-wooden-fish-count';
  const POSITION_KEY = 'dsh-miaomiao-wooden-fish-position';
  let count = Number.parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) || 0;
  let audio;
  let audioContext;
  let dragState;

  function clamp(value, minimum, maximum) { return Math.max(minimum, Math.min(value, maximum)); }
  function updateCount() {
    countEl.textContent = count.toLocaleString('zh-CN');
    localStorage.setItem(STORAGE_KEY, String(count));
  }
  function detectTheme() {
    const html = document.documentElement;
    const body = document.body;
    const declared = body.dataset.theme || html.dataset.theme || '';
    const classes = html.className + ' ' + body.className;
    const dark = declared === 'dark' || (!declared && /(^|\s)(dark|dark-mode)(\s|$)/.test(classes)) || (!declared && !/(^|\s)(light|light-mode)(\s|$)/.test(classes) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.mmwfTheme = dark ? 'dark' : 'light';
  }
  function showToast() {
    const toast = document.createElement('span');
    toast.className = 'mmwf-toast';
    toast.textContent = '功德 +1';
    toastLayer.appendChild(toast);
    toast.addEventListener('animationend', function () { toast.remove(); }, { once: true });
  }
  function playWoodenFish() {
    if (!audio) audio = new Audio("data:audio/mp4;base64,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");
    audio.currentTime = 0;
    audio.play().catch(function () {
      try {
        audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, audioContext.currentTime + .16);
        gain.gain.setValueAtTime(.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(.18, audioContext.currentTime + .008);
        gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .18);
        osc.connect(gain).connect(audioContext.destination);
        osc.start(); osc.stop(audioContext.currentTime + .2);
      } catch (_) { /* 音频不可用时不影响计数 */ }
    });
  }
  function restorePosition() {
    try {
      const position = JSON.parse(localStorage.getItem(POSITION_KEY) || 'null');
      if (!position || !Number.isFinite(position.x) || !Number.isFinite(position.y)) return;
      const maxX = Math.max(12, window.innerWidth - widget.offsetWidth - 12);
      const maxY = Math.max(12, window.innerHeight - widget.offsetHeight - 12);
      widget.style.left = clamp(position.x, 12, maxX) + 'px';
      widget.style.top = clamp(position.y, 12, maxY) + 'px';
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
    } catch (_) { /* 未保存位置时使用右下角默认位置 */ }
  }
  function savePosition() {
    const box = widget.getBoundingClientRect();
    localStorage.setItem(POSITION_KEY, JSON.stringify({ x: Math.round(box.left), y: Math.round(box.top) }));
  }
  function beginDrag(event) {
    if (event.target.closest('.mmwf-small-button')) return;
    if (event.button !== undefined && event.button !== 0) return;
    const box = widget.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      offsetX: event.clientX - box.left,
      offsetY: event.clientY - box.top,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      startedOnFish: fish.contains(event.target),
    };
    widget.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }
  function moveDrag(event) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const movedEnough = Math.abs(event.clientX - dragState.startX) > 5 || Math.abs(event.clientY - dragState.startY) > 5;
    if (!dragState.moved && !movedEnough) return;
    dragState.moved = true;
    widget.classList.add('is-dragging');
    const maxX = Math.max(12, window.innerWidth - widget.offsetWidth - 12);
    const maxY = Math.max(12, window.innerHeight - widget.offsetHeight - 12);
    widget.style.left = clamp(event.clientX - dragState.offsetX, 12, maxX) + 'px';
    widget.style.top = clamp(event.clientY - dragState.offsetY, 12, maxY) + 'px';
    widget.style.right = 'auto';
    widget.style.bottom = 'auto';
  }
  function endDrag(event) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    widget.releasePointerCapture?.(event.pointerId);
    widget.classList.remove('is-dragging');
    if (dragState.moved) savePosition();
    else if (dragState.startedOnFish) hit();
    dragState = undefined;
  }
  function hit() {
    count += 1;
    updateCount();
    fish.classList.remove('is-hit');
    void fish.offsetWidth;
    fish.classList.add('is-hit');
    showToast();
    playWoodenFish();
  }

  resetButton.addEventListener('click', function () { count = 0; updateCount(); });
  widget.addEventListener('pointerdown', beginDrag);
  widget.addEventListener('pointermove', moveDrag);
  widget.addEventListener('pointerup', endDrag);
  widget.addEventListener('pointercancel', endDrag);
  const observer = new MutationObserver(detectTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', detectTheme);
  window.addEventListener('resize', restorePosition);
  updateCount();
  detectTheme();
  restorePosition();
})();
 }

    function mount() {
      if (document.getElementById('dsh-wooden-fish')) return () => {}
      const style = document.createElement('style')
      style.setAttribute('data-mmwf-style', '')
      style.textContent = css
      document.head.appendChild(style)
      document.body.insertAdjacentHTML('beforeend', markup)
      const cleanup = typeof appSource === 'function' ? appSource() : undefined
      return () => {
        cleanup?.()
        document.getElementById('dsh-wooden-fish')?.remove()
        style.remove()
      }
    }

    function WoodenFish() {
      React.useEffect(() => mount(), [])
      return null
    }

    function apply(ctx) {
      ctx.slots.inject('shell.overlay', () => ctx.slots.register({
        name: 'shell.overlay', id: 'miaomiao-wooden-fish', order: 90,
      }, WoodenFish))
    }
    return { apply, inject: ['slots'] }
  },
})
