"use client";

import { useEffect, useState, useRef } from "react";
import { MousePointer2 } from "lucide-react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";

const PILARES = [
  "Hidratación celular",
  "Sistema nervioso y descanso",
  "Alimentación estructurada",
  "Entrenamiento personalizado",
];

const RESULTADOS = [
  "105 kg perdidos. En un año.",
  "De bastón a plataforma de competencia.",
  "Fuerza recuperada después de los 60.",
  "Sin cirugías milagrosas. Sin fórmulas mágicas.",
  "El mismo método. Adaptado a tu cuerpo.",
];

const DIAS = ["L", "M", "X", "J", "V", "S", "D"];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Reveal section
    gsap.from(".feature-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="metodologia" className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-cream">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal tracking-tight mb-4">
          El método que no se improvisa
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <ProtocolScheduler />
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  const [cards, setCards] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const last = newArr.pop()!;
        newArr.unshift(last);
        return newArr;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card relative flex flex-col p-8 bg-warm-white border border-border-subtle rounded-3xl shadow-sm h-[380px] overflow-hidden">
      <div>
        <h3 className="font-sans font-bold text-xl mb-2 text-charcoal">
          Los 4 Pilares
        </h3>
        <p className="font-sans text-sm text-charcoal/70">
          Un sistema completo. No rutinas sueltas.
        </p>
      </div>

      <div className="relative flex-1 w-full perspective-1000 flex items-center justify-center mt-6">
        {cards.map((pilarIndex, i) => {
          const isTop = i === 0;
          const isMiddle = i === 1;
          const isBottom = i === 2;

          let translateY = 0;
          let scale = 1;
          let opacity = 1;
          const zIndex = 3 - i;

          if (isTop) {
            translateY = -15;
            scale = 1;
            opacity = 1;
          } else if (isMiddle) {
            translateY = 8;
            scale = 0.92;
            opacity = 0.8;
          } else if (isBottom) {
            translateY = 28;
            scale = 0.84;
            opacity = 0.4;
          } else {
            translateY = 40;
            scale = 0.8;
            opacity = 0;
          }

          return (
            <div
              key={pilarIndex}
              className="absolute w-[90%] bg-white border border-border-subtle rounded-2xl p-5 shadow-sm flex items-center justify-center text-center"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <span className="font-mono text-[13px] tracking-wide text-charcoal font-bold">
                {PILARES[pilarIndex]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentText = "";
    const targetText = RESULTADOS[msgIndex];
    let charIndex = 0;
    let timer: NodeJS.Timeout;

    if (isTyping) {
      timer = setInterval(() => {
        currentText += targetText.charAt(charIndex);
        setText(currentText);
        charIndex++;
        if (charIndex >= targetText.length) {
          clearInterval(timer);
          setTimeout(() => setIsTyping(false), 2000); // Wait before deleting
        }
      }, 50);
    } else {
      timer = setInterval(() => {
        currentText = targetText.substring(0, charIndex - 1);
        setText(currentText);
        charIndex--;
        if (charIndex <= 0) {
          clearInterval(timer);
          setMsgIndex((prev) => (prev + 1) % RESULTADOS.length);
          setTimeout(() => setIsTyping(true), 500); // Wait before typing next
        }
      }, 30);
    }

    return () => clearInterval(timer);
  }, [msgIndex, isTyping]);

  return (
    <div className="feature-card relative flex flex-col p-8 bg-warm-white border border-border-subtle rounded-3xl shadow-sm h-[380px] overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-sans font-bold text-xl mb-2 text-charcoal">
            Resultados documentados
          </h3>
          <p className="font-sans text-sm text-charcoal/70">
            No promesas. Evidencia real de transformación.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-border-subtle shadow-sm">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold text-charcoal tracking-widest">EN VIVO</span>
        </div>
      </div>

      <div className="flex-1 bg-moss/5 rounded-2xl p-6 border border-border-subtle/50 flex flex-col justify-center">
        <p className="font-mono text-lg text-charcoal">
          {"> "}
          {text}
          <span className="inline-block w-2 h-5 bg-accent ml-1 align-middle animate-pulse" />
        </p>
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(cursorRef.current, {
      x: 120, // Move to 'X' (Wednesday) roughly
      y: 60,
      duration: 1,
      ease: "power2.inOut",
    })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
      .to(dayRef.current, { backgroundColor: "#CC5833", color: "#FFF", duration: 0.2 }, "-=0.1")
      .to(cursorRef.current, {
        x: 180,
        y: 190,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
      })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
      .to(btnRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.1")
      .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
      .to(dayRef.current, { backgroundColor: "transparent", color: "#1A1A1A", duration: 0.2 }, "+=0")
      .set(cursorRef.current, { x: -20, y: 250, opacity: 1 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="feature-card relative flex flex-col p-8 bg-warm-white border border-border-subtle rounded-3xl shadow-sm h-[380px] overflow-hidden">
      <div>
        <h3 className="font-sans font-bold text-xl mb-2 text-charcoal">
          Seguimiento real
        </h3>
        <p className="font-sans text-sm text-charcoal/70">
          Tu progreso, semana a semana. Sin adivinanzas.
        </p>
      </div>

      <div className="relative mt-8 flex-1 w-full max-w-[280px] mx-auto bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col justify-center">
        {/* Weekly Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {DIAS.map((d, i) => (
            <div
              key={i}
              ref={d === "X" ? dayRef : null}
              className="aspect-square flex items-center justify-center rounded-lg font-mono text-sm border border-border-subtle/50 text-charcoal"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div
          ref={btnRef}
          className="w-full bg-moss text-warm-white text-center py-3 rounded-xl font-bold font-sans text-sm"
        >
          Guardar Progreso
        </div>

        {/* Animated Cursor */}
        <div
          ref={cursorRef}
          className="absolute top-0 left-0 text-charcoal drop-shadow-md z-20 pointer-events-none"
          style={{ transform: "translate(-20px, 250px)" }}
        >
          <MousePointer2 className="w-8 h-8 fill-white" />
        </div>
      </div>
    </div>
  );
}
