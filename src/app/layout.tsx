import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://recluta.mx'),
  title: 'Ricardo Leyva · Entrenador Personal México | Recluta México',
  description: 'De 200 kg a fisicoculturista. Ricardo Leyva ayuda a adultos mayores y personas con problemas de salud a recuperar fuerza, movilidad y calidad de vida con un método de 4 Pilares probado en el caso más difícil: el suyo.',
  keywords: ['entrenador personal', 'bajar de peso México', 'costal búlgaro', 'salud adultos mayores'],
  openGraph: {
    title: 'Recluta México — Entrenamiento que cambia vidas',
    description: 'No entreno solamente cuerpos. Entreno hábitos. Conoce el método de Ricardo Leyva y empieza tu transformación hoy.',
    url: 'https://recluta.mx',
    siteName: 'Recluta México',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${cormorant.variable} ${plexMono.variable} font-sans bg-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
