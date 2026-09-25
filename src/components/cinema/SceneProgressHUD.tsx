"use client";

import { useState, useEffect } from "react";
import { sound } from "../../utils/audio";

const SCENES = [
  { id: "heritage", code: "01", name: "HERITAGE" },
  { id: "the-shift", code: "02", name: "THE SHIFT" },
  { id: "the-engine", code: "03", name: "THE ENGINE" },
  { id: "yield", code: "04", name: "YIELD" },
  { id: "vault", code: "05", name: "VAULT" },
];

export function SceneProgressHUD() {
  const [activeId, setActiveId] = useState("heritage");
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.45;
      SCENES.forEach((scene) => {
        const el = document.getElementById(scene.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(scene.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    sound.playClick(440);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Scene Navigator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-6 select-none pointer-events-auto"
    >
      {/* Background Vertical Laser Track */}
      <div className="relative flex flex-col items-center">
        {/* Track Line */}
        <div className="w-[1.5px] h-48 bg-umber/40 relative overflow-hidden">
          {/* Active Filling Progress Line */}
          <div
            className="w-full bg-ochre transition-all duration-150 ease-out shadow-[0_0_10px_#C8A27A]"
            style={{ height: `${scrollPercent}%` }}
          />
        </div>
      </div>

      {/* Chapter Pips */}
      <div className="flex flex-col items-end gap-4 font-mono">
        {SCENES.map((scene) => {
          const isActive = activeId === scene.id;
          return (
            <button
              key={scene.id}
              onClick={() => jumpTo(scene.id)}
              className="group flex items-center gap-3 cursor-pointer py-1 text-right focus:outline-none"
            >
              {/* Tooltip Label on Hover or Active */}
              <span
                className={`text-[9px] tracking-[0.25em] transition-all duration-300 ${
                  isActive
                    ? "text-ochre opacity-100 font-bold translate-x-0"
                    : "text-platinum/40 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {scene.name}
              </span>

              {/* Pip Marker */}
              <div
                className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                  isActive
                    ? "w-4 h-4 border border-ochre bg-void shadow-[0_0_12px_rgba(200,162,122,0.8)]"
                    : "w-2 h-2 bg-umber/60 group-hover:bg-ochre/80"
                }`}
              >
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-ochre" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Telemetry Progress Percentage */}
      <div className="text-[9px] font-mono tracking-widest text-platinum/40 text-right pr-0.5">
        <span className="text-ochre font-bold">{Math.round(scrollPercent)}</span>%
      </div>
    </aside>
  );
}
