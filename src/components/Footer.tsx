import Link from "next/link";
import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const DELTA_FOOTER_WHATSAPP =
  "https://wa.me/525545520392?text=Hola%20Delta,%20vengo%20del%20sitio%20web%20de%20Recluta%20M%C3%A9xico%20y%20quiero%20recibir%20orientaci%C3%B3n%20para%20empezar.";

export default function Footer() {
  return (
    <footer className="deferred-section bg-obsidian text-warm-white rounded-t-[3rem] pt-20 pb-10 px-6 md:px-16 mt-[-2rem] relative z-30 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* High-Conversion Final CTA Banner — Delta Virtual Assistant */}
        <div className="mb-20 rounded-[2.5rem] bg-[#141916] border border-white/15 p-8 sm:p-12 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-obsidian">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] text-accent font-bold mb-3">
              ASISTENTE VIRTUAL · DELTA RECLUTA MÉXICO
            </span>
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              ¿No sabes por qué programa empezar?
            </h3>
            <p className="font-sans text-base md:text-lg text-warm-white/75 leading-relaxed">
              Escríbele ahora a <strong className="text-white font-bold">Delta</strong> en WhatsApp (<span className="font-mono text-warm-white/90">+52 55 4552 0392</span>). En menos de 2 minutos analizamos tu caso y te recomendamos el programa o costal búlgaro exacto para ti.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={DELTA_FOOTER_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shimmer group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-bold text-base transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Hablar con Delta en WhatsApp</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <span className="font-mono text-xs text-warm-white/50">
              Delta Recluta México · +52 55 4552 0392
            </span>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          {/* Col 1: Brand (Clean, no "Sistema activo" badge) */}
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1.5 mb-5 group">
              <span className="font-drama text-4xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                RECLUTA
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.22em] text-accent">
                MÉXICO
              </span>
            </Link>
            <p className="font-sans text-warm-white/70 max-w-sm leading-relaxed">
              Transformación física real basada en los 4 Pilares: hidratación celular, descanso, alimentación estructurada y fuerza progresiva.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-mono text-xs uppercase tracking-[0.22em] text-warm-white/40 mb-6">
                Explorar
              </h5>
              <ul className="space-y-4 font-sans text-sm font-medium text-warm-white/80">
                <li>
                  <Link
                    href="#metodologia"
                    className="hover:text-accent transition-colors"
                  >
                    Los 4 Pilares
                  </Link>
                </li>
                <li>
                  <Link
                    href="#proceso"
                    className="hover:text-accent transition-colors"
                  >
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicios"
                    className="hover:text-accent transition-colors"
                  >
                    Programas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#resultados"
                    className="hover:text-accent transition-colors"
                  >
                    Casos reales
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-mono text-xs uppercase tracking-[0.22em] text-warm-white/40 mb-6">
                Programas
              </h5>
              <ul className="space-y-4 font-sans text-sm font-medium text-warm-white/80">
                <li>
                  <Link
                    href="#servicios"
                    className="hover:text-accent transition-colors"
                  >
                    Comunidad Recluta
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicios"
                    className="hover:text-accent transition-colors"
                  >
                    Programa Los 4 Pilares
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicios"
                    className="hover:text-accent transition-colors"
                  >
                    Entrenamiento Presencial
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicios"
                    className="hover:text-accent transition-colors"
                  >
                    Costales Búlgaros
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-[0.22em] text-warm-white/40 mb-6">
              Contacto Directo
            </h5>
            <div className="flex flex-col gap-5">
              <a
                href={DELTA_FOOTER_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-[#A94626] text-white px-6 py-3.5 rounded-full font-bold text-sm w-fit transition-colors duration-200"
              >
                <MessageCircle size={18} />
                <span>Delta · +52 55 4552 0392</span>
              </a>

              <Link
                href="https://www.instagram.com/recluta.mexico/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-warm-white/80 hover:text-accent transition-colors text-sm font-medium w-fit"
              >
                <Instagram size={18} className="text-accent" />
                <span>@recluta.mexico</span>
              </Link>

              <a
                href="mailto:contacto@recluta.mx"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-warm-white/80 hover:text-accent transition-colors w-fit"
              >
                <Mail size={18} className="text-accent" />
                <span>contacto@recluta.mx</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-warm-white/40 uppercase tracking-widest">
          <div>© 2026 Recluta México. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <span>Recluta México</span>
            <span className="text-warm-white/20">|</span>
            <span>reclutamexico.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
