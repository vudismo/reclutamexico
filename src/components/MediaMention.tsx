import Image from "next/image";
import { Mic2, PlayCircle } from "lucide-react";

export default function MediaMention() {
  return (
    <section className="deferred-section bg-obsidian py-28 md:py-36 relative overflow-hidden text-warm-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Photo Column: 100% Clean Studio Photography Framed Without Overlays */}
        <div className="lg:col-span-6 order-2 lg:order-1 relative">
          <div className="rounded-[2rem] bg-[#141916] border border-white/15 p-4 shadow-obsidian flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-xs text-white tracking-widest uppercase font-bold">
                  ON AIR · MARTHA DEBAYLE
                </span>
              </div>
              <span className="font-mono text-[10px] text-warm-white/60 uppercase tracking-wider">
                PODCAST OFICIAL
              </span>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-moss-deep border border-white/10">
              <Image
                src="/images/recluta-mexico-bendita-nutricion-martha-debaile.jpg"
                alt="Ricardo Leyva en Bendita Nutrición con Martha Debayle"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <Mic2 className="text-accent" size={20} />
            <span className="font-mono text-xs tracking-[0.22em] text-warm-white/65 uppercase font-bold">
              Respaldo Nacional
            </span>
          </div>

          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight">
            De obesidad extrema a{" "}
            <span className="text-accent italic font-drama text-5xl md:text-6xl font-normal">
              cambiar vidas
            </span>{" "}
            en cadena nacional.
          </h2>

          <p className="font-sans text-lg text-warm-white/75 leading-relaxed mb-8 max-w-xl">
            Ricardo Leyva compartió cómo{" "}
            <strong className="text-white font-bold">perdió 105 kg</strong> y
            sanó su relación con la alimentación en el podcast de{" "}
            <strong className="text-white font-bold">Martha Debayle</strong>.
            Una charla profunda sobre cómo abandonar las dietas restrictivas y
            utilizar los 4 Pilares para ganar masa muscular para elevar el
            metabolismo y la calidad de vida.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
            <div className="inline-flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-2xl p-4 pr-6">
              <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                <Mic2 className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-mono text-[10px] text-warm-white/50 tracking-widest uppercase mb-1">
                  Entrevista completa en
                </p>
                <p className="font-sans font-bold text-white text-base leading-none">
                  Bendita Nutrición
                </p>
              </div>
            </div>

            <a
              href="https://youtu.be/_-ZuYJ3lxtg?si=mOL1k2nUoxs5ejtj"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-accent text-white px-7 py-4 rounded-full font-bold text-sm hover:scale-[1.02] transition-transform duration-200 shadow-accent-glow"
            >
              <PlayCircle size={20} />
              <span>Ver Episodio (YouTube)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
