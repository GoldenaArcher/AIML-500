"use client";

import { useEffect, useState } from "react";

type ComponentCardProps = {
  title: string;
  text: string;
};

export default function ComponentCard({ title, text }: ComponentCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  const isActive = supportsHover ? isHovered : isOpen;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateMode = () => {
      setSupportsHover(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsOpen(false);
      } else {
        setIsHovered(false);
      }
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);

    return () => mediaQuery.removeEventListener("change", updateMode);
  }, []);

  return (
    <button
      type="button"
      aria-expanded={isActive}
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={() => {
        if (!supportsHover) {
          setIsOpen((prev) => !prev);
        }
      }}
      onPointerEnter={(event) => {
        if (supportsHover && event.pointerType === "mouse") {
          setIsHovered(true);
        }
      }}
      onPointerLeave={(event) => {
        if (supportsHover && event.pointerType === "mouse") {
          setIsHovered(false);
        }
      }}
      className={`group relative min-h-52 overflow-hidden rounded-2xl border bg-[linear-gradient(145deg,#f8fbff,#f4efe4)] text-left shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/25 dark:bg-[linear-gradient(145deg,rgba(17,24,39,0.96),rgba(10,10,10,0.92))] dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)] dark:focus-visible:ring-cyan-300/35 ${
        isActive
          ? "border-cyan-400/45 shadow-[0_26px_60px_rgba(34,211,238,0.12)] dark:border-cyan-300/35 dark:shadow-[0_26px_60px_rgba(34,211,238,0.14)]"
          : "border-slate-200 hover:border-cyan-400/45 hover:shadow-[0_26px_60px_rgba(34,211,238,0.12)] dark:border-cyan-400/15 dark:hover:border-cyan-300/35 dark:hover:shadow-[0_26px_60px_rgba(34,211,238,0.14)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_35%)] opacity-90 transition duration-300 dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-500/60 to-cyan-400/0 opacity-70 transition duration-300 dark:from-cyan-300/0 dark:via-cyan-300/80 dark:to-cyan-300/0" />

      <div
        className={`pointer-events-none relative flex min-h-52 flex-col justify-between p-6 transition duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-700/80 dark:text-cyan-200/75">Component</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-500 dark:text-gray-400">Tap or hover to reveal the role of this component.</p>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 flex items-center p-6 transition duration-300 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-amber-700/80 dark:text-amber-200/80">Definition</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-gray-200">{text}</p>
        </div>
      </div>
    </button>
  );
}
