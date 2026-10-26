"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const DELTA_WHATSAPP_URL =
  "https://wa.me/525545520392?text=Hola%20Delta,%20vengo%20del%20sitio%20web%20de%20Recluta%20M%C3%A9xico%20y%20quiero%20saber%20qu%C3%A9%20programa%20es%20ideal%20para%20m%C3%AD.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const scrolled = y > 48;
          const floating = y > 380;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          setShowFloatingCta((prev) => (prev !== floating ? floating : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-5 md:px-7 py-3 rounded-full w-[94%] max-w-7xl transition-colors duration-300 ${
          isOpen
            ? "bg-obsidian text-warm-white border border-white/15"
            : isScrolled
            ? "bg-warm-white/95 backdrop-blur-md text-charcoal border border-border-subtle shadow-bento"
            : "bg-obsidian/65 backdrop-blur-md text-warm-white border border-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 z-50">
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="font-drama text-xl md:text-2xl font-bold tracking-tight">
              RECLUTA
            </span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.22em] opacity-80">
              MÉXICO
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#metodologia"
            className="text-sm font-semibold opacity-80 hover:opacity-100 hover:text-accent transition-colors"
          >
            Los 4 Pilares
          </Link>
          <Link
            href="#proceso"
            className="text-sm font-semibold opacity-80 hover:opacity-100 hover:text-accent transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#servicios"
            className="text-sm font-semibold opacity-80 hover:opacity-100 hover:text-accent transition-colors"
          >
            Programas
          </Link>
          <Link
            href="#resultados"
            className="text-sm font-semibold opacity-80 hover:opacity-100 hover:text-accent transition-colors"
          >
            Casos reales
          </Link>
        </div>

        {/* CTA Desktop — Delta Virtual Assistant */}
        <div className="hidden md:block z-50">
          <a
            href={DELTA_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shimmer group inline-flex items-center gap-2.5 justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
            <span>Hablar con Delta</span>
            <ArrowUpRight
              aria-hidden="true"
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-current p-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <X size={20} className="text-warm-white" /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian text-warm-white flex flex-col items-center justify-center gap-7 px-8 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <Link
          href="#metodologia"
          className="text-3xl font-bold hover:text-accent transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Los 4 Pilares
        </Link>
        <Link
          href="#proceso"
          className="text-3xl font-bold hover:text-accent transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Cómo funciona
        </Link>
        <Link
          href="#servicios"
          className="text-3xl font-bold hover:text-accent transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Programas
        </Link>
        <Link
          href="#resultados"
          className="text-3xl font-bold hover:text-accent transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Casos reales
        </Link>

        <a
          href={DELTA_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-4 inline-flex items-center gap-2.5 justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-accent-glow"
        >
          <MessageCircle aria-hidden="true" className="w-5 h-5" />
          <span>Hablar con Delta en WhatsApp</span>
        </a>
      </div>

      {/* Floating Conversion Pill: Delta Virtual Assistant */}
      <div
        className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
          showFloatingCta
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={DELTA_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar con Delta, asistente virtual de Recluta México en WhatsApp"
          className="group flex items-center gap-3 rounded-full bg-obsidian/95 backdrop-blur-md border border-white/15 pl-3.5 pr-5 py-2.5 text-warm-white shadow-obsidian transition-transform duration-200 hover:scale-[1.03] active:scale-95"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shrink-0">
            <MessageCircle size={18} />
          </span>
          <div className="text-left leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#25D366] font-bold">
                EN LÍNEA
              </span>
              <span className="text-white/30 text-[10px]">•</span>
              <span className="font-mono text-[10px] text-warm-white/60">
                +52 55 4552 0392
              </span>
            </div>
            <div className="font-sans text-xs sm:text-sm font-bold text-white group-hover:text-accent transition-colors">
              Delta · Asistente Recluta
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
