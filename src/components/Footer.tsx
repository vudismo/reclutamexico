import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-warm-white rounded-t-[3rem] pt-24 pb-8 px-6 md:px-16 mt-[-2rem] relative z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
        
        {/* Col 1: Brand & Status */}
        <div>
          <Link href="/" className="flex items-baseline gap-1 mb-6">
            <span className="font-drama text-4xl font-bold tracking-tight text-white">RECLUTA</span>
            <span className="font-mono text-sm uppercase tracking-widest text-accent">MÉXICO</span>
          </Link>
          <p className="font-sans text-warm-white/70 max-w-sm mb-12">
            No entreno solamente cuerpos. Entreno hábitos.
          </p>

          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="font-mono text-xs text-warm-white/50 tracking-widest uppercase">
              Sistema activo
            </span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-warm-white/40 mb-6">Explorar</h5>
            <ul className="space-y-4 font-sans text-sm font-medium text-warm-white/80">
              <li><Link href="#metodologia" className="hover:text-accent transition-colors">Método</Link></li>
              <li><Link href="#resultados" className="hover:text-accent transition-colors">Proceso</Link></li>
              <li><Link href="#servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link href="#filosofia" className="hover:text-accent transition-colors">Resultados</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-warm-white/40 mb-6">Servicios</h5>
            <ul className="space-y-4 font-sans text-sm font-medium text-warm-white/80">
              <li><Link href="#servicios" className="hover:text-accent transition-colors">Comunidad WhatsApp</Link></li>
              <li><Link href="#servicios" className="hover:text-accent transition-colors">Programa Los 4 Pilares</Link></li>
              <li><Link href="#servicios" className="hover:text-accent transition-colors">Entrenamiento Presencial</Link></li>
              <li><Link href="#servicios" className="hover:text-accent transition-colors">Costales Búlgaros</Link></li>
            </ul>
          </div>
        </div>

        {/* Col 3: Contact */}
        <div>
           <h5 className="font-mono text-xs uppercase tracking-widest text-warm-white/40 mb-6">Contacto</h5>
           <div className="flex flex-col gap-6">
              <a
                href="https://wa.me/525561114259?text=Hola%20Ricardo,%20vengo%20del%20sitio%20web%20y%20me%20gustar%C3%ADa%20empezar%20mi%20entrenamiento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm w-fit hover:-translate-y-1 transition-transform"
              >
                <MessageCircle size={18} />
                Escríbeme directo
              </a>
              
              <Link 
                href="https://www.instagram.com/recluta.mexico/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-white/80 hover:text-accent transition-colors text-sm font-medium w-fit"
              >
                <Instagram size={18} />
                @recluta.mexico
              </Link>

              <a href="mailto:contacto@recluta.mx" className="text-sm font-medium text-warm-white/80 hover:text-accent transition-colors">
                contacto@recluta.mx
              </a>
           </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-warm-white/40 uppercase tracking-widest">
        <div>© 2026 Recluta México. Todos los derechos reservados.</div>
        <div className="flex gap-4">
          <span>Recluta México</span>
          <span className="text-warm-white/20">|</span>
          <span>recluta.mx</span>
        </div>
      </div>
    </footer>
  );
}
