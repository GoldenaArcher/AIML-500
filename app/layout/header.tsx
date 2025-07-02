"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <header
      className="
        sticky top-0 z-50 border-b shadow-sm
        flex items-center justify-between p-4 md:px-8
        border-black/10 dark:border-white/10
        bg-[var(--color-background)] text-[var(--color-foreground)]
      "
    >
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        AIML&nbsp;500
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/artifacts">Artifacts</NavLink>
      </nav>

      {/* Hamburger (mobile) */}
      <button
        onClick={toggle}
        aria-label="Toggle menu"
        className="md:hidden flex flex-col justify-between w-6 h-4"
      >
        {/* use transform + opacity for animation */}
        <span
          className={`
            block h-0.5 w-full bg-current transition-transform duration-300
            ${open ? "translate-y-[7px] rotate-45" : ""}
          `}
        />
        <span
          className={`
            block h-0.5 w-full bg-current transition-opacity duration-300
            ${open ? "opacity-0" : "opacity-100"}
          `}
        />
        <span
          className={`
            block h-0.5 w-full bg-current transition-transform duration-300
            ${open ? "-translate-y-[7px] -rotate-45" : ""}
          `}
        />
      </button>

      {/* Slide-down mobile menu */}
      <div
        className={`
          md:hidden absolute left-0 right-0 top-full overflow-hidden
          bg-[var(--color-background)] text-[var(--color-foreground)]
          transition-max-h duration-300 ease-in-out
          ${
            open
              ? "max-h-40 border-b border-black/10 dark:border-white/10"
              : "max-h-0"
          }
        `}
      >
        <MobileLink href="/" onClick={toggle}>
          Home
        </MobileLink>
        <MobileLink href="/artifacts" onClick={toggle}>
          Artifacts
        </MobileLink>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:underline">
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-6 py-3 border-t first:border-t-0 border-black/10 dark:border-white/10"
    >
      {children}
    </Link>
  );
}
