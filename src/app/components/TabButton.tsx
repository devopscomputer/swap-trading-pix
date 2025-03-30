"use client";

import React from "react";
import clsx from "clsx";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex-1 py-2 text-center font-bold transition-all cursor-pointer rounded-lg",
        isActive
          ? "bg-blue-500/60 backdrop-blur-md text-white shadow-[0_0_20px_#00ff8844] animate-bordered-glint"
          : "bg-gray-800 text-white/70 hover:text-white"
      )}
    >
      {label}
    </button>
  );
}
