"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Quote, MessageCircle, ArrowUpRight } from "lucide-react";

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(() => {
    const counters = countersRef.current;

    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        onUpdate: () => {
          counter.textContent = Math.round(obj.val).toString();
        },
      });
    });

    gsap.from(".proof-card", {
      y: 36,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".proof-grid",
        start: "top 82%",
      },
    });
  }, { scope: sectionRef });

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="resultados"
      className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto bg-cream"
    >
      {/* Bento Stats Bar */}
      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <div className="isolated-card bg-warm-white border border-border-subtle rounded-[2rem] p-8 md:p-10 text-center shadow-bento transition-transform duration-300 hover:-translate-y-1">
          <div className="font-drama text-7xl md:text-8xl text-accent mb-3 leading-none font-bold">
            -<span ref={addToRefs} data-target="105">
              0
            </span>{" "}
            <span className="text-4xl md:text-5xl">kg</span>
          </div>
          <div className="font-sans font-bold text-charcoal/80 uppercase tracking-wider text-xs">
            Perdidos en 1 año sin cirugías
          </div>
        </div>

        <div className="isolated-card bg-warm-white border border-border-subtle rounded-[2rem] p-8 md:p-10 text-center shadow-bento transition-transform duration-300 hover:-translate-y-1">
          <div className="font-drama text-7xl md:text-8xl text-accent mb-3 leading-none font-bold">
            +<span ref={addToRefs} data-target="200">
              0
            </span>
          </div>
          <div className="font-sans font-bold text-charcoal/80 uppercase tracking-wider text-xs">
            Meses de experiencia comprobada
          </div>
        </div>

        <div className="isolated-card bg-warm-white border border-border-subtle rounded-[2rem] p-8 md:p-10 text-center shadow-bento transition-transform duration-300 hover:-translate-y-1">
          <div className="font-drama text-7xl md:text-8xl text-accent mb-3 leading-none font-bold">
            <span ref={addToRefs} data-target="4">
              0
            </span>
          </div>
          <div className="font-sans font-bold text-charcoal/80 uppercase tracking-wider text-xs">
            Pilares integrados en un solo sistema
          </div>
        </div>
      </div>

      {/* Bloque antes/después — Dossier Clínico */}
      <div className="w-full bg-moss-deep py-20 md:py-24 px-6 sm:px-10 md:px-16 rounded-[3rem] my-20 border border-white/10 shadow-obsidian relative overflow-hidden">
        <div className="relative z-10 text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-4">
            CASO CERO · RICARDO LEYVA
          </p>
          <h2 className="text-center text-off-white font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-tight mb-4">
            No te pido hacer nada que yo mismo no haya vivido primero.
          </h2>
          <p className="font-sans text-base text-off-white/70 max-w-xl mx-auto">
            De 200 kg y movilidad reducida a competir en fisicoculturismo aplicando exactamente los mismos 4 Pilares que hoy enseñamos en Recluta México.
          </p>
        </div>

        {/* Dossier Image Grid: Full natural clarity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto relative z-10">
          {/* ANTES */}
          <div className="isolated-card rounded-[2rem] bg-obsidian aspect-[4/5] flex flex-col justify-between p-6 md:p-8 border border-white/15 relative overflow-hidden shadow-xl">
            <Image
              src="/images/antes.jpeg"
              alt="Ricardo Antes — 200 kg"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-dossier-gradient" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/90 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 font-bold">
                PUNTO DE PARTIDA · 200 KG
              </span>
            </div>

            <div className="relative z-10">
              <span className="font-mono text-sm md:text-base font-bold uppercase text-accent tracking-[0.2em]">
                01 // El Origen
              </span>
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="isolated-card rounded-[2rem] bg-obsidian aspect-[4/5] flex flex-col justify-between p-6 md:p-8 border border-accent/50 relative overflow-hidden shadow-xl">
            <Image
              src="/images/despues.jpg"
              alt="Ricardo Hoy — Fisicoculturista"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-dossier-gradient" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white bg-accent px-3.5 py-1.5 rounded-full font-bold">
                RESULTADO · -105 KG
              </span>
            </div>

            <div className="relative z-10">
              <span className="font-mono text-sm md:text-base font-bold uppercase text-off-white tracking-[0.2em]">
                02 // La Reconstrucción
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-off-white/45 text-xs mt-12 font-mono relative z-10 tracking-[0.22em] uppercase">
          Evidencia Fotográfica Real · Sin Cirugías · Hábitos Permanentes
        </p>
      </div>

      {/* Testimonials */}
      <div className="text-center mb-14">
        <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-3">
          HISTORIAS DE ÉXITO
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
          Personas reales que recuperaron su{" "}
          <span className="font-drama text-accent text-4xl md:text-6xl font-normal">
            fuerza y libertad
          </span>
        </h2>
      </div>

      <div className="proof-grid flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 snap-x snap-mandatory hide-scrollbars">
        {/* Testimonial 1 */}
        <div className="proof-card isolated-card snap-center shrink-0 w-[85vw] md:w-auto bg-warm-white rounded-[2rem] p-8 md:p-9 border-l-4 border-accent shadow-bento border-t border-r border-b border-border-subtle flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
          <div>
            <Quote className="text-accent/25 w-9 h-9 mb-5" />
            <p className="font-sans text-lg text-charcoal font-medium mb-8 leading-relaxed">
              &quot;Llegué sin poder subir escaleras. Hoy cargo costales y
              entreno tres veces por semana. Lo que cambia no es solo el cuerpo
              — cambia la manera en que te ves a ti mismo.&quot;
            </p>
          </div>
          <div className="pt-5 border-t border-border-subtle/60">
            <div className="font-sans font-bold text-charcoal">
              María G., 63 años
            </div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mt-1 font-bold">
              Movilidad y fuerza recuperada
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="proof-card isolated-card snap-center shrink-0 w-[85vw] md:w-auto bg-warm-white rounded-[2rem] p-8 md:p-9 border-l-4 border-accent shadow-bento border-t border-r border-b border-border-subtle flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
          <div>
            <Quote className="text-accent/25 w-9 h-9 mb-5" />
            <p className="font-sans text-lg text-charcoal font-medium mb-8 leading-relaxed">
              &quot;Pensé que a mi edad ya no había nada que hacer. Ricardo me
              demostró que estaba equivocado. El plan fue real, el seguimiento
              fue constante y los resultados llegaron.&quot;
            </p>
          </div>
          <div className="pt-5 border-t border-border-subtle/60">
            <div className="font-sans font-bold text-charcoal">
              Roberto M., 57 años
            </div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mt-1 font-bold">
              Fuerza y autonomía después de los 55
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="proof-card isolated-card snap-center shrink-0 w-[85vw] md:w-auto bg-warm-white rounded-[2rem] p-8 md:p-9 border-l-4 border-accent shadow-bento border-t border-r border-b border-border-subtle flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
          <div>
            <Quote className="text-accent/25 w-9 h-9 mb-5" />
            <p className="font-sans text-lg text-charcoal font-medium mb-8 leading-relaxed">
              &quot;No es un gym. Es un proceso. Cada semana entiendo mejor mi
              cuerpo y cada semana avanzo. Es lo más honesto que he encontrado
              en salud y entrenamiento.&quot;
            </p>
          </div>
          <div className="pt-5 border-t border-border-subtle/60">
            <div className="font-sans font-bold text-charcoal">
              Ana L., 52 años
            </div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mt-1 font-bold">
              Hábitos sostenibles de por vida
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Social Proof CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://wa.me/525545520392?text=Hola%20Delta,%20vi%20los%20casos%20de%20%C3%A9xito%20en%20la%20web%20y%20quiero%20empezar%20mi%20propia%20transformaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-shimmer group inline-flex items-center justify-center gap-3 rounded-full bg-obsidian hover:bg-accent text-white font-bold px-8 py-4 text-base transition-colors duration-200 shadow-bento"
        >
          <MessageCircle size={19} className="text-[#25D366]" />
          <span>Empezar mi transformación con Delta</span>
          <ArrowUpRight
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
