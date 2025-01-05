"use client";

import React from "react";

type ReloadButtonProps = {
  onReload: () => void;
  onToggleShow: () => void;
  isVisible: boolean;
};

export default function ReloadButton({
  onReload,
  onToggleShow,
  isVisible,
}: ReloadButtonProps) {
  return (
    <div className="fixed bottom-4 left-4 z-[60] flex gap-2">
      <button
        onClick={onReload}
        className="px-4 py-2 bg-white/10 hover:bg-white/15 
                         text-white/90 rounded-xl backdrop-blur-md border border-white/20 
                         transition-all duration-300 font-mono text-sm"
      >
        Reload Animation
      </button>
      <button
        onClick={onToggleShow}
        className="px-4 py-2 bg-white/10 hover:bg-white/15 
                         text-white/90 rounded-xl backdrop-blur-md border border-white/20 
                         transition-all duration-300 font-mono text-sm"
      >
        {isVisible ? "Hide" : "Show"} Preloader
      </button>
    </div>
  );
}
