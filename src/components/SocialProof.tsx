"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function SocialProof() {
  const statsRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(() => {
    const counters = countersRef.current;
    
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        snap: { innerHTML: 1 },
        onUpdate: function () {
          counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
        },
      });
    });
  }, { scope: statsRef });

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  return (
    <section id="resultados" className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-cream">
      
      {/* Stats Bar */}
      <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 divide-y md:divide-y-0 md:divide-x divide-border-subtle/50">
        <div className="text-center pt-8 md:pt-0">
          <div className="font-drama text-6xl md:text-7xl text-accent mb-2">
            <span ref={addToRefs} data-target="105">0</span>
          </div>
          <div className="font-sans font-medium text-charcoal/70 uppercase tracking-widest text-sm">
            kg de transformación documentada
          </div>
        </div>
        <div className="text-center pt-8 md:pt-0">
          <div className="font-drama text-6xl md:text-7xl text-accent mb-2">
            +<span ref={addToRefs} data-target="200">0</span>
          </div>
          <div className="font-sans font-medium text-charcoal/70 uppercase tracking-widest text-sm">
            meses de trayectoria activa
          </div>
        </div>
        <div className="text-center pt-8 md:pt-0">
          <div className="font-drama text-6xl md:text-7xl text-accent mb-2">
            <span ref={addToRefs} data-target="4">0</span>
          </div>
          <div className="font-sans font-medium text-charcoal/70 uppercase tracking-widest text-sm">
            pilares. Un solo sistema.
          </div>
        </div>
      </div>

      {/* Bloque antes/después — Dossier Clínico */}
      <section className="w-full bg-[#1E2D25] py-20 px-8 rounded-[3rem] my-24 border border-white/5 shadow-2xl relative overflow-hidden">
        <p className="font-mono text-xs uppercase tracking-widest text-[#CC5833] text-center mb-4">
          TRANSFORMACIÓN DOCUMENTADA
        </p>
        <h2 className="text-center text-[#E8E4DA] font-sans text-2xl md:text-3xl font-bold mb-16 max-w-2xl mx-auto">
          La transformación anatómica que ves aquí es el<br className="hidden md:block"/> producto exacto de esta metodología.
        </h2>
        {/* Dossier Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto relative z-10">
          {/* ANTES */}
          <div className="rounded-[2rem] bg-[#16211B] aspect-square flex flex-col justify-end p-6 border border-white/10 relative overflow-hidden group shadow-lg">
            <Image src="/images/antes.jpeg" alt="Ricardo Antes" fill className="object-cover object-top grayscale contrast-125 mix-blend-luminosity opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16211B] via-[#16211B]/20 to-transparent opacity-90" />
            <span className="font-mono text-[10px] uppercase text-white/50 mb-1 relative z-10 hidden md:block">ARCHIVO: RM-01A</span>
            <span className="font-mono text-sm uppercase text-[#CC5833] tracking-widest relative z-10">01 // Origen</span>
          </div>
          {/* DESPUÉS */}
          <div className="rounded-[2rem] bg-[#16211B] aspect-square flex flex-col justify-end p-6 border border-white/10 relative overflow-hidden group shadow-lg">
            <Image src="/images/despues.jpg" alt="Ricardo Hoy" fill className="object-cover object-top grayscale contrast-125 mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16211B] via-[#16211B]/20 to-transparent opacity-90" />
            <span className="font-mono text-[10px] uppercase text-white/50 mb-1 relative z-10 hidden md:block">ARCHIVO: RM-01B</span>
            <span className="font-mono text-sm uppercase text-[#E8E4DA] tracking-widest relative z-10">02 // Reconstrucción</span>
          </div>
        </div>
        <p className="text-center text-[#E8E4DA]/30 text-xs mt-12 font-mono relative z-10 tracking-widest uppercase">
          Documentación Fotográfica Original · Protocolo Efectivo
        </p>
      </section>

      {/* Testimonials */}
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-12 text-center">
        Evidencia de la <span className="font-drama text-accent text-4xl md:text-5xl">transformación</span>
      </h2>

      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory hide-scrollbars">
        {/* Testimonial 1 */}
        <div className="snap-center shrink-0 w-[85vw] md:w-auto bg-warm-white rounded-[2rem] p-8 border-l-4 border-[#CC5833] shadow-sm border-t border-r border-b border-border-subtle">
          <Quote className="text-accent/20 w-10 h-10 mb-4" />
          <p className="font-sans text-lg text-charcoal font-medium mb-8 leading-snug">
            &quot;Llegué sin poder subir escaleras. Hoy cargo costales y entreno tres veces por semana. Lo que cambia no es solo el cuerpo — cambia la manera en que te ves a ti mismo.&quot;
          </p>
          <div>
            <div className="font-sans font-bold text-charcoal">María G., 63 años</div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mt-1">Movilidad recuperada</div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="snap-center shrink-0 w-[85vw] md:w-auto bg-warm-white rounded-[2rem] p-8 border-l-4 border-[#CC5833] shadow-sm border-t border-r border-b border-border-subtle">
           <Quote className="text-accent/20 w-10 h-10 mb-4" />
          <p className="font-sans text-lg text-charcoal font-medium mb-8 leading-snug">
            &quot;Pensé que a mi edad ya no había nada que hacer. Ricardo me demostró que estaba equivocado. El plan fue real, el seguimiento fue constante y los resultados llegaron.&quot;
          </p>
          <div>
            <div className="font-sans font-bold text-charcoal">Roberto M., 57 años</div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mt-1">Fuerza y autonomía</div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="snap-center shrink-0 w-[85vw] md:w-auto bg-warm-white rounded-[2rem] p-8 border-l-4 border-[#CC5833] shadow-sm border-t border-r border-b border-border-subtle">
           <Quote className="text-accent/20 w-10 h-10 mb-4" />
          <p className="font-sans text-lg text-charcoal font-medium mb-8 leading-snug">
            &quot;No es un gym. Es un proceso. Cada semana entiendo mejor mi cuerpo y cada semana avanzo. Es lo más honesto que he encontrado en salud y entrenamiento.&quot;
          </p>
          <div>
            <div className="font-sans font-bold text-charcoal">Ana L., 52 años</div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mt-1">Hábitos de por vida</div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
