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
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";

const PILARES = [
  {
    id: "01",
    title: "Hidratación celular",
    tag: "Metabolismo y articulaciones",
    benefit:
      "No es solo tomar agua: reponemos minerales e hidratación intracelular para lubricar articulaciones, activar tu metabolismo y eliminar la fatiga crónica.",
    icon: Droplets,
  },
  {
    id: "02",
    title: "Sistema nervioso y descanso",
    tag: "Control de cortisol y sueño",
    benefit:
      "Un cuerpo estresado y mal dormido almacena grasa. Regulamos tu descanso profundo para que tus hormonas trabajen a tu favor y repares tejido muscular.",
    icon: Moon,
  },
  {
    id: "03",
    title: "Alimentación estructurada",
    tag: "Nutrición real sin rebote",
    benefit:
      "Olvídate de pasar hambre o pesar cada lechuga. Aprendes a estructurar comida real mexicana con suficiente proteína para perder grasa manteniendo tu energía.",
    icon: Utensils,
  },
  {
    id: "04",
    title: "Entrenamiento personalizado",
    tag: "Fuerza segura a cualquier edad",
    benefit:
      "Progresión biomecánica adaptada a tus rodillas, espalda y nivel actual. Construimos músculo real que protege tus huesos y eleva tu gasto calórico diario.",
    icon: Dumbbell,
  },
];

const RESULTADOS = [
  {
    title: "105 kg perdidos en 12 meses sin cirugías.",
    tag: "Caso Cero · Ricardo Leyva",
    detail:
      "De 200 kg a 95 kg en un año aplicando estrictamente los 4 Pilares: hidratación mineral, sueño reparador, comida real y fuerza progresiva.",
  },
  {
    title: "De caminar con bastón a competir en tarima.",
    tag: "Reconstrucción articular",
    detail:
      "Cuando fortaleces tendones y masa muscular con cargas controladas, recuperas estabilidad y eliminas dolores que parecían permanentes.",
  },
  {
    title: "Fuerza y movilidad después de los 50 y 60.",
    tag: "Longevidad funcional",
    detail:
      "Nuestros alumnos mayores recuperan la capacidad de subir escaleras, cargar peso y moverse con agilidad sin miedo a lesionarse.",
  },
  {
    title: "Cero suplementos milagrosos ni dietas extremas.",
    tag: "100% fisiología real",
    detail:
      "No vendemos polvos mágicos ni castigos de hambre. El resultado proviene de hábitos medibles que puedes sostener toda la vida.",
  },
  {
    title: "El mismo método adaptado a tu cuerpo.",
    tag: "Personalización total",
    detail:
      "Tanto si partes desde cero con sobrepeso como si buscas rendimiento atlético, calibramos la intensidad exactamente a tu punto de partida.",
  },
];

