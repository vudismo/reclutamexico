"use client";

import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Morphing Logic: Transition from transparent/light to light/dark text
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > window.innerHeight * 0.5) {
        navRef.current.classList.add("bg-cream/90", "backdrop-blur-xl", "text-charcoal", "border", "border-border-subtle", "shadow-sm");
        navRef.current.classList.remove("text-white", "border-transparent", "bg-transparent");
      } else {
        navRef.current.classList.add("text-white", "border-transparent", "bg-transparent");
        navRef.current.classList.remove("bg-cream/90", "backdrop-blur-xl", "text-charcoal", "border", "border-border-subtle", "shadow-sm");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full w-[95%] max-w-7xl transition-all duration-300 text-white border-transparent bg-transparent"
      >
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 z-50">
          <span className="font-drama text-lg md:text-2xl font-bold tracking-tight">RECLUTA</span>
          <span className="font-mono text-[9px] md:text-xs uppercase tracking-widest">MÉXICO</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#metodologia" className="text-sm font-medium hover:-translate-y-[2px] transition-transform">Método</Link>
          <Link href="#proceso" className="text-sm font-medium hover:-translate-y-[2px] transition-transform">Proceso</Link>
          <Link href="#servicios" className="text-sm font-medium hover:-translate-y-[2px] transition-transform">Servicios</Link>
          <Link href="#resultados" className="text-sm font-medium hover:-translate-y-[2px] transition-transform">Resultados</Link>
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:block z-50">
          <a
            href="https://wa.me/525561114259?text=Hola%20Ricardo,%20vengo%20del%20sitio%20web%20y%20me%20gustar%C3%ADa%20empezar%20mi%20entrenamiento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
            style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
          >
            <span className="absolute inset-0 w-full h-full bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Quiero empezar</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-current p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-moss text-warm-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="#metodologia" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>Método</Link>
        <Link href="#proceso" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>Proceso</Link>
        <Link href="#servicios" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>Servicios</Link>
        <Link href="#resultados" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>Resultados</Link>
        <a
          href="https://wa.me/525561114259?text=Hola%20Ricardo,%20vengo%20del%20sitio%20web%20y%20me%20gustar%C3%ADa%20empezar%20mi%20entrenamiento."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-8 relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-8 py-4 text-lg font-bold text-white"
        >
          Quiero empezar
        </a>
      </div>
    </>
  );
}
