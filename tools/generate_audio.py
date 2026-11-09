"""Generate a short procedural wooden-fish strike and encode it as M4A."""
from __future__ import annotations

import math
import random
import subprocess
import tempfile
import wave
from pathlib import Path

import imageio_ffmpeg


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "audio" / "wooden-fish.m4a"


def create_wav(path: Path) -> None:
    sample_rate = 44_100
    duration = 0.52
    frames = int(sample_rate * duration)
    random.seed(2026)
    with wave.open(str(path), "wb") as file:
        file.setnchannels(1)
        file.setsampwidth(2)
        file.setframerate(sample_rate)
        for index in range(frames):
            time = index / sample_rate
            attack = min(1.0, time / 0.004)
            decay = math.exp(-time * 9.5)
            body = math.sin(2 * math.pi * 156 * time) + 0.34 * math.sin(2 * math.pi * 308 * time)
            knock = (random.random() * 2 - 1) * math.exp(-time * 95) * 0.22
            value = max(-1.0, min(1.0, (body * 0.42 + knock) * attack * decay))
            file.writeframesraw(int(value * 32767).to_bytes(2, "little", signed=True))


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as temp:
        wav = Path(temp) / "wooden-fish.wav"
        create_wav(wav)
        ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
        subprocess.run([ffmpeg, "-y", "-i", str(wav), "-c:a", "aac", "-b:a", "128k", str(OUTPUT)], check=True, capture_output=True)
    print(f"generated {OUTPUT} ({OUTPUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
