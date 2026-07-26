import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile-particle.webp";

// ASCII character set, sparse to dense — same set and technique as the
// gazijarin.com reference this is modeled after.
const CHARS = " .:-=+*#%@".split("");

function calculateSize(width) {
  if (width <= 480) return Math.min(220, width - 40);
  if (width <= 768) return Math.min(280, width - 60);
  return 400;
}

export default function ParticlePortrait() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const mouseTargetRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef([]);
  const startTimeRef = useRef(null);
  const [size, setSize] = useState(() => calculateSize(window.innerWidth));
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const updateSize = () => setSize(calculateSize(window.innerWidth));
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Build the particle field from the photo, inset at 80% scale within a
  // square canvas (same as the reference) so the silhouette reads the same
  // way regardless of the source photo's own aspect ratio.
  useEffect(() => {
    setDataReady(false);
    let cancelled = false;

    const img = new Image();
    img.src = profileImg;
    img.onload = () => {
      if (cancelled) return;

      const isMobileSize = size <= 280;
      const fontSize = isMobileSize ? 5 : 7;
      const colGap = fontSize * 0.7;
      const rowGap = fontSize * 1.1;

      const offscreen = document.createElement("canvas");
      offscreen.width = size;
      offscreen.height = size;
      const offCtx = offscreen.getContext("2d");

      const scale = 0.8;
      const imgAspect = img.width / img.height;
      let drawHeight = size * scale;
      let drawWidth = drawHeight * imgAspect;
      if (drawWidth > size * scale) {
        drawWidth = size * scale;
        drawHeight = drawWidth / imgAspect;
      }
      const offsetX = (size - drawWidth) / 2;
      const offsetY = (size - drawHeight) / 2;
      offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      const { data } = offCtx.getImageData(0, 0, size, size);
      const raw = [];

      for (let y = 0; y < size; y += rowGap) {
        for (let x = 0; x < size; x += colGap) {
          const i = (Math.floor(y) * size + Math.floor(x)) * 4;
          const a = data[i + 3];
          if (a <= 128) continue;

          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = (r + g + b) / (3 * 255);
          // Never let a pixel map to the blank " " glyph — dark, shadowed
          // regions (like hair) should still render as faint dots instead
          // of leaving true gaps in the silhouette.
          const charIndex = 1 + Math.floor(brightness * (CHARS.length - 2));

          raw.push({
            x: x + (Math.random() - 0.5) * 400,
            y: y + (Math.random() - 0.5) * 400,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0,
            char: CHARS[charIndex],
            baseAlpha: Number((0.4 + brightness * 0.6).toFixed(2)),
            currentAlpha: 0,
            delay: Math.random() * 0.4,
            shimmer: Math.random() * Math.PI * 2,
          });
        }
      }

      particlesRef.current = raw;
      startTimeRef.current = performance.now();
      setDataReady(true);
    };

    return () => {
      cancelled = true;
    };
  }, [size]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    let animationId;
    const isMobileSize = size <= 280;
    const fontSize = isMobileSize ? 5 : 7;

    const draw = () => {
      animationId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, size, size);
      if (!dataReady || !particlesRef.current.length) return;

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const mouseTarget = mouseTargetRef.current;
      const elapsed = (performance.now() - startTimeRef.current) / 1000;

      mouse.x += (mouseTarget.x - mouse.x) * 0.15;
      mouse.y += (mouseTarget.y - mouse.y) * 0.15;

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      particles.forEach((p) => {
        const particleTime = elapsed - p.delay;
        if (particleTime < 0) return;

        const fadeProgress = Math.min(particleTime / 1.5, 1);
        const easedFade = 1 - Math.pow(1 - fadeProgress, 2);

        const isActive = mouse.active || particleTime < 3.0;
        const shimmerVal = isActive ? Math.sin(elapsed * 2 + p.shimmer) * 0.1 : 0;
        p.currentAlpha = Math.max(0, p.baseAlpha * easedFade + shimmerVal);

        const moveProgress = Math.min(particleTime / 2.5, 1);
        const easedMove = 1 - Math.pow(1 - moveProgress, 3);

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = size * 0.2;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 4;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const pullStrength = 0.01 + easedMove * 0.08;
        p.vx += dx * pullStrength;
        p.vy += dy * pullStrength;

        if (isActive) {
          p.vx += Math.sin(elapsed * 0.5 + p.targetY * 0.1) * 0.15;
          p.vy += Math.cos(elapsed * 0.5 + p.targetX * 0.1) * 0.15;
          p.vx *= 0.92;
          p.vy *= 0.92;
        } else {
          p.vx *= 0.85;
          p.vy *= 0.85;
          if (particleTime > 4.0 && Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
            p.x = p.targetX;
            p.y = p.targetY;
            p.vx = 0;
            p.vy = 0;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = `rgba(244, 114, 182, ${p.currentAlpha})`;
        ctx.fillText(p.char, p.x, p.y);
      });
    };
    animationId = requestAnimationFrame(draw);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseTargetRef.current.x = e.clientX - rect.left;
      mouseTargetRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (!touch) return;
      mouseTargetRef.current.x = touch.clientX - rect.left;
      mouseTargetRef.current.y = touch.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleLeave = () => {
      mouseRef.current.active = false;
      mouseTargetRef.current.x = -1000;
      mouseTargetRef.current.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleLeave);
    };
  }, [size, dataReady]);

  return (
    <div className="relative flex items-center justify-center shrink-0 select-none">
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="relative"
        style={{ width: size, height: size, cursor: "crosshair", touchAction: "none" }}
        aria-hidden="true"
      />
      <span className="sr-only">Portrait of Reva Saxena</span>
    </div>
  );
}
