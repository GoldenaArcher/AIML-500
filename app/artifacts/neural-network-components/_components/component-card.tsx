"use client";

import { useState } from "react";

type ComponentCardProps = {
  title: string;
  text: string;
};

export default function ComponentCard({ title, text }: ComponentCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      className={`group relative min-h-52 overflow-hidden rounded-2xl border bg-[linear-gradient(145deg,rgba(17,24,39,0.96),rgba(10,10,10,0.92))] text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-300/35 ${
        isOpen
          ? "border-cyan-300/35 shadow-[0_26px_60px_rgba(34,211,238,0.14)]"
          : "border-cyan-400/15 hover:border-cyan-300/35 hover:shadow-[0_26px_60px_rgba(34,211,238,0.14)]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.10),transparent_35%)] opacity-90 transition duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-cyan-300/0 opacity-70 transition duration-300 group-hover:opacity-100" />

      <div
        className={`relative flex min-h-52 flex-col justify-between p-6 transition duration-300 group-hover:opacity-0 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/75">Component</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-gray-400">Tap or hover to reveal the role of this component.</p>
      </div>

      <div
        className={`absolute inset-0 flex items-center p-6 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-amber-200/80">Definition</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-gray-200">{text}</p>
        </div>
      </div>
    </button>
  );
}
