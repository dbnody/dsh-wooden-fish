(function () {
  'use strict';

  const root = document.getElementById('dsh-wooden-fish');
  const fish = document.getElementById('mmwf-fish');
  const countEl = document.getElementById('mmwf-count');
  const toastLayer = root.querySelector('.mmwf-toast-layer');
  const voiceButton = document.getElementById('mmwf-voice');
  const resetButton = document.getElementById('mmwf-reset');
  const STORAGE_KEY = 'dsh-miaomiao-wooden-fish-count';
  const SETTINGS_KEY = 'dsh-miaomiao-wooden-fish-settings';
  let count = Number.parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) || 0;
  let voiceOn = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{"voice":true}').voice !== false;
  let audio;
  let audioContext;

  function updateCount() { countEl.textContent = count.toLocaleString('zh-CN'); localStorage.setItem(STORAGE_KEY, String(count)); }
  function detectTheme() {
    const html = document.documentElement;
    const body = document.body;
    const declared = html.dataset.theme || body.dataset.theme || '';
    const dark = declared === 'dark' || /(^|\s)(dark|dark-mode)(\s|$)/.test(body.className) || window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.dataset.theme = dark ? 'dark' : 'light';
  }
  function showToast() {
    const toast = document.createElement('span');
    toast.className = 'mmwf-toast';
    toast.textContent = '功德 +1';
    toastLayer.appendChild(toast);
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }
  function playWoodenFish() {
    if (!audio) audio = new Audio('audio/wooden-fish.m4a');
    audio.currentTime = 0;
    audio.play().catch(() => {
      // 浏览器尚未解锁音频或音频文件缺失时，使用本地 Web Audio 兜底。
      try {
        audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'triangle'; osc.frequency.setValueAtTime(160, audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, audioContext.currentTime + .16);
        gain.gain.setValueAtTime(.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(.18, audioContext.currentTime + .008);
        gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .18);
        osc.connect(gain).connect(audioContext.destination); osc.start(); osc.stop(audioContext.currentTime + .2);
      } catch (_) { /* 音频不可用时不影响计数 */ }
    });
  }
  function sayAmitabha() {
    if (!voiceOn || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance('阿弥陀佛');
    utterance.lang = 'zh-CN'; utterance.rate = .88; utterance.pitch = 1.42; utterance.volume = .75;
    const voices = window.speechSynthesis.getVoices();
    const female = voices.find(v => /女|female|xiaoxiao|婷婷|晓晓|中文/.test(`${v.name} ${v.lang}`));
    if (female) utterance.voice = female;
    window.speechSynthesis.speak(utterance);
  }
  function hit() { count += 1; updateCount(); fish.classList.remove('is-hit'); void fish.offsetWidth; fish.classList.add('is-hit'); showToast(); playWoodenFish(); sayAmitabha(); }
  fish.addEventListener('click', hit);
  resetButton.addEventListener('click', () => { count = 0; updateCount(); });
  voiceButton.addEventListener('click', () => { voiceOn = !voiceOn; voiceButton.textContent = `语音：${voiceOn ? '开' : '关'}`; localStorage.setItem(SETTINGS_KEY, JSON.stringify({ voice: voiceOn })); });
  const observer = new MutationObserver(detectTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', detectTheme);
  updateCount(); voiceButton.textContent = `语音：${voiceOn ? '开' : '关'}`; detectTheme();
})();
