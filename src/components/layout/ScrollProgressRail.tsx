"use client";

import { useState, useEffect } from "react";
import { SECTION_PROGRESS_ITEMS } from "../../config/site";

export function ScrollProgressRail() {
  const [activeId, setActiveId] = useState<string>(SECTION_PROGRESS_ITEMS[0]?.id || "heritage");
  const [scrollPercent, setScrollPercent] = useState(0);

  // Optimized Section Tracking with IntersectionObserver (zero layout thrashing)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: 0.15 }
    );

    SECTION_PROGRESS_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lightweight Progress Percentage Calculation (single RAF lock, no DOM reads in loop)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Section Navigator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-6 select-none pointer-events-auto"
    >
      {/* Background Vertical Laser Track */}
      <div className="relative flex flex-col items-center">
        {/* Track Line */}
        <div className="w-[1.5px] h-48 bg-umber/40 relative overflow-hidden" aria-hidden="true">
          {/* Active Filling Progress Line */}
          <div
            className="w-full bg-ochre transition-all duration-150 ease-out shadow-[0_0_10px_#C8A27A]"
            style={{ height: `${scrollPercent}%` }}
          />
        </div>
      </div>

      {/* Section Navigation Pips */}
      <div className="flex flex-col items-end gap-3 font-mono">
        {SECTION_PROGRESS_ITEMS.map((item, index) => {
          const isActive = activeId === item.id;
          const sectionNumber = String(index + 1).padStart(2, "0");
          return (
            <button
              key={item.id}
              onClick={() => jumpTo(item.id)}
              aria-label={`Jump to ${item.label} section (Section ${sectionNumber})`}
              aria-current={isActive ? "step" : undefined}
              className="group flex items-center gap-3 cursor-pointer py-1.5 px-1 text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded"
            >
              {/* Tooltip Label on Hover or Active */}
              <span
                className={`text-[9px] tracking-[0.25em] transition-all duration-300 ${
                  isActive
                    ? "text-ochre opacity-100 font-bold translate-x-0"
                    : "text-platinum/40 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {item.label.toUpperCase()}
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
      <div className="text-[9px] font-mono tracking-widest text-platinum/40 text-right pr-0.5" aria-hidden="true">
        <span className="text-ochre font-bold">{Math.round(scrollPercent)}</span>%
      </div>
    </aside>
  );
}
