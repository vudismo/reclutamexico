import Image from "next/image";
import { Mic2 } from "lucide-react";

export default function MediaMention() {
  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32 relative overflow-hidden text-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Photo Column */}
        <div className="order-2 lg:order-1 relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-[#16211B] group shadow-2xl border border-white/5">
          <Image
            src="/images/recluta-mexico-bendita-nutricion-martha-debaile.jpg"
            alt="Ricardo Leyva en Bendita Nutrición con Martha Debayle"
            fill
            className="object-cover object-center grayscale contrast-125 mix-blend-luminosity opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-1000"
          />
          {/* subtle recording UI frame */}
          <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs text-white tracking-widest uppercase opacity-90 font-bold">ON AIR</span>
          </div>
          {/* Inner vignette */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1A1A1A]/90 pointer-events-none z-10" />
        </div>

        {/* Text Column */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
             <Mic2 className="text-accent" size={24} />
             <span className="font-mono text-sm tracking-widest text-warm-white/50 uppercase font-bold">Validación Nacional</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            El método que está <span className="text-accent italic font-drama text-5xl md:text-7xl">sacudiendo</span> al fitness en México.
          </h2>
          <p className="font-sans text-lg text-warm-white/70 leading-relaxed mb-10 max-w-lg">
            No somos una moda pasajera de gimnasio de cadena. Ricardo Leyva fue el único experto invitado a <strong className="text-white font-bold">Bendita Nutrición en Martha Debayle Network</strong> para destapar la verdad de la hipertrofia y desmentir los mitos que te mantienen estancado.
          </p>
          <div className="inline-flex items-center gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 pr-8 w-fit hover:bg-white/10 transition-colors">
             <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                <Mic2 className="text-white" size={20} />
             </div>
             <div>
               <p className="font-mono text-[10px] text-warm-white/50 tracking-widest uppercase mb-1">Escuchado a nivel nacional en</p>
               <p className="font-sans font-bold text-white text-lg leading-none">Martha Debayle Network</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
