"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".manifesto-block",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".habitos-underline",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 68%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="filosofia"
      className="relative w-full py-28 md:py-40 overflow-hidden bg-moss-deep isolate-blend"
    >
      {/* Background Architectural Gym Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/philosophy_brutalist_gym.png"
          alt="Brutalist Gym Background"
          fill
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss-deep via-moss-deep/80 to-obsidian" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Statement A: The Industry Problem */}
          <div className="manifesto-block lg:col-span-5 bg-white/[0.04] border border-white/10 rounded-[2rem] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white/55 mb-5">
              <XCircle size={15} className="text-red-400" />
              <span>POR QUÉ ABANDONAS EN OTROS LUGARES</span>
            </div>
            <p className="font-sans text-xl md:text-2xl text-warm-white/80 font-medium leading-relaxed mb-6">
              La industria tradicional te vende castigo: dietas extremas que rompes en 15 días, suplementos caros e innecesarios y rutinas copiadas que lesionan tus articulaciones.
            </p>
            <div className="pt-5 border-t border-white/10 font-mono text-xs text-warm-white/45 uppercase tracking-wider">
              Resultado común: Frustración y efecto rebote
            </div>
          </div>

          {/* Statement B: The Recluta Manifesto */}
          <div className="manifesto-block lg:col-span-7 flex flex-col justify-center">
            <div className="font-sans text-3xl md:text-5xl text-warm-white font-bold leading-tight">
              <span className="inline-flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-accent mb-3">
                <CheckCircle2 size={16} className="text-accent" />
                <span>EL ESTÁNDAR RECLUTA MÉXICO:</span>
              </span>

              <div className="inline-block my-2">
                <span className="font-drama text-7xl sm:text-8xl md:text-[8.5rem] lg:text-[9.5rem] leading-[0.85] text-accent block">
                  hábitos.
                </span>
                <div
                  aria-hidden="true"
                  className="habitos-underline h-1.5 w-full bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-full origin-left mt-3"
                />
              </div>

              <span className="mt-6 pt-6 border-t border-white/15 block text-2xl sm:text-3xl md:text-4xl leading-[1.18] text-warm-white">
                No entrenamos cuerpos para una foto de 30 días. Construimos la fuerza, la nutrición y la disciplina que te sostienen toda la vida.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
