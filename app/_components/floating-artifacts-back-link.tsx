"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function FloatingArtifactsBackLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 220);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-[max(1rem,calc((100vw-1280px)/2-4.5rem))] z-40 transition-all duration-200 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Go back to top"
        className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-lg backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/25 dark:border-white/10 dark:bg-black/75 dark:text-white dark:hover:border-white/30 dark:hover:bg-black dark:focus:ring-white/30"
      >
        <HiArrowUp aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}
