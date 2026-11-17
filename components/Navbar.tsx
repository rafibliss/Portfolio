"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-peach-200 bg-peach-50/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-olive-800 transition hover:bg-peach-200">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-olive-700 px-4 py-2 text-sm font-semibold text-peach-100 transition hover:bg-olive-800">
              <Download size={15} /> Resume
            </a>
          </li>
        </ul>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-olive-800 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-peach-200 bg-peach-50 px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-olive-800 hover:bg-peach-100">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a href="/resume.pdf" download className="flex items-center justify-center gap-2 rounded-full bg-olive-700 px-4 py-3 font-semibold text-peach-100">
              <Download size={16} /> Download resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
