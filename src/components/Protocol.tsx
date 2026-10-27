"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function Protocol() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".protocol-step-card",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    // GPU-composited SVG emphasis animations triggered once on scroll
    gsap.fromTo(
      ".radar-poly",
      { scale: 0.15, opacity: 0, transformOrigin: "50% 50%" },
      {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
        },
      }
    );

    gsap.fromTo(
      ".pillar-bar",
      { scaleY: 0, transformOrigin: "50% 100%" },
      {
        scaleY: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
        },
      }
    );

    gsap.fromTo(
      ".evo-node",
      { scale: 0, opacity: 0, transformOrigin: "50% 50%" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="proceso"
      className="bg-obsidian py-28 md:py-36 px-6 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-3">
            PROCESO CLARO DE 3 PASOS
          </span>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl text-warm-white tracking-tight mb-4">
            Cómo transformamos tu cuerpo paso a paso
          </h2>
          <p className="font-sans text-base md:text-lg text-warm-white/70 leading-relaxed">
            Sin improvisación ni rutinas genéricas. Así trabajamos contigo desde el primer contacto hasta consolidar tus resultados:
          </p>
        </div>

        {/* 3-Step Bento Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="protocol-step-card isolated-card bg-[#141916] rounded-[2.25rem] border border-white/10 hover:border-white/25 p-8 md:p-10 flex flex-col justify-between shadow-obsidian transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-accent font-bold tracking-widest px-3.5 py-1.5 rounded-xl bg-accent/10 border border-accent/25">
                  PASO 01
                </span>
                <span className="font-mono text-xs text-warm-white/45 uppercase">
                  Con Delta · WhatsApp
                </span>
              </div>
              <h3 className="font-sans text-2xl md:text-3xl text-warm-white font-extrabold mb-4 tracking-tight">
                Diagnóstico inicial
              </h3>
              <p className="font-sans text-base text-warm-white/75 leading-relaxed mb-8">
                Evaluamos tu punto de partida real: edad, historial de lesiones, hábitos actuales y objetivo concreto. Todo parte de la verdad de tu cuerpo para recomendarte el nivel exacto.
              </p>
            </div>

            <div className="relative w-full aspect-square max-w-[260px] mx-auto bg-black/40 rounded-2xl border border-white/10 flex justify-center items-center p-4">
              <DiagnosticRadarAnim />
            </div>
          </div>

          {/* Card 2 */}
          <div className="protocol-step-card isolated-card bg-[#141916] rounded-[2.25rem] border border-white/10 hover:border-white/25 p-8 md:p-10 flex flex-col justify-between shadow-obsidian transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-accent font-bold tracking-widest px-3.5 py-1.5 rounded-xl bg-accent/10 border border-accent/25">
                  PASO 02
                </span>
                <span className="font-mono text-xs text-warm-white/45 uppercase">
                  Plan personalizado
                </span>
              </div>
              <h3 className="font-sans text-2xl md:text-3xl text-warm-white font-extrabold mb-4 tracking-tight">
                Tu programa a medida
              </h3>
              <p className="font-sans text-base text-warm-white/75 leading-relaxed mb-8">
                Calibramos los 4 Pilares (hidratación, descanso, alimentación y fuerza) a tu rutina diaria. Un sistema diseñado para funcionar con tu vida real, no en tu contra.
              </p>
            </div>

            <div className="relative w-full aspect-square max-w-[260px] mx-auto bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center p-4">
              <PillarCalibrationAnim />
            </div>
          </div>

          {/* Card 3 */}
          <div className="protocol-step-card isolated-card bg-[#141916] rounded-[2.25rem] border border-accent/35 hover:border-accent/60 p-8 md:p-10 flex flex-col justify-between shadow-obsidian transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-accent font-bold tracking-widest px-3.5 py-1.5 rounded-xl bg-accent/10 border border-accent/25">
                  PASO 03
                </span>
                <span className="font-mono text-xs text-accent uppercase font-bold">
                  Resultados duraderos
                </span>
              </div>
              <h3 className="font-sans text-2xl md:text-3xl text-warm-white font-extrabold mb-4 tracking-tight">
                Seguimiento y evolución
              </h3>
              <p className="font-sans text-base text-warm-white/75 leading-relaxed mb-8">
                No te dejamos solo con un PDF. Monitoreamos tu progreso, ajustamos cargas y resolvemos dudas semana a semana. El objetivo no es solo que llegues, sino que nunca retrocedas.
              </p>
            </div>

            <div className="relative w-full aspect-square max-w-[260px] mx-auto bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center p-4">
              <EvolutionGraphAnim />
            </div>
          </div>
        </div>

        {/* Bottom CTA to Start Step 01 */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/525545520392?text=Hola%20Delta,%20quiero%20iniciar%20el%20Paso%2001%20(Diagn%C3%B3stico%20Inicial)%20para%20empezar%20mi%20transformaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shimmer group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-accent-glow transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle size={20} />
            <span>Iniciar Paso 01 con Delta en WhatsApp</span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// CLEAN, 60FPS HARDWARE-FRIENDLY GRAPHICS
// ----------------------------------------------------

function DiagnosticRadarAnim() {
  const radarAngles = [0, 72, 144, 216, 288].map(
    (deg) => ((deg - 90) * Math.PI) / 180
  );

  // Clean static biometric polygon points (zero per-frame DOM string allocation)
  const sampleVals = [74, 68, 82, 76, 70];
  const polygonPoints = sampleVals
    .map((val, i) => {
      const x = 100 + val * 0.82 * Math.cos(radarAngles[i]);
      const y = 100 + val * 0.82 * Math.sin(radarAngles[i]);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 200 200" className="w-[88%] h-[88%] mx-auto">
      {/* Background Rings */}
      {[25, 50, 75, 100].map((r) => (
        <polygon
          key={r}
          points={Array.from({ length: 5 })
            .map(
              (_, i) =>
                `${(100 + r * 0.82 * Math.cos(radarAngles[i])).toFixed(1)},${(
                  100 +
                  r * 0.82 * Math.sin(radarAngles[i])
                ).toFixed(1)}`
            )
            .join(" ")}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}

      {/* Web Axes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="100"
          x2={100 + 82 * Math.cos(radarAngles[i])}
          y2={100 + 82 * Math.sin(radarAngles[i])}
          stroke="#ffffff"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      ))}

      {/* Metric Labels */}
      <text
        x="100"
        y="10"
        fill="#FFF"
        opacity="0.65"
        fontSize="6.5"
        textAnchor="middle"
        className="font-mono font-semibold"
      >
        FUERZA
      </text>
      <text
        x="182"
        y="72"
        fill="#FFF"
        opacity="0.65"
        fontSize="6.5"
        textAnchor="middle"
        className="font-mono font-semibold"
      >
        RESISTENCIA
      </text>
      <text
        x="156"
        y="188"
        fill="#FFF"
        opacity="0.65"
        fontSize="6.5"
        textAnchor="middle"
        className="font-mono font-semibold"
      >
        HIDRATACIÓN
      </text>
      <text
        x="44"
        y="188"
        fill="#FFF"
        opacity="0.65"
        fontSize="6.5"
        textAnchor="middle"
        className="font-mono font-semibold"
      >
        COMBUSTIBLE
      </text>
      <text
        x="18"
        y="72"
        fill="#FFF"
        opacity="0.65"
        fontSize="6.5"
        textAnchor="middle"
        className="font-mono font-semibold"
      >
        DESCANSO
      </text>

      {/* Data Polygon */}
      <polygon
        className="radar-poly"
        points={polygonPoints}
        fill="url(#radarGradient)"
        stroke="#CC5833"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <circle cx="100" cy="100" r="2.5" fill="#CC5833" />

      <defs>
        <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CC5833" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#CC5833" stopOpacity="0.12" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function PillarCalibrationAnim() {
  const heights = [62, 68, 65, 72];

  return (
    <svg viewBox="0 0 200 105" className="w-[88%] h-auto">
      <line
        x1="24"
        y1="8"
        x2="176"
        y2="8"
        stroke="#ffffff"
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeOpacity="0.25"
      />

      <line
        x1="20"
        y1="80"
        x2="180"
        y2="80"
        stroke="#CC5833"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <text
        x="100"
        y="96"
        fill="#FFF"
        opacity="0.6"
        fontSize="7"
        textAnchor="middle"
        className="font-mono tracking-[0.2em] uppercase font-bold"
      >
        LOS 4 PILARES
      </text>

      {heights.map((h, i) => (
        <g key={i}>
          <rect
            x={33 + i * 38}
            y={8}
            width={24}
            height={72}
            fill="#ffffff"
            fillOpacity="0.06"
            rx="5"
          />
          <rect
            className="pillar-bar"
            x={33 + i * 38}
            y={80 - h}
            width={24}
            height={h}
            fill="#CC5833"
            rx="5"
          />
        </g>
      ))}
    </svg>
  );
}

function EvolutionGraphAnim() {
  const pathD =
    "M 10 130 L 60 110 L 110 115 L 160 70 L 210 55 L 250 65 L 290 20";
  const dataPoints = [
    { cx: 60, cy: 110, label: "ADAPTACIÓN" },
    { cx: 110, cy: 115, label: "AJUSTE" },
    { cx: 160, cy: 70, label: "+ CARGA" },
    { cx: 210, cy: 55, label: "RECUPERACIÓN" },
    { cx: 250, cy: 65, label: "MONITOREO" },
    { cx: 290, cy: 20, label: "PR EXCEDIDO" },
  ];

  return (
    <svg viewBox="0 0 300 150" className="w-[92%] h-auto overflow-visible">
      <path
        d="M0,30 L300,30 M0,60 L300,60 M0,90 L300,90 M0,120 L300,120"
        stroke="#ffffff"
        strokeOpacity="0.08"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <path
        d={pathD}
        fill="none"
        stroke="#CC5833"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.16"
      />

      <path
        d={pathD}
        fill="none"
        stroke="#CC5833"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {dataPoints.map((node, i) => (
        <g key={i} className="evo-node">
          <circle
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="#141916"
            stroke="#CC5833"
            strokeWidth="2.5"
          />
          <text
            x={node.cx}
            y={node.cy - 11}
            fill="#FFF"
            fontSize="6.5"
            className="font-mono tracking-widest font-semibold"
            textAnchor="middle"
            opacity="0.85"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
