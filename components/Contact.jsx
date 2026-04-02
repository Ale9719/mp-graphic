"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  
  // 1. Stato per gestire la selezione del servizio nel form
  const [selectedService, setSelectedService] = useState("Brand Identity");

  // 2. Mappa di conversione: associa lo "slug" dell'URL al nome visualizzato nella select
  const serviceMap = {
    'brand-identity': "Brand Identity",
    'social-media': "Social Media Design",
    'editoria': "Grafica Editoriale",
    'web-design': "Website Design"
  };

  useEffect(() => {
    // Legge il parametro "servizio" dall'URL (es. ?servizio=web-design)
    const serviceParam = searchParams.get('servizio');

    // Se il parametro esiste nella nostra mappa, aggiorna lo stato della select
    if (serviceParam && serviceMap[serviceParam]) {
      setSelectedService(serviceMap[serviceParam]);
    }
  }, [searchParams]);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 shadow-2xl">
      
      {/* Nome */}
      <div className="p-8 bg-brand-muted/50 focus-within:bg-white/2 transition-colors border-b border-white/5 md:border-r md:border-white/10">
        <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-brand-purple/60 mb-4">Nome</label>
        <input 
          type="text" 
          name="name"
          placeholder="Il tuo nome"
          className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/30 font-light"
          required
        />
      </div>

      {/* Email */}
      <div className="p-8 bg-brand-muted/50 focus-within:bg-white/2 transition-colors border-b border-white/5">
        <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-brand-purple/60 mb-4">Email</label>
        <input 
          type="email" 
          name="email"
          placeholder="La tua email"
          className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/30 font-light"
          required
        />
      </div>

      {/* Servizio (Il cuore della logica dinamica) */}
      <div className="p-8 bg-brand-muted/50 focus-within:bg-white/2 transition-colors border-b border-white/5 md:col-span-2 relative group">
        <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-brand-purple/60 mb-4">Servizio</label>
        <select 
          name="service"
          value={selectedService} // Legato allo stato React
          onChange={(e) => setSelectedService(e.target.value)} // Permette il cambio manuale
          className="w-full bg-transparent text-xl text-white outline-none cursor-pointer appearance-none group-hover:text-white transition-colors"
        >
          <option value="Brand Identity" className="bg-[#1a1a1a] text-white">Brand Identity</option>
          <option value="Social Media Design" className="bg-[#1a1a1a] text-white">Social Media Design</option>
          <option value="Grafica Editoriale" className="bg-[#1a1a1a] text-white">Grafica Editoriale</option>
          <option value="Website Design" className="bg-[#1a1a1a] text-white">Website Design</option>
          <option value="Altro" className="bg-[#1a1a1a] text-white">Altro</option>
        </select>
        {/* Freccia Custom */}
        <span className="absolute right-8 bottom-10 text-white/20 text-[10px] pointer-events-none group-hover:text-brand-purple transition-all duration-300">▼</span>
      </div>

      {/* Messaggio */}
      <div className="p-8 bg-brand-muted/50 focus-within:bg-white/2 transition-colors md:col-span-2 border-b border-white/5">
        <label className="block text-[10px] font-mono tracking-[0.3em] uppercase text-brand-purple/60 mb-4">Il Progetto</label>
        <textarea 
          name="message"
          rows="3" 
          placeholder="Raccontami la tua visione..."
          className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/30 font-light resize-none"
          required
        ></textarea>
      </div>

      {/* Bottone Invia */}
      <div className="p-8 md:col-span-2 bg-white/2 flex justify-between items-center group cursor-pointer relative overflow-hidden">
        <button 
          type="submit" 
          className="flex items-center gap-8 text-white transition-all duration-700 z-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.6em] group-hover:text-brand-purple transition-colors">Invia Richiesta</span>
          <div className="relative w-24 h-px bg-white group-hover:w-40 group-hover:bg-brand-purple transition-all duration-700">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-inherit scale-0 group-hover:scale-100 transition-transform duration-700"></div>
          </div>
        </button>
        <span className="hidden md:block text-white/5 font-mono text-[10px] tracking-widest uppercase select-none">Ready to fly</span>
      </div>

    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-muted relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Titolo Sezione */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-center gap-10">
          <h2 className="font-serif text-5xl md:text-7xl text-brand-deep tracking-tighter leading-none">
            Contatti<span className="text-brand-purple/80">.</span>
          </h2>
          <div className="hidden md:block grow h-px bg-brand-deep/20"></div>
          <span className="text-brand-deep/30 font-mono text-[10px] tracking-[0.4em] uppercase italic">
            // Start a Project
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-12">
            <p className="text-brand-deep/60 text-xl md:text-2xl font-light leading-relaxed border-l border-brand-purple/40 pl-8">
              Trasformiamo la tua <span className="text-brand-deep">visione</span> in un'esperienza visiva <span className="text-brand-deep">memorabile</span>.
            </p>
            
            <div className="pt-8 space-y-2">
              <p className="text-brand-deep/50 font-mono text-[10px] tracking-widest uppercase italic">Scrivimi —</p>
              <a href="mailto:melania.pintore@gmail.com" className="text-2xl font-serif text-white/60 hover:text-brand-purple transition-all duration-500">
                melania.pintore@gmail.com
              </a>
            </div>
          </div>

          {/* Form Side con Suspense */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="text-white/20 font-mono text-xs animate-pulse">CARICAMENTO MODULO...</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
}