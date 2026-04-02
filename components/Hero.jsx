"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      number: { 
        value: 15, 
        density: { enable: true, area: 1000 } 
      },
      color: { 
        value: ["#1a0b2e", "#2d1b42", "#5e35b1", "#7c4dff", "#b39ddb"] 
      },
      shape: { 
        type: "square" 
      },
      opacity: {
        value: { min: 0.1, max: 0.3 },
      },
      size: {
        value: { min: 100, max: 300 }, 
      },
      move: {
        enable: true,
        speed: 1.2, 
        direction: "top-right", 
        random: false,
        straight: true, 
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { 
          enable: true, 
          mode: "slow" 
        },
      },
      modes: {
        slow: { factor: 4, radius: 300 }
      },
    },
    detectRetina: true,
  }), []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[95vh] flex items-center justify-center px-6 overflow-hidden bg-[#f9f8fa]">
      
      {init && (
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="h-full w-full"
          />
        </div>
      )}

      <div className="absolute inset-0 z-1pacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        <div className="mb-10 animate-fade-in">
          <span className="inline-block px-5 py-2 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-purple border-l-2 border-brand-purple bg-brand-purple/5 backdrop-blur-sm">
            Visual Strategy & Art Direction
          </span>
        </div>

        <h1 className="font-serif text-6xl md:text-9xl text-brand-deep leading-[0.9] mb-12 tracking-tighter">
          Design che racconta <br /> 
          <span className="italic text-brand-purple">chi sei.</span>
        </h1>

        <p className="text-lg md:text-2xl text-brand-deep/70 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          Trasformo concetti complessi in sistemi visivi <br className="hidden md:block" /> 
          ordinati, eleganti e profondamente umani.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20">
        
        <a href="#portfolio" className="group inline-flex items-center gap-6 md:gap-10 text-brand-deep transition-all duration-700">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] group-hover:text-brand-purple transition-colors duration-500">
            Guarda i Progetti
            </span>
            <div className="relative w-8 md:w-12 h-px bg-brand-deep/10 group-hover:w-16 md:group-hover:w-24 group-hover:bg-brand-purple transition-all duration-700 ease-in-out">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-purple scale-0 group-hover:scale-100 transition-transform duration-700 delay-100"></div>
            </div>
        </a>

        <a href="#contact" className="group inline-flex items-center gap-6 md:gap-10 text-brand-deep/60 hover:text-brand-deep transition-all duration-700">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] group-hover:text-brand-purple transition-colors duration-500">
            Contattami
            </span>
            <div className="relative w-8 md:w-12 h-px bg-brand-deep/10 group-hover:w-16 md:group-hover:w-24 group-hover:bg-brand-purple transition-all duration-700 ease-in-out">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-purple scale-0 group-hover:scale-100 transition-transform duration-700 delay-100"></div>
            </div>
        </a>
        </div>
      </div>

      {/* Info Verticale in basso a sinistra */}
      <div className="absolute bottom-12 left-5 md:left-12 flex flex-col items-center gap-6 opacity-20 select-none">
      <span className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-brand-deep font-bold [writing-mode:vertical-lr] rotate-180">
        Based in Italy — Available 2026
      </span>
      <div className="w-px h-3 items-center bg-brand-deep origin-bottom animate-pulse"></div>
    </div>

    </section> 
  );
}