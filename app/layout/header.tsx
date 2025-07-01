'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between p-4 md:px-8 border-b shadow-sm sticky top-0 z-50 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Link href="/" className="text-xl font-bold">
        Lu Han
      </Link>
      <nav className="space-x-4 hidden md:flex">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/artifacts" className="hover:underline">
          Artifacts
        </Link>
      </nav>
    </header>
  );
}
