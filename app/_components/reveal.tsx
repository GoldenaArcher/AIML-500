"use client";
import { useRef, useEffect } from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  effect?: "up" | "left" | "right" | "down";
  delay?: "200" | "400" | "600" | "800";
};

export default function Reveal({
  children,
  effect = "up",
  delay = "200",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(
            `animate-fade-in-${effect}`,
            delay ? `anim-delay-${delay}` : ""
          );
          obs.unobserve(el); // only trigger once
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [effect, delay]);

  return (
    // hide initially
    <div ref={ref} className={clsx("opacity-0")}>
      {children}
    </div>
  );
}