const DIAS = [
  { short: "L", full: "Lunes" },
  { short: "M", full: "Martes" },
  { short: "X", full: "Miércoles" },
  { short: "J", full: "Jueves" },
  { short: "V", full: "Viernes" },
  { short: "S", full: "Sábado" },
  { short: "D", full: "Domingo" },
];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
        },
      }
    );
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
          Entrenar sin descansar o hacer dieta sin hidratación celular solo agota tu cuerpo. Interactúa con cada tarjeta para explorar cómo sincronizamos tu biología:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePilar((prev) => (prev + 1) % PILARES.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = PILARES[activePilar];

  const handleSelect = (index: number) => {
    setActivePilar(index);
    setIsPaused(true);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="feature-card isolated-card flex flex-col justify-between p-7 md:p-8 bg-warm-white border border-border-subtle rounded-[2rem] shadow-bento"
    >
      <div className="mb-5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h3 className="font-sans font-extrabold text-2xl text-charcoal">
            Los 4 Pilares
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream text-charcoal/60 font-bold">
            4 ÁREAS CLAVE
          </span>
        </div>
        <p className="font-sans text-sm text-charcoal/70">
          Selecciona un pilar para ver qué hace en tu cuerpo:
        </p>
      </div>

      {/* 4 Uniform-Height Little Cards (Zero Layout Shift) */}
      <div className="flex flex-col gap-2 mb-4" role="tablist" aria-label="Los 4 Pilares">
        {PILARES.map((pilar, i) => {
          const isActive = activePilar === i;
          const IconComponent = pilar.icon;
          return (
            <button
              key={pilar.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(i)}
              className={`w-full text-left rounded-2xl px-4 py-3 border transition-colors duration-200 flex items-center justify-between gap-3 ${
                isActive
                  ? "bg-moss text-warm-white border-moss shadow-sm"
                  : "bg-white text-charcoal border-border-subtle/80 hover:border-charcoal/40"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  aria-hidden="true"
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? "bg-accent text-white"
                      : "bg-cream text-charcoal/70"
                  }`}
                >
                  <IconComponent size={16} />
                </span>
                <div className="min-w-0">
                  <span
                    className={`block font-mono text-[10px] font-bold tracking-wider ${
                      isActive ? "text-accent" : "text-charcoal/45"
                    }`}
                  >
                    PILAR {pilar.id}
                  </span>
                  <span className="block font-sans text-sm font-bold truncate">
                    {pilar.title}
                  </span>
                </div>
              </div>
              <span
                aria-hidden="true"
                className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                  isActive ? "bg-accent" : "bg-border-subtle"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Dedicated Fixed-Height Inspector Box (Never shifts buttons above) */}
      <div
        role="tabpanel"
        className="mt-auto rounded-2xl bg-white border border-border-subtle p-4 min-h-[138px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
            PILAR {current.id} · {current.tag}
          </span>
        </div>
        <p className="font-sans text-xs md:text-[13px] text-charcoal/85 leading-relaxed font-medium my-auto">
          {current.benefit}
        </p>
      </div>
    </div>
  );
}

function TelemetryTypewriter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % RESULTADOS.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = RESULTADOS[activeIndex];

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="feature-card isolated-card flex flex-col justify-between p-7 md:p-8 bg-obsidian text-warm-white border border-white/10 rounded-[2rem] shadow-obsidian"
    >
      <div className="flex justify-between items-start gap-3 mb-5">
        <div>
          <h3 className="font-sans font-extrabold text-2xl mb-1.5 text-warm-white">
            Evidencia comprobada
          </h3>
          <p className="font-sans text-sm text-warm-white/65">
            Selecciona cada logro para ver cómo se consiguió:
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15 shrink-0">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-warm-white tracking-widest">
            REAL
          </span>
        </div>
      </div>

      {/* 5 Uniform-Height Interactive Achievement Buttons */}
      <div className="flex flex-col gap-2 mb-4" role="tablist" aria-label="Evidencia comprobada">
        {RESULTADOS.map((item, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left rounded-xl px-3.5 py-2.5 border transition-colors duration-200 flex items-center gap-3 ${
                isCurrent
                  ? "bg-white/[0.1] border-accent text-warm-white"
                  : "bg-white/[0.02] border-white/[0.07] text-warm-white/55 hover:text-warm-white/85 hover:border-white/20"
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                  isCurrent ? "bg-accent" : "bg-white/20"
                }`}
              />
              <span className="font-mono text-xs font-semibold leading-snug">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dedicated Fixed-Height Case Explanation Box */}
      <div
        role="tabpanel"
        className="mt-auto rounded-2xl bg-white/[0.05] border border-white/10 p-4 min-h-[138px] flex flex-col justify-between"
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={13} className="text-accent shrink-0" />
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-accent">
            {current.tag}
          </span>
        </div>
        <p className="font-sans text-xs md:text-[13px] text-warm-white/85 leading-relaxed my-auto">
          {current.detail}
        </p>
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const [selectedDays, setSelectedDays] = useState<number[]>([0, 1, 3, 4]);
  const [savedPulse, setSavedPulse] = useState(false);

  const toggleDay = (index: number) => {
    setSelectedDays((prev) => {
      const next = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index].sort((a, b) => a - b);
      return next;
    });
    setSavedPulse(false);
  };

  const count = selectedDays.length;
  const selectedNames =
    count > 0
      ? selectedDays.map((i) => DIAS[i].full).join(", ")
      : "Ningún día seleccionado";

  const getPhaseRecommendation = (days: number) => {
    if (days === 0) {
      return {
        badge: "SELECCIONA TUS DÍAS",
        text: "Marca arriba los días que tienes disponibles para calcular tu estructura semanal ideal.",
      };
    }
    if (days <= 2) {
      return {
        badge: "FASE ADAPTACIÓN · 1–2 DÍAS",
        text: "Ideal si partes de cero o tienes poco tiempo: priorizamos movilidad articular, hidratación y nutrición.",
      };
    }
    if (days <= 4) {
      return {
        badge: "PUNTO ÓPTIMO RECLUTA · 3–4 DÍAS",
        text: "El equilibrio más efectivo para perder grasa, construir fuerza muscular y permitir descanso nervioso.",
      };
    }
    return {
      badge: "PROTOCOLO AVANZADO · 5+ DÍAS",
      text: "Combinamos días de fuerza progresiva con sesiones de recuperación activa, costal búlgaro y movilidad.",
    };
  };

  const phase = getPhaseRecommendation(count);

  const handleSave = () => {
    setSavedPulse(true);
  };

  const whatsappScheduleUrl = `https://wa.me/525545520392?text=${encodeURIComponent(
    `Hola Delta, simulé mi semana en la web: puedo entrenar ${count} días por semana (${selectedNames}). ¿Qué programa me recomiendas?`
  )}`;

  return (
    <div className="feature-card isolated-card flex flex-col justify-between p-7 md:p-8 bg-warm-white border border-border-subtle rounded-[2rem] shadow-bento">
      <div className="mb-5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h3 className="font-sans font-extrabold text-2xl text-charcoal">
            Constancia medida
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream text-charcoal/60 font-bold">
            SIMULADOR
          </span>
        </div>
        <p className="font-sans text-sm text-charcoal/70">
          Elige qué días puedes entrenar y descubre cómo adaptamos tu plan:
        </p>
      </div>

      <div className="bg-white border border-border-subtle rounded-2xl p-5 shadow-sm flex flex-col gap-4 mb-4">
        {/* Weekly Adherence Meter (GPU scaleX transform) */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between font-mono text-[11px] font-bold text-charcoal/60">
            <span>DISPONIBILIDAD SEMANAL</span>
            <span className="text-accent">{count} / 7 DÍAS</span>
          </div>
          <div className="h-2 w-full bg-cream rounded-full overflow-hidden">
            <div
              className="h-full w-full bg-accent rounded-full origin-left transition-transform duration-300"
              style={{ transform: `scaleX(${count / 7})` }}
            />
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-7 gap-1.5" role="group" aria-label="Días de la semana">
          {DIAS.map((d, i) => {
            const isSelected = selectedDays.includes(i);
            return (
              <button
                key={d.short}
                type="button"
                aria-pressed={isSelected}
                aria-label={d.full}
                onClick={() => toggleDay(i)}
                className={`aspect-square flex flex-col items-center justify-center rounded-xl font-mono text-xs font-bold border transition-colors duration-150 ${
                  isSelected
                    ? "bg-accent border-accent text-white shadow-sm"
                    : "bg-warm-white border-border-subtle text-charcoal hover:border-charcoal/40"
                }`}
              >
                <span>{d.short}</span>
              </button>
            );
          })}
        </div>

        {/* Action / WhatsApp Sync */}
        {!savedPulse ? (
          <button
            type="button"
            disabled={count === 0}
            onClick={handleSave}
            className="w-full py-3 rounded-xl font-bold font-sans text-xs sm:text-sm transition-colors duration-200 flex items-center justify-center gap-2 bg-moss text-warm-white hover:bg-charcoal disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <CalendarCheck aria-hidden="true" size={16} />
            <span>Confirmar {count} días por semana</span>
          </button>
        ) : (
          <a
            href={whatsappScheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl font-bold font-sans text-xs sm:text-sm transition-colors duration-200 flex items-center justify-center gap-2 bg-accent text-white hover:bg-[#A94626]"
          >
            <Check aria-hidden="true" size={16} />
            <span>Enviar mis {count} días a Delta en WhatsApp</span>
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        )}
      </div>

      {/* Dedicated Fixed-Height Dynamic Recommendation Box */}
      <div className="mt-auto rounded-2xl bg-white border border-border-subtle p-4 min-h-[138px] flex flex-col justify-between">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
            {phase.badge}
          </span>
        </div>
        <p className="font-sans text-xs md:text-[13px] text-charcoal/85 leading-relaxed font-medium my-auto">
          {phase.text}
        </p>
        <div className="font-mono text-[10px] text-charcoal/50 truncate mt-2 pt-2 border-t border-border-subtle/60">
          Días: {selectedNames}
        </div>
      </div>
    </div>
  );
}
