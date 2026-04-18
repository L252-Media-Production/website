"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
  { label: "AV Installation", href: "/services/av-installation" },
  { label: "Event Production", href: "/services/event-production" },
  { label: "IT & Network", href: "/services/it-network" },
  { label: "Training", href: "/services/training" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Client Portal", href: "https://billing.twomediapros.com/client" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="L252 Media Production"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key="services" className="relative group">
                  <Link
                    href="/services"
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname.startsWith("/services")
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Services
                  </Link>
                  <div className="absolute left-0 top-full mt-1 w-48 bg-slate-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-700 first:rounded-t-md last:rounded-b-md"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link href="/" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Home</Link>
            <button
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white flex items-center justify-between"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white" onClick={() => setMenuOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/contact" className="block mx-3 mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md text-center" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
