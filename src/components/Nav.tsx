"use client";

import Image from "next/image";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

const LOCALES = [
  { code: "en", label: "English", flag: "/images/english.svg" },
  { code: "es", label: "Español", flag: "/images/spanish.svg" },
] as const;

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langDesktopRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        !langDesktopRef.current?.contains(target) &&
        !langMobileRef.current?.contains(target)
      ) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
  }

  const services = [
    { label: t("avInstallation"), href: "/services/av-installation" as const },
    { label: t("eventProduction"), href: "/services/event-production" as const },
    { label: t("itNetwork"), href: "/services/it-network" as const },
    { label: t("training"), href: "/services/training" as const },
  ];

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
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/" ? "text-blue-400" : "text-slate-300 hover:text-white"
              }`}
            >
              {t("home")}
            </Link>

            <div className="relative group">
              <Link
                href="/services"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t("services")}
              </Link>
              <div className="absolute left-0 top-full mt-1 w-52 bg-slate-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
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

            <Link
              href="/about"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/about" ? "text-blue-400" : "text-slate-300 hover:text-white"
              }`}
            >
              {t("about")}
            </Link>

            <a
              href="https://billing.twomediapros.com/client"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t("clientPortal")}
            </a>

            <div ref={langDesktopRef} className="relative ml-1">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium transition-colors focus:outline-none"
                aria-label="Select language"
              >
                <Image src={currentLocale.flag} alt={currentLocale.label} width={20} height={15} className="block rounded-sm" />
                <span>{currentLocale.code.toUpperCase()}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-slate-800 rounded-md shadow-xl overflow-hidden">
                  {LOCALES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                        l.code === locale ? "text-white bg-slate-700" : "text-slate-300 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      <Image src={l.flag} alt={l.label} width={20} height={15} className="block rounded-sm" />
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors"
            >
              {t("contactUs")}
            </Link>
          </nav>

          {/* Mobile right controls */}
          <div className="md:hidden flex items-center gap-1">
            <div ref={langMobileRef} className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium transition-colors focus:outline-none"
                aria-label="Select language"
              >
                <Image src={currentLocale.flag} alt={currentLocale.label} width={20} height={15} className="block rounded-sm" />
                <span>{currentLocale.code.toUpperCase()}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-slate-800 rounded-md shadow-xl overflow-hidden z-10">
                  {LOCALES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                        l.code === locale ? "text-white bg-slate-700" : "text-slate-300 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      <Image src={l.flag} alt={l.label} width={20} height={15} className="block rounded-sm" />
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="p-2 rounded-md text-slate-300 hover:text-white"
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
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link href="/" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>
              {t("home")}
            </Link>
            <button
              className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white flex items-center justify-between"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              {t("services")}
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
            <Link href="/about" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>
              {t("about")}
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>
              {t("contactUs")}
            </Link>
            <Link
              href="/contact"
              className="block mx-3 mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t("contactUs")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
