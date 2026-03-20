"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";

export default function Protocol() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Select all cards inside this component using the hook's context selector
    const cards = gsap.utils.toArray(".protocol-card") as HTMLElement[];
    
    // We pin the container and animate cards over each other
    // For 3 cards, we need a timeline that scrolls through them
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: true,
      },
    });

    cards.forEach((card, index) => {
      // Setup initial state for cards 2 and 3 (index 1 and 2) to be below the viewport
      if (index > 0) {
        gsap.set(card, { yPercent: 100 });
      }

      // If it's the last card, we don't scale it down after it lands
      if (index === cards.length - 1) return;

      tl.to(card, {
        scale: 0.92,
        filter: "blur(8px)",
        opacity: 0.4,
        ease: "none",
      }, index)
      // Reveal the next card
      .to(cards[index + 1], {
        yPercent: 0,
        ease: "none",
      }, index);
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="proceso" className="bg-[#1A1A1A] w-full h-[100dvh] overflow-hidden relative">
      {/* Card 1 */}
      <div className="protocol-card absolute inset-0 w-full h-full bg-[#1A1A1A] z-10 flex items-center justify-center p-6 md:p-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-square max-w-md mx-auto">
            {/* Anim: Concentric Circles */}
            <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow origin-center">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#CC5833" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#CC5833" strokeWidth="0.5" opacity="0.4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#CC5833" strokeWidth="2" strokeDasharray="20 10" opacity="0.8" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="#CC5833" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xl text-accent/80 font-bold tracking-widest block mb-4">01</span>
            <h3 className="font-sans text-4xl md:text-6xl text-warm-white font-bold mb-6">Diagnóstico inicial</h3>
            <p className="font-sans text-lg md:text-xl text-warm-white/70 max-w-lg leading-relaxed">
              Antes de cualquier plan, entendemos de dónde partes. Historia clínica, hábitos actuales, objetivos reales. Nada se improvisa. Todo parte de la verdad de tu cuerpo.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="protocol-card absolute inset-0 w-full h-full bg-[#1A1A1A] z-20 flex items-center justify-center p-6 md:p-16 border-t border-white/5">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-square max-w-md mx-auto bg-black/20 rounded-3xl overflow-hidden border border-white/10">
            {/* Anim: Laser Scanner */}
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#CC5833 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.1 }} />
            <div className="absolute left-0 right-0 h-1 bg-accent/80 shadow-[0_0_15px_#CC5833] animate-scan" style={{ top: "0%" }} />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xl text-accent/80 font-bold tracking-widest block mb-4">02</span>
            <h3 className="font-sans text-4xl md:text-6xl text-warm-white font-bold mb-6">Tu programa a medida</h3>
            <p className="font-sans text-lg md:text-xl text-warm-white/70 max-w-lg leading-relaxed">
              Construimos un plan que funciona con tu vida, no contra ella. Los 4 Pilares calibrados a tu condición. Sin fórmulas copiadas, sin atajos.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="protocol-card absolute inset-0 w-full h-full bg-[#1A1A1A] z-30 flex items-center justify-center p-6 md:p-16 border-t border-white/5">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            {/* Anim: Pulsing EKG */}
             <svg viewBox="0 0 300 100" className="w-full h-auto">
              <path
                d="M 0 50 L 50 50 L 70 20 L 90 80 L 110 50 L 300 50"
                fill="none"
                stroke="#CC5833"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-ekg"
                style={{ strokeDasharray: 350, strokeDashoffset: 350 }}
              />
            </svg>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xl text-accent/80 font-bold tracking-widest block mb-4">03</span>
            <h3 className="font-sans text-4xl md:text-6xl text-warm-white font-bold mb-6">Seguimiento y evolución</h3>
            <p className="font-sans text-lg md:text-xl text-warm-white/70 max-w-lg leading-relaxed">
              El programa no termina en la primera sesión. Monitoreamos, ajustamos y avanzamos contigo semana a semana. El objetivo no es que llegues — es que te quedes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
