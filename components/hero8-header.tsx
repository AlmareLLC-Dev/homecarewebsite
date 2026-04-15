// components/hero8-header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo - Bigger */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="HomeCare Connections LLC" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Shifted Right with margin */}
          <div className="hidden md:flex items-center justify-end flex-1 ml-8">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Portal Button */}
          <div className="hidden md:block">
            <Link href="/portal">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105">
                <LogIn className="w-4 h-4" />
                Portal Login
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/portal"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Portal Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}