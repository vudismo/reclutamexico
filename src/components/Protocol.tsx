"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-config";
import { useGSAP } from "@gsap/react";

export default function Protocol() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".protocol-card") as HTMLElement[];
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: true,
      },
    });

    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, { yPercent: 100 });
      }

      if (index === cards.length - 1) return;

      tl.to(card, {
        scale: 0.92,
        filter: "blur(8px)",
        opacity: 0.4,
        ease: "none",
      }, index)
      .to(cards[index + 1], {
        yPercent: 0,
        ease: "none",
      }, index);
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="proceso" className="bg-[#1A1A1A] w-full h-[100dvh] overflow-hidden relative">
      {/* Card 1 */}
      <div className="protocol-card absolute inset-0 w-full h-full bg-[#1A1A1A] z-10 flex items-center justify-center p-6 md:p-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-square max-w-sm mx-auto flex justify-center items-center">
            <DiagnosticRadarAnim />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xl text-accent/80 font-bold tracking-widest block mb-4">01</span>
            <h3 className="font-sans text-4xl md:text-6xl text-warm-white font-bold mb-6">Diagnóstico inicial</h3>
            <p className="font-sans text-lg md:text-xl text-warm-white/70 max-w-lg leading-relaxed">
              Antes de cualquier plan, entendemos de dónde partes. Historia clínica, hábitos actuales, objetivos reales. Nada se improvisa. Todo parte de la verdad de tu cuerpo.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="protocol-card absolute inset-0 w-full h-full bg-[#1A1A1A] z-20 flex items-center justify-center p-6 md:p-16 border-t border-white/5">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-square max-w-sm mx-auto bg-black/40 rounded-[2.5rem] overflow-hidden border border-white/10 flex items-center justify-center shadow-xl">
            <PillarCalibrationAnim />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xl text-accent/80 font-bold tracking-widest block mb-4">02</span>
            <h3 className="font-sans text-4xl md:text-6xl text-warm-white font-bold mb-6">Tu programa a medida</h3>
            <p className="font-sans text-lg md:text-xl text-warm-white/70 max-w-lg leading-relaxed">
              Construimos un plan que funciona con tu vida, no contra ella. Los 4 Pilares calibrados a tu condición. Sin fórmulas copiadas, sin atajos.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="protocol-card absolute inset-0 w-full h-full bg-[#1A1A1A] z-30 flex items-center justify-center p-6 md:p-16 border-t border-white/5">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
            <EvolutionGraphAnim />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xl text-accent/80 font-bold tracking-widest block mb-4">03</span>
            <h3 className="font-sans text-4xl md:text-6xl text-warm-white font-bold mb-6">Seguimiento y evolución</h3>
            <p className="font-sans text-lg md:text-xl text-warm-white/70 max-w-lg leading-relaxed">
              El programa no termina en la primera sesión. Monitoreamos, ajustamos y avanzamos contigo semana a semana. El objetivo no es que llegues — es que te quedes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// NARRATIVE ANIMATION COMPONENTS
// ----------------------------------------------------

