import { useEffect, useRef } from "react";

// Signature element: blocks borrowed from the logo start scattered (the process) and snap into an
// aligned grid (the solution) near the pointer, during the intro and in an ambient sweep.
const CELL = 64;
const REACH = 230;

type Block = {
  hx: number;
  hy: number;
  ox: number;
  oy: number;
  rot: number;
  size: number;
  phase: number;
  speed: number;
  accent: boolean;
  order: number;
};

const smooth = (n: number) => {
  const t = Math.min(1, Math.max(0, n));
  return t * t * (3 - 2 * t);
};

export function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const style = getComputedStyle(document.documentElement);
    const color = (name: string, fallback: string) =>
      style.getPropertyValue(name).trim() || fallback;
    const slate = color("--secondary-foreground", "#9fb0c8");
    const primary = color("--primary", "#4d8dff");
    const signal = color("--signal", "#3ddc97");

    let w = 0;
    let h = 0;
    let blocks: Block[] = [];
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };
    const t0 = performance.now();

    const build = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = w < 700 ? 0.12 : 0.17;
      blocks = [];
      for (let cx = CELL / 2; cx < w; cx += CELL) {
        for (let cy = CELL / 2; cy < h; cy += CELL) {
          if (Math.random() > density) continue;
          blocks.push({
            hx: cx,
            hy: cy,
            ox: (Math.random() - 0.5) * CELL * 1.6,
            oy: (Math.random() - 0.5) * CELL * 1.6,
            rot: (Math.random() - 0.5) * 1.4,
            size: 10 + Math.random() * 14,
            phase: Math.random() * Math.PI * 2,
            speed: 0.0004 + Math.random() * 0.0005,
            accent: Math.random() < 0.14,
            order: reduced ? 1 : 0,
          });
        }
      }
    };

    const draw = (now: number) => {
      const elapsed = now - t0;
      ctx.clearRect(0, 0, w, h);
      // Intro: a wave of order crosses the field once, then the field relaxes.
      const sweep = (elapsed - 400) / 2200;
      // Ambient: a slower wave keeps the field alive, and works on touch screens.
      const ambient = ((elapsed / 9000) % 1.4) - 0.2;

      for (const b of blocks) {
        let target = 0;
        if (reduced) {
          target = 1;
        } else {
          const near = 1 - Math.hypot(b.hx - pointer.x, b.hy - pointer.y) / REACH;
          const intro = 1 - Math.abs(sweep - b.hx / w) * 5;
          const idle = 1 - Math.abs(ambient - b.hx / w) * 7;
          target = Math.max(smooth(near), smooth(intro), smooth(idle) * 0.7);
          b.order += (target - b.order) * 0.07;
        }
        const e = smooth(b.order);
        const drift = (1 - e) * 12;
        const x = b.hx + b.ox * (1 - e) + Math.sin(now * b.speed + b.phase) * drift;
        const y = b.hy + b.oy * (1 - e) + Math.cos(now * b.speed + b.phase) * drift;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(b.rot * (1 - e));
        const half = b.size / 2;
        ctx.globalAlpha = (1 - e) * 0.1;
        ctx.fillStyle = slate;
        ctx.fillRect(-half, -half, b.size, b.size);
        ctx.globalAlpha = e * (b.accent ? 0.95 : 0.7);
        ctx.strokeStyle = b.accent ? signal : primary;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(-half, -half, b.size, b.size);
        ctx.restore();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(draw);
    };
    const onResize = () => {
      build();
      if (reduced) draw(performance.now());
    };

    build();
    const observer = new ResizeObserver(onResize);
    observer.observe(parent);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="flow-field" aria-hidden="true" />;
}
