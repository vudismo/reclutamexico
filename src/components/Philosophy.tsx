"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(".parallax-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Word reveal
    gsap.to(".split-word", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
    });
  }, { scope: containerRef });

  const SplitWords = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
      <span className={className}>
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-2 -mb-2">
            <span className="inline-block split-word translate-y-full opacity-0">{word}</span>
            {"\u00A0"}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section ref={containerRef} id="filosofia" className="relative w-full py-40 overflow-hidden bg-moss">
      {/* Background Texture via Image Component */}
      <div className="absolute inset-0 z-0 parallax-bg h-[130%] -top-[15%]">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/philosophy_brutalist_gym.png"
            alt="Brutalist Gym Background"
            fill
            className="object-cover object-center grayscale"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-12">
        {/* Statement A */}
        <p className="font-sans text-xl md:text-3xl text-warm-white/60 font-medium max-w-3xl leading-snug">
          <SplitWords text="La mayoría de los entrenadores se enfoca en:" />
          <br />
          <SplitWords text="La industria del fitness te vende rutinas genéricas, suplementos innecesarios y cuerpos imposibles." />
        </p>

        {/* Statement B */}
        <div className="font-sans text-3xl md:text-5xl text-warm-white font-bold leading-tight max-w-5xl">
          <SplitWords text="Yo me enfoco en:" />
          <br className="mb-4 block" />
          <span className="font-drama text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.85] text-accent mt-4 block">
            <SplitWords text="hábitos." />
          </span>
          <span className="mt-8 block">
            <SplitWords text="Yo no entreno cuerpos. Yo construyo hábitos que duran toda la vida." />
          </span>
        </div>
      </div>
    </section>
  );
}
