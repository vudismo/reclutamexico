"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    // Staggered fade-up
    gsap.fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    // Arrow pulse
    gsap.to(".scroll-arrow", {
      y: 10,
      opacity: 0.5,
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
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-black selection:bg-accent selection:text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_macro.png"
              alt="Recluta México Dark Iron"
              fill
              className="object-cover object-center opacity-40 mix-blend-luminosity grayscale"
              priority
            />
        {/* Heavy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-moss via-moss/60 to-transparent" />
      </div>

      {/* Content Layout */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-16 pl-8 md:pl-16 pr-8 max-w-7xl mx-auto text-warm-white">
        
        {/* Label */}
        <div ref={addToRefs} className="mb-4">
          <span className="font-mono text-sm uppercase tracking-widest text-accent font-bold">
            ENTRENADOR PERSONAL · MÉXICO
          </span>
        </div>

        {/* Headline Line 1 */}
        <h1 ref={addToRefs} className="font-sans font-bold text-4xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight mb-2">
          Yo fui el peor caso posible.
        </h1>

        {/* Headline Line 2 - Drama Serif */}
        <h2 ref={addToRefs} className="font-drama text-6xl md:text-[8rem] lg:text-[12rem] xl:text-[14rem] leading-[0.8] text-accent mb-16 md:mb-24">
          Y funcionó.
        </h2>

        {/* Subheadline */}
        <p ref={addToRefs} className="font-sans text-lg md:text-xl md:max-w-xl text-warm-white/70 mb-10 leading-relaxed font-medium">
          De 200 kg a fisicoculturista. El mismo método que me reconstruyó a mí, ahora trabaja para ti.
        </p>

        {/* CTAs */}
        <div ref={addToRefs} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#servicios"
            className="group relative flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
            style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
          >
            <span className="absolute inset-0 w-full h-full bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Quiero empezar</span>
          </Link>
          
          <Link
            href="#filosofia"
            className="group relative flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-4 text-base font-bold text-warm-white bg-white/5 border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Ver el proceso
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 scroll-arrow pointer-events-none text-warm-white/50">
        <ArrowDown size={32} strokeWidth={1.5} />
      </div>
    </section>
  );
}
