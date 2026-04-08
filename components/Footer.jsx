"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-deep border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12 px-6 text-white relative overflow-hidden">
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 font-serif text-[25vw] md:text-[15vw] text-white/2 pointer-events-none select-none uppercase tracking-tighter rotate-90 md:rotate-0 translate-x-1/4 md:translate-x-0">
        MP
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* LOGO */}
          <div className="md:col-span-5 space-y-6 md:space-y-8">
            <Link href="/" className="inline-block transition-opacity">
              <Image 
                src="/mp-graphic/Logo-mp.png" 
                alt="Melania Pintore Logo" 
                width={150} 
                height={60} 
                className="brightness-0 invert object-contain md:w-45" 
              />
            </Link>
            <p className="text-white/40 text-xs md:text-sm font-light max-w-sm leading-relaxed">
              Progettazione visiva guidata dal <span className="text-white/60">rigore</span>, 
              accesa dall' <span className="text-brand-muted/80">intuito</span>. <br />
              Digital & Brand Designer basata in Sardegna.
            </p>
          </div>

          {/* LEGAL*/}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] uppercase text-brand-muted/50">Info & Legal</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
              <li>
                <Link href="/privacy" className="text-[10px] md:text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-[10px] md:text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest block">
                  Cookie Policy
                </Link>
              </li>
              <li className="col-span-2 md:col-span-1">
                <Link href="/terms" className="text-[10px] md:text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest block">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="md:col-span-3 space-y-6 md:text-right">
            <h4 className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] uppercase text-brand-muted/50">Connect</h4>
            <div className="flex items-center md:justify-end gap-2 md:gap-6 -ml-3 md:ml-0">
              <a href="#" className="p-3 group" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-all">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="p-3 group" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-all">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
            <p className="text-[9px] md:text-[10px] font-mono text-white/20 tracking-widest uppercase italic pt-2">
              // Available for 2026
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></div>
            <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/30 leading-loose">
              © 2026 Melania Pintore <br className="md:hidden" /> 
              <span className="hidden md:inline">—</span> P.IVA 01234567890
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 hover:text-brand-purple transition-colors flex items-center gap-2 group self-end md:self-auto"
          >
            Back to top <span className="group-hover:-translate-y-1 transition-transform inline-block">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}