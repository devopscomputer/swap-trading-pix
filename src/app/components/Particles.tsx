"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const phi = (Math.sqrt(5) + 1) / 2;
    const n = 180;
    const m = 120;

    const createShadows = () => {
      let shadows = [];
      for (let i = 0; i < n; i++) {
        const r = 1.5 * Math.sqrt(i); // distancia radial
        const angle = 2 * Math.PI * phi * i;
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        shadows.push(`${x.toFixed(2)}px ${y.toFixed(2)}px white`);
      }
      return shadows.join(", ");
    };

    el.style.boxShadow = createShadows();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-50 left-1/2 w-30 h-30 rounded-full animate-[spin_30s_linear_infinite] opacity-90  z-10"
    ></div>
  );
}
