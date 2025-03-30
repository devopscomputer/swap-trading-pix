"use client";
"use client";

import { useRef, useState } from "react";

export default function Button() {
  const [active, setActive] = useState("COMPRAR");
  const buttonRef = useRef<HTMLDivElement>(null);

  const tabs = ["COMPRAR", "PRÉ VENDA", "VENDER"];

  return (
    <div className="flex gap-3 justify-center items-center my-4">
      {tabs.map((tab) => (
        <div
          key={tab}
          ref={active === tab ? buttonRef : null}
          onClick={() => setActive(tab)}
          className={`relative px-6 py-3 w-[150px] text-white-100 text-sm  font-sans
    font-semibold  rounded-full border-1 border-transparent 
            bg-[linear-gradient(to_bottom_right,_rgb(10,107,115),_rgb(2,10,14)),_linear-gradient(125deg,_rgba(255,255,255,0)_45%,_rgba(255,255,255,0.6)_50%,_rgba(255,255,255,0)_53%)]
            bg-origin-border bg-clip-padding shadow-lg transition duration-300 overflow-hidden cursor-pointer
            ${
              active === tab
                ? "animate-border-glint hover:bg-[linear-gradient(to_bottom_right,_rgb(24,77,177),_rgb(24,77,177)),_linear-gradient(125deg,_rgba(255,255,255,0)_45%,_rgba(255,255,255,0.6)_50%,_rgba(255,255,255,0)_53%)] hover:text-white"
                : "hover:opacity-100 shadow-[0_0_12px_4px_rgba(0,212,255,0.6)]  "
            }`}
        >
          {tab}
          {/* Shine effect */}
          {active === tab && (
            <div className="absolute top-[-50%] left-[-120%] w-[200%] h-[200%] bg-[linear-gradient(125deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_52%)] animate-glint pointer-events-none"></div>
          )}
        </div>
      ))}
    </div>
  );
}

