"use client";

import TokenSidebar from "./components/TokenSidebar";
import Background from "./Background";




export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background fixado no fundo */}
      <div className="absolute inset-0 -z-0">
        <Background />
       
      </div>

      {/* Conteúdo sobreposto */}
      <div className=
 "relative w-full max-w-[800px] z-10">
        <TokenSidebar />
      </div>

    </div>
  );
}
