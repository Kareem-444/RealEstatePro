"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, Building2, PlusSquare, Heart, ListChecks, BookText, LogIn, UserPlus, Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/add-property", label: "Add Property", icon: PlusSquare },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/compare", label: "Compare", icon: ListChecks },
  { href: "/blog", label: "Blog", icon: BookText },
  { href: "/auth/login", label: "Login", icon: LogIn },
  { href: "/auth/register", label: "Register", icon: UserPlus },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-emerald-950 shadow-lg mb-8 fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:py-4 md:static relative">
        {/* Logo/Brand (left) */}
        <Link href="/" className="flex items-center gap-2 font-extrabold text-emerald-100 text-xl md:text-2xl tracking-tight flex-shrink-0">
          <Home className="w-6 h-6 md:w-7 md:h-7" />
          Bey
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center flex-wrap max-w-full overflow-x-auto">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href} className="flex-shrink-0">
              <Link
                href={href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800 hover:text-white transition-colors font-semibold text-base focus:outline-none focus:ring-2 focus:ring-emerald-400"
                prefetch={true}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Theme toggle always visible */}
        <div className="ml-2 md:ml-4 flex-shrink-0">
          <ThemeToggle />
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 ml-2 z-50"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-7 h-7 text-emerald-100" /> : <Menu className="w-7 h-7 text-emerald-100" />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-emerald-950 shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex flex-col gap-2 p-6 pt-20 max-h-full overflow-y-auto">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-emerald-50 hover:bg-emerald-800 hover:text-white transition-colors font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              prefetch={true}
              onClick={() => setMenuOpen(false)}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
