"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";

const COSTALES = [
  {
    id: "10kg",
    weight: "10 kg",
    level: "Intermedio Ligero",
    audience: "Mujeres 65–80 kg / Hombres 60–75 kg",
    oldPrice: "$4,149 MXN",
    newPrice: "$3,149 MXN",
    tag: "Construye resistencia funcional",
    popular: false,
  },
  {
    id: "12kg",
    weight: "12 kg",
    level: "Intermedio",
    audience: "Hombres 75–90 kg",
    oldPrice: "$4,349 MXN",
    newPrice: "$3,349 MXN",
    tag: "Entrenamiento completo y versátil",
    popular: true,
  },
  {
    id: "15kg",
    weight: "15 kg",
    level: "Avanzado",
    audience: "Hombres 90–110 kg / Atletas",
    oldPrice: "$4,849 MXN",
    newPrice: "$3,849 MXN",
    tag: "Potencia y rendimiento serio",
    popular: false,
  },
  {
    id: "20kg",
    weight: "20 kg",
    level: "Élite",
    audience: "Atletas profesionales / Luchadores",
    oldPrice: "$5,349 MXN",
    newPrice: "$4,349 MXN",
    tag: "Entrena como campeón",
    popular: false,
  },
];

export default function Pricing() {
  const [selectedCostalId, setSelectedCostalId] = useState("12kg");
  const sectionRef = useRef<HTMLElement>(null);

  const activeIndex = COSTALES.findIndex((c) => c.id === selectedCostalId);
  const activeCostal = COSTALES[activeIndex >= 0 ? activeIndex : 1];

  useGSAP(() => {
    gsap.fromTo(
      ".bento-tier",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto bg-cream"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-3">
          PROGRAMAS Y ENTRENAMIENTO
        </span>
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-tight mb-4">
          Elige cómo quieres empezar hoy
        </h2>
        <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
          Desde nuestra comunidad gratuita hasta acompañamiento 1:1. Todos los planes son gestionados de inmediato por <strong className="text-charcoal font-bold">Delta</strong>, nuestro asistente virtual en WhatsApp.
        </p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto mb-28">
        {/* Tier 1 - Comunidad */}
        <div className="bento-tier isolated-card md:col-span-6 bg-warm-white border border-border-subtle rounded-[2rem] p-8 md:p-10 shadow-bento flex flex-col justify-between transition-colors duration-200">
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-charcoal/55 bg-cream px-3 py-1 rounded-full font-bold mb-4">
              Paso inicial sin costo
            </span>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-charcoal mb-2">
              Comunidad Recluta
            </h3>
            <div className="font-mono text-xl text-accent font-bold mb-5">
              Acceso Gratuito
            </div>
            <p className="text-sm md:text-base text-charcoal/80 font-medium mb-6 leading-relaxed">
              Únete al grupo oficial de WhatsApp. Recibe consejos prácticos cada semana, respuestas de Ricardo y acceso anticipado a cupos y retos.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm text-charcoal/75 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Tips semanales sobre los 4 Pilares</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Prioridad en apertura de programas</span>
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/525545520392?text=Hola%20Delta,%20quiero%20unirme%20gratis%20a%20la%20Comunidad%20Recluta%20en%20WhatsApp."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2 bg-white border border-border-subtle text-charcoal font-bold py-3.5 px-6 rounded-full hover:bg-charcoal hover:text-warm-white hover:border-charcoal transition-colors duration-200"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            <span>Unirme gratis con Delta</span>
            <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>

        {/* Tier 2 - Guías */}
        <div className="bento-tier isolated-card md:col-span-6 bg-warm-white border border-border-subtle rounded-[2rem] p-8 md:p-10 shadow-bento flex flex-col justify-between transition-colors duration-200">
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-charcoal/55 bg-cream px-3 py-1 rounded-full font-bold mb-4">
              A tu propio ritmo
            </span>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-charcoal mb-2">
              Guías y eBooks Prácticos
            </h3>
            <div className="font-mono text-xl text-accent font-bold mb-5">
              Desde $149 MXN
            </div>
            <p className="text-sm md:text-base text-charcoal/80 font-medium mb-6 leading-relaxed">
              El método de Ricardo paso a paso para aplicar por tu cuenta: manual de Los 4 Pilares, fuerza segura para mayores de 50 y rutinas con costal búlgaro.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm text-charcoal/75 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Descarga digital inmediata</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Protocolos claros sin tecnicismos</span>
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/525545520392?text=Hola%20Delta,%20me%20interesa%20conocer%20las%20Gu%C3%ADas%20y%20eBooks%20disponibles%20de%20Recluta%20M%C3%A9xico."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2 bg-white border border-border-subtle text-charcoal font-bold py-3.5 px-6 rounded-full hover:bg-charcoal hover:text-warm-white hover:border-charcoal transition-colors duration-200"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            <span>Solicitar catálogo a Delta</span>
            <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>

        {/* Tier 3 - Programa Grupal (FEATURED CENTERPIECE) */}
        <div className="bento-tier md:col-span-12 bg-moss-deep isolate-blend rounded-[2.5rem] p-8 sm:p-12 md:p-14 shadow-obsidian ring-2 ring-accent relative z-20 transition-colors duration-200 my-2">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
            <Image
              src="/images/featured_tech_texture.png"
              alt="Featured Texture"
              fill
              className="object-cover opacity-20"
            />
          </div>

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-widest py-1.5 px-5 rounded-full font-mono z-30 shadow-md">
            El más elegido · Resultados en 8 semanas
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-center lg:text-left">
              <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-off-white mb-2">
                Programa Los 4 Pilares
              </h3>
              <div className="font-mono text-xl md:text-2xl text-accent font-bold mb-5">
                $1,800–$2,500 MXN · 8 semanas
              </div>
              <p className="text-base text-off-white/85 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                El programa grupal online donde instalas los 4 Pilares en tu vida real con la guía directa de Ricardo. Ideal para perder grasa, recuperar movilidad y crear disciplina definitiva.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto lg:mx-0 text-sm text-off-white/90 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-accent shrink-0" />
                  <span>2 sesiones en vivo por semana</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-accent shrink-0" />
                  <span>Plan práctico de los 4 Pilares</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-accent shrink-0" />
                  <span>Comunidad privada de seguimiento</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-accent shrink-0" />
                  <span>Adaptable a cualquier edad o nivel</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-3">
              <a
                href="https://wa.me/525545520392?text=Hola%20Delta,%20quiero%20inscribirme%20al%20Programa%20Los%204%20Pilares%20de%208%20semanas."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-shimmer w-full text-center group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 font-bold text-white shadow-accent-glow transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle size={19} />
                <span>Inscribirme con Delta</span>
                <ArrowUpRight aria-hidden="true" className="w-5 h-5" />
              </a>
              <span className="font-mono text-[11px] text-center text-off-white/55">
                Respuesta inmediata en WhatsApp (+52 55 4552 0392)
              </span>
            </div>
          </div>
        </div>

        {/* Tier 4 - Presencial */}
        <div className="bento-tier md:col-span-6 bg-warm-white border border-border-subtle rounded-[2rem] p-8 md:p-10 shadow-bento flex flex-col justify-between transition-colors duration-200 relative mt-4 md:mt-0">
          <div className="absolute -top-3.5 left-8 bg-accent text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full font-mono whitespace-nowrap z-20 shadow-sm">
            Cupo limitado · Lista de espera
          </div>
          <div>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-charcoal mb-2 mt-2">
              Entrenamiento Presencial
            </h3>
            <div className="font-mono text-xl text-charcoal font-bold mb-5">
              $10,000–$12,000 MXN / mes
            </div>
            <p className="text-sm md:text-base text-charcoal/80 font-medium mb-6 leading-relaxed">
              Entrena en persona con Ricardo en grupos reducidos de 4 a 6 integrantes. Corrección biomecánica en tiempo real y máxima exigencia segura.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm text-charcoal/75 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Grupos exclusivos de 4–6 personas</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Supervisión técnica presencial</span>
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/525545520392?text=Hola%20Delta,%20quiero%20registrarme%20en%20la%20lista%20de%20espera%20para%20el%20Entrenamiento%20Presencial."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2 bg-white border border-border-subtle text-charcoal font-bold py-3.5 px-6 rounded-full hover:bg-charcoal hover:text-warm-white hover:border-charcoal transition-colors duration-200"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            <span>Anotarme en lista con Delta</span>
            <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>

        {/* Tier 5 - VIP Intensivo */}
        <div className="bento-tier isolated-card md:col-span-6 bg-obsidian text-warm-white border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-obsidian flex flex-col justify-between transition-colors duration-200">
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-accent bg-accent/15 border border-accent/30 px-3 py-1 rounded-full font-bold mb-4">
              Acompañamiento 1:1 Total
            </span>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-warm-white mb-2">
              Programa VIP Intensivo
            </h3>
            <div className="font-mono text-xl text-accent font-bold mb-5">
              Cotización personalizada · 3 meses
            </div>
            <p className="text-sm md:text-base text-warm-white/75 font-medium mb-6 leading-relaxed">
              Para quienes buscan una transformación radical con atención 1 a 1. Plan integral a medida, sesiones individuales, monitoreo semanal y asesoría avanzada.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm text-warm-white/80 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Sesiones 1:1 y ajustes cada semana</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>Protocolo clínico y deportivo completo</span>
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/525545520392?text=Hola%20Delta,%20me%20interesa%20solicitar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%20del%20Programa%20VIP%20Intensivo%201:1."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2 bg-warm-white text-charcoal font-bold py-3.5 px-6 rounded-full hover:bg-accent hover:text-white transition-colors duration-200"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            <span>Cotizar plan VIP con Delta</span>
            <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Product Block: Costales Búlgaros */}
      <div className="mt-20 w-full">
        <div className="bg-warm-white border border-border-subtle rounded-[3rem] p-8 sm:p-12 md:p-16 text-center shadow-bento max-w-5xl mx-auto">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-3">
            EQUIPAMIENTO OFICIAL RECLUTA
          </span>
          <h4 className="font-sans font-extrabold text-3xl md:text-5xl text-charcoal mb-4 tracking-tight">
            El mejor costal búlgaro de México.
          </h4>
          <p className="font-sans text-charcoal/70 mb-12 max-w-2xl mx-auto text-base md:text-lg">
            La herramienta número uno para construir fuerza funcional, agarre y movilidad articular sin lesionar tu espalda. Diseñados por Ricardo y segmentados por tu peso corporal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream border border-border-subtle rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-left">
            {/* Left side: Clean Studio Product Card */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square max-w-[280px] mx-auto bg-white rounded-3xl border border-border-subtle/80 shadow-sm p-6 flex items-center justify-center">
                <Image
                  src="/images/costal.jpg"
                  alt="Costal Búlgaro Premium"
                  fill
                  className="object-contain p-4 mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right side: Interactive Selector */}
            <div className="md:col-span-7 w-full flex flex-col items-center md:items-start">
              {/* Weight Toggle Pills (No overflow-x clipping so Top badge is always 100% visible) */}
              <div
                role="tablist"
                aria-label="Seleccionar peso de Costal Búlgaro"
                className="flex flex-wrap justify-center md:justify-start gap-2 bg-off-white p-2 rounded-3xl sm:rounded-full mb-10 border border-border-subtle w-full sm:w-fit mx-auto md:mx-0"
              >
                {COSTALES.map((item) => {
                  const isActive = selectedCostalId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCostalId(item.id)}
                      className={`relative px-4 sm:px-6 py-2.5 rounded-full font-mono text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                        isActive
                          ? "bg-obsidian text-warm-white font-bold shadow-sm"
                          : "text-charcoal/65 hover:text-charcoal font-medium"
                      }`}
                    >
                      {item.weight}
                      {item.popular && (
                        <span className="absolute -top-2.5 -right-1.5 bg-accent text-white text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest">
                          Top
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Content View */}
              <div className="w-full flex flex-col items-center md:items-start">
                <div className="font-sans font-extrabold text-2xl md:text-3xl text-charcoal mb-1.5 text-center md:text-left">
                  {activeCostal.weight} — {activeCostal.level}
                </div>
                <div className="text-sm md:text-base font-medium text-charcoal/65 mb-6 max-w-md text-center md:text-left">
                  Ideal para: {activeCostal.audience}
                </div>

                <div className="bg-white border border-border-subtle p-6 md:p-7 rounded-3xl max-w-md w-full mb-7 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-sm text-charcoal/40 line-through mb-0.5">
                      {activeCostal.oldPrice}
                    </div>
                    <div className="font-mono text-3xl md:text-4xl text-accent font-bold">
                      {activeCostal.newPrice}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent bg-accent/10 py-2 px-4 rounded-full inline-block text-center font-bold">
                    {activeCostal.tag}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <a
                    href="https://tally.so/r/3xk7OE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-shimmer group flex-1 inline-flex items-center justify-center gap-2 text-center bg-accent text-white font-bold py-4 px-6 rounded-full hover:bg-[#A94626] transition-colors duration-200 text-base shadow-accent-glow"
                  >
                    <span>Comprar ahora</span>
                    <ArrowUpRight aria-hidden="true" className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/525545520392?text=Hola%20Delta,%20me%20interesa%20el%20Costal%20B%C3%BAlgaro%20de%20${encodeURIComponent(
                      activeCostal.weight
                    )}%20(${encodeURIComponent(activeCostal.newPrice)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-center bg-white border border-border-subtle text-charcoal hover:bg-charcoal hover:text-white font-bold py-4 px-5 rounded-full transition-colors duration-200 text-sm"
                  >
                    <MessageCircle size={17} className="text-[#25D366]" />
                    <span>Pedir con Delta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
