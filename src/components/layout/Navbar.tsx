"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Sermons", href: "/sermons" },
    { name: "Events", href: "/events" },
    { name: "Give", href: "/give" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 bg-[#0b1d36] rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-[#0b1d36] text-[15px] leading-tight tracking-tight">
                Exousia Church of God
              </p>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                ABUJA
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:text-[#0b1d36] transition-colors rounded-lg hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/visit"
              className="group inline-flex items-center gap-2 bg-[#0b1d36] text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#132f4c] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Plan Your Visit
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium text-slate-700 hover:text-[#0b1d36] hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/visit"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#0b1d36] text-white text-sm font-medium px-5 py-3.5 rounded-full"
              >
                Plan Your Visit
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