function DiagnosticRadarAnim() {
  const polygonRef = useRef<SVGPolygonElement>(null);

  // 5-point radar coordinates mapped cleanly
  const radarAngles = [0, 72, 144, 216, 288].map(deg => (deg - 90) * Math.PI / 180);
  
  const generatePoints = () => {
    // 5 stats: e.g. Fuerza, Movilidad, Metabólico, Recuperación, Composición
    const vals = Array.from({ length: 5 }, () => 40 + Math.random() * 50);
    return vals.map((val, i) => {
      const x = 100 + val * Math.cos(radarAngles[i]);
      const y = 100 + val * Math.sin(radarAngles[i]);
      return `${x},${y}`;
    }).join(" ");
  };

  useGSAP(() => {
    const updateRadar = () => {
      gsap.to(polygonRef.current, {
        attr: { points: generatePoints() },
        duration: 2.5,
        ease: "power2.inOut",
        onComplete: updateRadar
      });
    };
    updateRadar();
  });

  return (
    <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] mx-auto drop-shadow-2xl">
      {/* Background Rings */}
      {[25, 50, 75, 100].map(r => (
        <polygon 
          key={r}
          points={Array.from({length:5}).map((_, i) => `${100 + r * Math.cos(radarAngles[i])},${100 + r * Math.sin(radarAngles[i])}`).join(" ")}
          fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1"
        />
      ))}
      
      {/* Web Axes */}
      {Array.from({length:5}).map((_, i) => (
        <line 
          key={i} 
          x1="100" y1="100" 
          x2={100 + 100 * Math.cos(radarAngles[i])} 
          y2={100 + 100 * Math.sin(radarAngles[i])} 
          stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" 
        />
      ))}

      {/* Metric Labels (Fake UI context) */}
      <text x="100" y="8" fill="#FFF" opacity="0.3" fontSize="6" textAnchor="middle" className="font-mono">FUERZA</text>
      <text x="188" y="70" fill="#FFF" opacity="0.3" fontSize="6" textAnchor="middle" className="font-mono">RESISTENCIA</text>
      <text x="160" y="190" fill="#FFF" opacity="0.3" fontSize="6" textAnchor="middle" className="font-mono">HIDRATACIÓN</text>
      <text x="40" y="190" fill="#FFF" opacity="0.3" fontSize="6" textAnchor="middle" className="font-mono">COMBUSTIBLE</text>
      <text x="12" y="70" fill="#FFF" opacity="0.3" fontSize="6" textAnchor="middle" className="font-mono">DESCANSO</text>
      
      {/* Dynamic Data Polygon */}
      <polygon 
        ref={polygonRef} 
        points={generatePoints()} 
        fill="url(#radarGradient)" 
        stroke="#CC5833" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />

      <defs>
        <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CC5833" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#CC5833" stopOpacity="0.1"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

function PillarCalibrationAnim() {
  const barsRef = useRef<(SVGRectElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    // Simulate 3 levels of "searching/calibrating" for the optimal pillar structure
    const steps = 3;
    for (let s = 0; s < steps; s++) {
      barsRef.current.forEach((bar) => {
        const height = 20 + Math.random() * 50; 
        tl.to(bar, { 
          attr: { height: height, y: 80 - height }, 
          duration: 0.6, 
          ease: "power1.inOut" 
        }, `step${s}`);
      });
    }

    // Finally "Lock In" the optimal 4 Pillars structure!
    barsRef.current.forEach((bar) => {
      tl.to(bar, { 
        attr: { height: 75, y: 5 }, 
        duration: 0.8, 
        ease: "back.out(2)" 
      }, `lock`);
    });

    // Subtly flash white to show optimization achieved
    tl.to(barsRef.current, { fill: "#FFFFFF", duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" })
      .to({}, { duration: 1.5 }); // Hold optimal shape for users to read

  });

  return (
    <svg viewBox="0 0 200 100" className="w-[80%] h-auto">
      {/* Baseline / Foundation */}
      <line x1="20" y1="80" x2="180" y2="80" stroke="#CC5833" strokeWidth="2" strokeOpacity="0.4" />
      <text x="100" y="93" fill="#FFF" opacity="0.2" fontSize="7" textAnchor="middle" className="font-mono tracking-[0.2em] uppercase">LOS 4 PILARES</text>
      
      {/* Calibrating Bars */}
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          {/* Track background */}
          <rect x={35 + i * 36} y={5} width={22} height={75} fill="#ffffff" fillOpacity="0.03" rx="4" />
          {/* Active dynamic pillar */}
          <rect 
            ref={el => { barsRef.current[i] = el; }}
            x={35 + i * 36} y={30} width={22} height={50} 
            fill="#CC5833" rx="4" 
          />
        </g>
      ))}
    </svg>
  );
}

function EvolutionGraphAnim() {
  const pathRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<(SVGCircleElement | null)[]>([]);
  const labelsRef = useRef<(SVGTextElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    // Draw the continuous trend line revealing from left to right
    tl.fromTo(pathRef.current, 
      { strokeDashoffset: 400 },
      { strokeDashoffset: 0, duration: 3.5, ease: "none" }
    );

    // Nodes pop up sequentially precisely as the line passes them
    nodesRef.current.forEach((node, i) => {
      const delay = i * 0.6; // approx match the line duration
      tl.fromTo(node, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(3)" }, 
        delay
      );
      
      tl.fromTo(labelsRef.current[i], 
        { opacity: 0, y: 5 }, 
        { opacity: 0.8, y: 0, duration: 0.4 }, 
        delay + 0.1
      );
    });

    // Fade out everything seamlessly into the endless loop
    tl.to(pathRef.current, { opacity: 0, duration: 0.8 }, "+=1");
    tl.to(nodesRef.current, { opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.1 }, "-=0.8");
    tl.to(labelsRef.current, { opacity: 0, y: -5, duration: 0.8, stagger: 0.1 }, "-=0.8");

  });

  const pathD = "M 10 130 L 60 110 L 110 115 L 160 70 L 210 55 L 250 65 L 290 20";
  const dataPoints = [
    {cx: 60, cy: 110, label: "ADAPTACIÓN"},
    {cx: 110, cy: 115, label: "AJUSTE"},
    {cx: 160, cy: 70, label: "+ CARGA"},
    {cx: 210, cy: 55, label: "RECUPERACIÓN"},
    {cx: 250, cy: 65, label: "MONITOREO"},
    {cx: 290, cy: 20, label: "PR EXCEDIDO"}
  ];

  return (
    <svg viewBox="0 0 300 150" className="w-[90%] h-auto overflow-visible drop-shadow-lg">
      {/* Background Data Grid */}
      <path d="M0,30 L300,30 M0,60 L300,60 M0,90 L300,90 M0,120 L300,120" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Glow path behind line */}
      <path 
        d={pathD}
        fill="none" stroke="#CC5833" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
        opacity="0.1"
      />
      
      {/* The main animated path */}
      <path 
        ref={pathRef}
        d={pathD}
        fill="none" stroke="#CC5833" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
        style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
      />
      
      {/* Animated Data Nodes and Micro-copy tags */}
      {dataPoints.map((node, i) => (
        <g key={i}>
          <circle 
            ref={el => { nodesRef.current[i] = el; }}
            cx={node.cx} cy={node.cy} r="5" 
            fill="#1A1A1A" stroke="#CC5833" strokeWidth="2.5" 
            opacity="0" style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
          <text 
            ref={el => { labelsRef.current[i] = el; }}
            x={node.cx} y={node.cy - 12} 
            fill="#FFF" fontSize="6.5" className="font-mono tracking-widest" textAnchor="middle" opacity="0"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
