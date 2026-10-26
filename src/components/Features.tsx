"use client";

import { useEffect, useState, useRef } from "react";
import {
  Check,
  Droplets,
  Moon,
  Utensils,
  Dumbbell,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";

const PILARES = [
  {
    title: "Hidratación celular",
    benefit: "Reactiva tu metabolismo, protege articulaciones y eleva tu energía diaria.",
    icon: Droplets,
  },
  {
    title: "Sistema nervioso y descanso",
    benefit: "Reduce el estrés y duerme profundo para oxidar grasa y recuperar músculo.",
    icon: Moon,
  },
  {
    title: "Alimentación estructurada",
    benefit: "Comida real adaptada a tu vida, sin pasar hambre ni sufrir efecto rebote.",
    icon: Utensils,
  },
  {
    title: "Entrenamiento personalizado",
    benefit: "Fuerza progresiva calibrada a tu edad, historial clínico y condición actual.",
    icon: Dumbbell,
  },
];

const RESULTADOS = [
  "105 kg perdidos en 12 meses sin cirugías.",
  "De caminar con bastón a competir en tarima.",
  "Fuerza, movilidad y músculo después de los 50 y 60.",
  "Cero suplementos milagrosos ni dietas de hambre.",
  "Hábitos sostenibles diseñados para tu ritmo de vida.",
];

const DIAS = ["L", "M", "X", "J", "V", "S", "D"];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".feature-card", {
      y: 40,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="metodologia"
      className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto bg-cream"
    >
      <div className="mb-14 md:mb-20 max-w-3xl">
        <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-3">
          EL SISTEMA DE 4 PILARES
        </span>
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-tight mb-4">
          Por qué las dietas fallan y este método sí funciona
        </h2>
        <p className="font-sans text-base md:text-lg text-charcoal/75 leading-relaxed">
          Entrenar sin descansar o hacer dieta sin hidratación celular solo agota tu cuerpo. Nuestro sistema sincroniza las 4 áreas que determinan tu composición corporal y tu salud a largo plazo:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <ProtocolScheduler />
      </div>

      {/* High-Clarity Conversion Strip */}
      <div className="feature-card mt-10 bg-warm-white border border-border-subtle rounded-[2rem] p-6 md:p-8 shadow-bento flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold mb-1">
            ORIENTACIÓN PERSONALIZADA
          </div>
          <p className="font-sans text-lg md:text-xl font-extrabold text-charcoal">
            ¿Quieres saber cuál de los 4 Pilares está frenando tus resultados hoy?
          </p>
          <p className="font-sans text-sm text-charcoal/70 mt-1">
            Escríbele a Delta, nuestro asistente virtual, y recibe orientación inmediata según tu objetivo.
          </p>
        </div>

        <a
          href="https://wa.me/525545520392?text=Hola%20Delta,%20quiero%20evaluar%20mis%204%20Pilares%20y%20saber%20c%C3%B3mo%20empezar%20en%20Recluta%20M%C3%A9xico."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-shimmer shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-obsidian hover:bg-accent text-white font-bold px-7 py-4 text-sm transition-colors duration-200 shadow-sm"
        >
          <MessageCircle size={18} className="text-[#25D366]" />
          <span>Evaluar mis 4 Pilares con Delta</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  const [activePilar, setActivePilar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePilar((prev) => (prev + 1) % PILARES.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card isolated-card flex flex-col justify-between p-8 md:p-9 bg-warm-white border border-border-subtle rounded-[2rem] shadow-bento">
      <div className="mb-6">
        <h3 className="font-sans font-extrabold text-2xl mb-2 text-charcoal">
          Los 4 Pilares
        </h3>
        <p className="font-sans text-sm text-charcoal/70">
          Haz clic en cada pilar para ver cómo transforma tu biología:
        </p>
      </div>

      <div className="flex flex-col gap-2.5 my-auto">
        {PILARES.map((pilar, i) => {
          const isActive = activePilar === i;
          const IconComponent = pilar.icon;
          return (
            <button
              key={pilar.title}
              type="button"
              onClick={() => setActivePilar(i)}
              className={`w-full text-left rounded-2xl px-4 py-3.5 border transition-transform duration-300 flex flex-col gap-2 ${
                isActive
                  ? "bg-moss text-warm-white border-moss scale-[1.02] shadow-md"
                  : "bg-white text-charcoal border-border-subtle/80 hover:border-charcoal/30"
              }`}
            >
              <div className="w-full flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-accent text-white"
                        : "bg-cream text-charcoal/70"
                    }`}
                  >
                    <IconComponent size={16} />
                  </span>
                  <div>
                    <span
                      className={`block font-mono text-[10px] font-bold tracking-wider ${
                        isActive ? "text-warm-white/60" : "text-charcoal/50"
                      }`}
                    >
                      PILAR 0{i + 1}
                    </span>
                    <span className="font-sans text-sm md:text-[15px] font-bold">
                      {pilar.title}
                    </span>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isActive ? "bg-accent" : "bg-border-subtle"
                  }`}
                />
              </div>

              {isActive && (
                <p className="font-sans text-xs text-warm-white/80 pl-11 leading-relaxed">
                  {pilar.benefit}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % RESULTADOS.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card isolated-card flex flex-col justify-between p-8 md:p-9 bg-obsidian text-warm-white border border-white/10 rounded-[2rem] shadow-obsidian">
      <div className="flex justify-between items-start gap-4 mb-6">
        <div>
          <h3 className="font-sans font-extrabold text-2xl mb-2 text-warm-white">
            Evidencia comprobada
          </h3>
          <p className="font-sans text-sm text-warm-white/65">
            Resultados reales logrados con el sistema, sin atajos.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 shrink-0">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-warm-white tracking-widest">
            CASOS REALES
          </span>
        </div>
      </div>

      {/* Clean metric rows */}
      <div className="flex flex-col gap-2.5 my-auto">
        {RESULTADOS.map((item, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <div
              key={item}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer rounded-xl px-4 py-3.5 border transition-transform duration-300 flex items-center gap-3 ${
                isCurrent
                  ? "bg-white/[0.08] border-accent text-warm-white scale-[1.01]"
                  : "bg-transparent border-white/[0.06] text-warm-white/50 hover:text-warm-white/80"
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-2 h-2 rounded-full shrink-0 ${
                  isCurrent ? "bg-accent" : "bg-white/20"
                }`}
              />
              <span className="font-mono text-xs md:text-[13px] font-semibold leading-snug">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const [selectedDays, setSelectedDays] = useState<number[]>([0, 1, 2, 4]);
  const [savedPulse, setSavedPulse] = useState(false);

  const toggleDay = (index: number) => {
    setSelectedDays((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSave = () => {
    setSavedPulse(true);
    setTimeout(() => setSavedPulse(false), 1200);
  };

  return (
    <div className="feature-card isolated-card flex flex-col justify-between p-8 md:p-9 bg-warm-white border border-border-subtle rounded-[2rem] shadow-bento">
      <div className="mb-6">
        <h3 className="font-sans font-extrabold text-2xl mb-2 text-charcoal">
          Constancia medida
        </h3>
        <p className="font-sans text-sm text-charcoal/70">
          Adaptamos la frecuencia a tu agenda real para que nunca abandones a mitad del camino.
        </p>
      </div>

      <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col justify-between gap-5 my-auto">
        {/* Weekly Adherence Meter (GPU scaleX transform) */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between font-mono text-[11px] font-bold text-charcoal/60">
            <span>FRECUENCIA OBJETIVO</span>
            <span className="text-accent">
              {selectedDays.length} / 7 DÍAS ACTIVOS
            </span>
          </div>
          <div className="h-2 w-full bg-cream rounded-full overflow-hidden">
            <div
              className="h-full w-full bg-accent rounded-full origin-left transition-transform duration-300"
              style={{ transform: `scaleX(${selectedDays.length / 7})` }}
            />
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-7 gap-2">
          {DIAS.map((d, i) => {
            const isSelected = selectedDays.includes(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggleDay(i)}
                className={`aspect-square flex flex-col items-center justify-center rounded-xl font-mono text-xs font-bold border transition-transform duration-200 ${
                  isSelected
                    ? "bg-accent border-accent text-white scale-[1.04]"
                    : "bg-warm-white border-border-subtle text-charcoal hover:border-charcoal/40"
                }`}
              >
                <span>{d}</span>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleSave}
          className={`w-full py-3.5 rounded-xl font-bold font-sans text-sm transition-colors duration-200 flex items-center justify-center gap-2 ${
            savedPulse
              ? "bg-accent text-white"
              : "bg-moss text-warm-white hover:bg-charcoal"
          }`}
        >
          {savedPulse && <Check aria-hidden="true" size={16} />}
          <span>{savedPulse ? "¡Meta semanal registrada!" : "Simular mi semana"}</span>
        </button>
      </div>
    </div>
  );
}
