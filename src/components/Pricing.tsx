"use client";

import { useGSAP } from "@gsap/react";
import { useState } from "react";
import Image from "next/image";

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
  }
];

export default function Pricing() {
  const [selectedCostalId, setSelectedCostalId] = useState("12kg");
  const activeCostal = COSTALES.find(c => c.id === selectedCostalId) || COSTALES[1];

  useGSAP(() => {
    // Background scaling/sliding logic remains abstracted for pure CSS optimizations.
  });

  return (
    <section id="servicios" className="py-32 px-6 md:px-16 max-w-7xl mx-auto bg-cream">
      <div className="text-center mb-20">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal tracking-tight mb-4">
          Encuentra tu nivel de entrada
        </h2>
        <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
          Desde acceso gratuito hasta acompañamiento intensivo. Cada nivel te prepara para el siguiente.
        </p>
      </div>

      {/* Services V2 Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-14 max-w-5xl mx-auto mb-32">
        {/* Tier 1 - Comunidad */}
        <div className="bg-[#F9F7F2] border border-[#D4CFC5] rounded-3xl p-8 shadow-sm flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Comunidad Recluta</h3>
          <div className="font-mono text-xl text-charcoal font-medium mb-6">Gratis</div>
          <p className="flex-1 text-sm text-charcoal/80 font-medium mb-8 leading-relaxed">
            Únete a la comunidad de WhatsApp. Tips semanales, respuestas directas de Ricardo y acceso prioritario a lanzamientos.
          </p>
          <a href="https://wa.me/[NUMERO]" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-white border border-[#D4CFC5] text-charcoal font-bold py-3 rounded-full hover:bg-moss/5 transition-colors">
            Unirme a la comunidad
          </a>
        </div>

        {/* Tier 2 - Guías */}
        <div className="bg-[#F9F7F2] border border-[#D4CFC5] rounded-3xl p-8 shadow-sm flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Guías y eBooks</h3>
          <div className="font-mono text-xl text-charcoal font-medium mb-6">Desde $149 MXN</div>
          <p className="flex-1 text-sm text-charcoal/80 font-medium mb-8 leading-relaxed">
            El conocimiento de Ricardo empaquetado. Los 4 Pilares, fuerza para mayores de 50, rutinas con costal búlgaro. Descarga y empieza hoy.
          </p>
          <a href="https://hotmart.com/[LINK]" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-white border border-[#D4CFC5] text-charcoal font-bold py-3 rounded-full hover:bg-moss/5 transition-colors">
            Ver guías disponibles
          </a>
        </div>

        {/* Tier 3 - Programa Grupal (FEATURED) */}
        <div className="md:col-span-2 w-full lg:w-[80%] mx-auto bg-[#1E2D25] rounded-3xl p-8 shadow-2xl flex flex-col scale-100 lg:scale-105 ring-2 ring-[#CC5833] relative z-20 transition-transform duration-300 hover:-translate-y-2 my-6 md:my-10">
          {/* Inner image wrapper to avoid overflow clipping the top badge */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <Image src="/images/featured_tech_texture.png" alt="Featured Texture" fill className="object-cover opacity-30 mix-blend-color-dodge" />
          </div>
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CC5833] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full font-mono z-30 shadow-md">
            Más popular
          </div>
          <h3 className="font-sans font-bold text-2xl text-[#E8E4DA] mb-2 mt-4 text-center md:text-left relative z-10">Programa Los 4 Pilares</h3>
          <div className="font-mono text-xl text-[#CC5833] font-medium mb-6 text-center md:text-left relative z-10">$1,800–$2,500 MXN · 8 semanas</div>
          <p className="flex-1 text-sm text-[#E8E4DA]/90 font-medium mb-8 leading-relaxed text-center md:text-left relative z-10">
            El programa grupal online que aplica los 4 Pilares a tu vida real. 2 sesiones en vivo por semana, material de apoyo y comunidad privada de WhatsApp. Aprende el método completo con la guía de Ricardo.
          </p>
          <a href="https://wa.me/[NUMERO]" target="_blank" rel="noopener noreferrer" className="w-full text-center group relative overflow-hidden rounded-full bg-[#CC5833] px-6 py-4 font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95 z-10">
             <span className="absolute inset-0 w-full h-full bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
             <span className="relative">Quiero entrar al programa</span>
          </a>
        </div>

        {/* Tier 4 - Presencial */}
        <div className="bg-[#F9F7F2] border border-[#D4CFC5] rounded-3xl p-8 shadow-sm flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative mt-10 md:mt-0">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CC5833] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full font-mono whitespace-nowrap z-20 shadow-md">
            Lista de espera activa
          </div>
          <h3 className="font-sans font-bold text-2xl text-charcoal mb-2 mt-2">Entrenamiento Presencial</h3>
          <div className="font-mono text-xl text-charcoal font-medium mb-6">$10,000–$12,000 MXN / mes</div>
          <p className="flex-1 text-sm text-charcoal/80 font-medium mb-8 leading-relaxed">
            Grupos reducidos de 4–6 personas. La experiencia más completa del método en tiempo real. Actualmente con lista de espera.
          </p>
          <a href="https://wa.me/[NUMERO]" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-white border border-[#D4CFC5] text-charcoal font-bold py-3 rounded-full hover:bg-moss/5 transition-colors">
            Registrarme en la lista
          </a>
        </div>

        {/* Tier 5 - VIP Intensivo */}
        <div className="bg-[#F9F7F2] border border-[#D4CFC5] rounded-3xl p-8 shadow-sm flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 mt-8 md:mt-0">
          <h3 className="font-sans font-bold text-2xl text-charcoal mb-2 mt-2">Programa VIP Intensivo</h3>
          <div className="font-mono text-xl text-charcoal font-medium mb-6">Cotización personalizada · 3 meses</div>
          <p className="flex-1 text-sm text-charcoal/80 font-medium mb-8 leading-relaxed">
            Para quienes necesitan resultados serios con acompañamiento total. Plan integral personalizado, sesiones 1:1, seguimiento semanal y supervisión de farmacología deportiva básica.
          </p>
          <a href="https://wa.me/[NUMERO]" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-white border border-[#D4CFC5] text-charcoal font-bold py-3 rounded-full hover:bg-moss/5 transition-colors">
            Solicitar información
          </a>
        </div>
      </div>

      {/* Product Block: Costales Búlgaros - Interactive Toggle V3.0 */}
      <div className="mt-24 w-full">
        <div className="bg-moss/5 border border-moss/10 rounded-[3rem] p-8 md:p-16 text-center shadow-sm max-w-4xl mx-auto">
          <h4 className="font-sans font-bold text-3xl md:text-4xl text-charcoal mb-4">El mejor costal búlgaro de México.</h4>
          <p className="font-sans text-charcoal/70 mb-10 max-w-2xl mx-auto">Entrenamiento de élite diseñado para transformar tu cuerpo. Los únicos costales segmentados por nivel y peso corporal, diseñados por Ricardo con resistencia funcional superior a cualquier modelo importado.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F9F7F2] border border-[#D4CFC5] rounded-[2.5rem] p-6 md:p-10 flex flex-col items-center shadow-sm relative overflow-hidden">
             
             {/* Left side: Floating Bag */}
             <div className="md:col-span-5 relative w-full aspect-square max-w-[280px] mx-auto group perspective-1000">
                <Image src="/images/costal.jpg" alt="Costal Búlgaro Premium" fill className="object-contain mix-blend-multiply drop-shadow-2xl group-hover:scale-[1.03] group-hover:-rotate-2 transition-transform duration-700" />
             </div>

             {/* Right side: Interactive Selector */}
             <div className="md:col-span-7 w-full flex flex-col items-center md:items-start text-left">
             
               {/* Weight Toggle Pills */}
               <div className="flex flex-nowrap justify-start lg:justify-center gap-1 sm:gap-2 bg-[#E8E4DA]/60 p-2 sm:p-2.5 rounded-full mb-12 border border-white/50 w-full sm:w-fit overflow-x-auto sm:overflow-visible scrollbar-hide shadow-inner mx-auto md:mx-0">
                {COSTALES.map((item) => {
                  const isActive = selectedCostalId === item.id;
                  return (
                    <button 
                      key={item.id}
                      onClick={() => setSelectedCostalId(item.id)}
                      className={`relative px-4 sm:px-6 py-2.5 rounded-full font-mono text-[11px] sm:text-sm transition-all duration-500 whitespace-nowrap flex-shrink-0 ${
                        isActive 
                        ? "bg-white text-[#CC5833] font-bold shadow-md scale-[1.03]" 
                        : "text-charcoal/60 hover:text-charcoal font-medium hover:bg-white/50"
                      }`}
                    >
                      {item.weight}
                      {item.popular && (
                        <span className={`absolute -top-3 -right-2 bg-[#CC5833] text-white text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest transition-opacity duration-300 shadow-sm ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          Top
                        </span>
                      )}
                    </button>
                  )
                })}
             </div>

             {/* Selected Content View */}
             <div className="w-full flex flex-col items-center md:items-start animate-in fade-in slide-in-from-bottom-6 zoom-in-95 duration-500 ease-out fill-mode-both" key={selectedCostalId}>
                <div className="font-sans font-bold text-2xl md:text-3xl text-charcoal mb-2">{activeCostal.weight} — {activeCostal.level}</div>
                <div className="text-sm md:text-base font-medium text-charcoal/60 mb-8 max-w-sm">Ideal para: {activeCostal.audience}</div>
                
                <div className="bg-white/60 border border-white backdrop-blur-sm p-6 md:p-8 rounded-[2rem] max-w-sm w-full mb-8 shadow-sm">
                  <div className="font-mono text-sm text-charcoal/40 line-through mb-1">{activeCostal.oldPrice}</div>
                  <div className="font-mono text-4xl text-[#CC5833] font-bold mb-4">{activeCostal.newPrice}</div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#CC5833] bg-[#CC5833] bg-opacity-10 py-2 px-4 rounded-full inline-block">
                    {activeCostal.tag}
                  </div>
                </div>

                <a href="https://tally.so/r/3xk7OE" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm mx-auto text-center bg-[#CC5833] text-white font-bold py-4 px-8 rounded-full hover:bg-[#A94626] hover:scale-[1.02] transition-all duration-200 text-lg shadow-xl shadow-[#CC5833]/20">
                  Comprar ahora
                </a>
             </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
