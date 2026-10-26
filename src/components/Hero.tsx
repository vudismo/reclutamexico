"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import {
  ArrowDown,
  ArrowUpRight,
  Flame,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const DELTA_HERO_WHATSAPP =
  "https://wa.me/525545520392?text=Hola%20Delta,%20vengo%20del%20sitio%20web%20de%20Recluta%20M%C3%A9xico%20y%20quiero%20iniciar%20mi%20diagn%C3%B3stico%20para%20saber%20qu%C3%A9%20programa%20me%20recomiendas.";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      textRefs.current,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.09,
        ease: "power3.out",
        delay: 0.08,
      }
    );

    gsap.fromTo(
      ".hero-underline",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.55,
      }
    );

    gsap.to(".scroll-arrow", {
      y: 8,
      opacity: 0.45,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      duration: 1.5,
    });
  }, { scope: containerRef });

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-obsidian isolate-blend selection:bg-accent selection:text-white flex items-center"
    >
      {/* Background Image: Molten-copper & forged-iron Olympic plate */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_macro.png"
          alt="Recluta México Dark Iron"
          fill
          fetchPriority="high"
          priority
          className="object-cover object-center opacity-55"
        />
        {/* Perceptual OKLab Directional Vignettes */}
        <div className="absolute inset-0 bg-hero-vignette" />
        <div className="absolute inset-0 bg-hero-bottom-fade" />
      </div>

      {/* Content Layout: Future.co / Centr Asymmetric Split */}
      <div className="relative z-10 w-full pt-28 pb-16 md:py-24 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto text-warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Label */}
            <div ref={addToRefs} className="mb-5">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-accent font-bold">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-accent" />
                RICARDO LEYVA · MÉTODO DE TRANSFORMACIÓN REAL
              </span>
            </div>

            {/* Headline Line 1 */}
            <h1
              ref={addToRefs}
              className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.25rem] leading-[0.95] tracking-tight mb-2 text-warm-white"
            >
              Yo fui el peor caso posible.
            </h1>

            {/* Headline Line 2 - Drama Serif with GPU Key-Point Underline */}
            <div ref={addToRefs} className="inline-block mb-7 md:mb-8">
              <h2 className="font-drama text-6xl sm:text-8xl md:text-[7.2rem] lg:text-[8.5rem] xl:text-[9.75rem] leading-[0.82] text-accent">
                Y funcionó.
              </h2>
              <div
                aria-hidden="true"
                className="hero-underline h-1.5 w-full bg-gradient-to-r from-accent via-accent/70 to-transparent rounded-full origin-left mt-2"
              />
            </div>

            {/* Subheadline — High-Clarity Value Proposition */}
            <p
              ref={addToRefs}
              className="font-sans text-lg md:text-xl max-w-2xl text-warm-white/90 mb-7 leading-relaxed font-medium"
            >
              Pasé de <strong className="text-white font-extrabold">200 kg y usar bastón</strong> a competir en tarima perdiendo{" "}
              <strong className="text-accent font-extrabold">105 kg sin cirugías ni atajos</strong>. Hoy aplico ese mismo sistema de 4 Pilares para que recuperes tu fuerza, tu movilidad y tu salud definitiva.
            </p>

            {/* Quick Value Bullets for Instant Conversion Clarity */}
            <div
              ref={addToRefs}
              className="flex flex-wrap gap-x-6 gap-y-2.5 mb-9 text-sm md:text-base text-warm-white/80 font-medium"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-accent shrink-0" />
                Sin dietas extremas ni rebote
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-accent shrink-0" />
                Adaptado a tu edad y condición
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-accent shrink-0" />
                Seguimiento real cada semana
              </span>
            </div>

            {/* CTAs */}
            <div
              ref={addToRefs}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href={DELTA_HERO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-shimmer group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-accent-glow"
              >
                <MessageCircle aria-hidden="true" className="w-5 h-5" />
                <span>Evaluar mi caso con Delta</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <Link
                href="#servicios"
                className="flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-4 text-base font-bold text-warm-white bg-white/[0.08] border border-white/20 hover:bg-white/15 transition-colors"
              >
                Ver programas y precios
              </Link>
            </div>

            {/* Delta Assistant Micro-Copy */}
            <div
              ref={addToRefs}
              className="mt-4 flex items-center gap-2 font-mono text-xs text-warm-white/60"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
              <span>
                Atención inmediata por WhatsApp con <strong className="text-warm-white">Delta</strong> (Asistente Virtual Recluta · +52 55 4552 0392)
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Coach Showcase Card */}
          <div
            ref={addToRefs}
            className="lg:col-span-5 xl:col-span-4 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-[2.25rem] bg-[#141916] border border-white/15 p-3.5 shadow-obsidian">
              {/* Main Coach Portrait */}
              <div className="relative aspect-[4/5] w-full rounded-[1.75rem] overflow-hidden bg-obsidian">
                <Image
                  src="/images/despues.jpg"
                  alt="Ricardo Leyva — Transformación de 200 kg a tarima"
                  fill
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest text-warm-white font-bold">
                    <ShieldCheck size={13} className="text-accent" />
                    EVIDENCIA DOCUMENTADA
                  </span>
                  <span className="float-badge bg-accent text-white px-3.5 py-1 rounded-full font-mono text-xs font-bold shadow-accent-glow">
                    -105 KG EN 1 AÑO
                  </span>
                </div>

                {/* Bottom Overlay Info + Thumbnail Inset */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1">
                      FUNDADOR Y ENTRENADOR
                    </div>
                    <div className="font-sans text-lg font-extrabold text-white leading-tight">
                      Ricardo Leyva
                    </div>
                    <div className="font-sans text-xs text-warm-white/75 mt-0.5">
                      De 200 kg a fisicoculturista
                    </div>
                  </div>

                  {/* Origin Thumbnail Inset */}
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden border-2 border-white/30 shadow-lg shrink-0 bg-obsidian">
                    <Image
                      src="/images/antes.jpeg"
                      alt="Ricardo antes — 200 kg"
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-black/80 text-center font-mono text-[8px] text-white/90 py-0.5 uppercase">
                      200 KG
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metric Strip */}
              <div className="grid grid-cols-2 gap-2.5 mt-3 px-1">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                  <Flame size={18} className="text-accent shrink-0" />
                  <div>
                    <div className="font-mono text-xs font-bold text-white">4 PILARES</div>
                    <div className="font-sans text-[11px] text-warm-white/60">Sistema integral</div>
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
                  <div>
                    <div className="font-mono text-xs font-bold text-white">100% NATURAL</div>
                    <div className="font-sans text-[11px] text-warm-white/60">Hábitos reales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 scroll-arrow pointer-events-none text-warm-white/50 hidden sm:block">
        <ArrowDown size={26} strokeWidth={1.5} />
      </div>
    </section>
  );
}
