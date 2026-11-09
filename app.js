(function () {
  'use strict';

  const root = document.getElementById('dsh-wooden-fish');
  const fish = document.getElementById('mmwf-fish');
  const countEl = document.getElementById('mmwf-count');
  const todayEl = document.getElementById('mmwf-today');
  const toastLayer = root.querySelector('.mmwf-toast-layer');
  const resetButton = document.getElementById('mmwf-reset');
  const muteButton = document.getElementById('mmwf-mute');
  const dragHandle = document.getElementById('mmwf-drag-handle');
  const widget = root.querySelector('.mmwf-widget');
  const TOTAL_KEY = 'dsh-wooden-fish-total';
  const TODAY_KEY = 'dsh-wooden-fish-today';
  const DAY_KEY = 'dsh-wooden-fish-day';
  const MUTED_KEY = 'dsh-wooden-fish-muted';
  const POSITION_KEY = 'dsh-wooden-fish-position';
  let count = Number.parseInt(localStorage.getItem(TOTAL_KEY) || '0', 10) || 0;
  let todayCount = Number.parseInt(localStorage.getItem(TODAY_KEY) || '0', 10) || 0;
  let muted = localStorage.getItem(MUTED_KEY) === '1';
  let audio;
  let audioContext;
  let dragState;

  function clamp(value, minimum, maximum) { return Math.max(minimum, Math.min(value, maximum)); }
  function dayStamp() {
    const now = new Date();
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
  }
  function rollToday() {
    const today = dayStamp();
    if (localStorage.getItem(DAY_KEY) === today) return;
    todayCount = 0;
    localStorage.setItem(DAY_KEY, today);
    localStorage.setItem(TODAY_KEY, '0');
  }
  function updateCount() {
    countEl.textContent = count.toLocaleString('zh-CN');
    todayEl.textContent = todayCount.toLocaleString('zh-CN');
    localStorage.setItem(TOTAL_KEY, String(count));
    localStorage.setItem(TODAY_KEY, String(todayCount));
    localStorage.setItem(DAY_KEY, dayStamp());
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
    if (muted) return;
    if (!audio) audio = new Audio('audio/wooden-fish.m4a');
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
  function resetPosition() {
    widget.style.left = '';
    widget.style.top = '';
    widget.style.right = '';
    widget.style.bottom = '';
    localStorage.removeItem(POSITION_KEY);
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
    rollToday();
    count += 1;
    todayCount += 1;
    updateCount();
    fish.classList.remove('is-hit');
    void fish.offsetWidth;
    fish.classList.add('is-hit');
    showToast();
    playWoodenFish();
  }
  function renderMute() {
    muteButton.textContent = muted ? '🔇' : '🔊';
    muteButton.title = muted ? '取消静音' : '静音';
    muteButton.setAttribute('aria-pressed', String(muted));
  }

  resetButton.addEventListener('click', function () {
    count = 0;
    todayCount = 0;
    updateCount();
  });
  muteButton.addEventListener('click', function () {
    muted = !muted;
    localStorage.setItem(MUTED_KEY, muted ? '1' : '0');
    if (muted && audio) audio.pause();
    renderMute();
  });
  dragHandle.addEventListener('dblclick', resetPosition);
  fish.addEventListener('click', function (event) {
    // 键盘与辅助技术触发的 click 没有指针坐标，交由这里计数。
    if (event.detail === 0) hit();
  });
  widget.addEventListener('pointerdown', beginDrag);
  widget.addEventListener('pointermove', moveDrag);
  widget.addEventListener('pointerup', endDrag);
  widget.addEventListener('pointercancel', endDrag);
  const observer = new MutationObserver(detectTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', detectTheme);
  window.addEventListener('resize', restorePosition);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) return;
    rollToday();
    updateCount();
  });
  rollToday();
  updateCount();
  renderMute();
  detectTheme();
  restorePosition();
})();
