export default function Services() {
  const services = [
    {
      title: "Brand Identity",
      desc: "Loghi, palette colori e linee guida coerenti per un posizionamento forte e unico.",
      subject: "brand-identity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-slow"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: "Social Media Design",
      desc: "Grafiche per feed, storie e copertine che catturano l'attenzione e comunicano valore.",
      subject: "social-media",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-rotate-slow"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    {
      title: "Grafica Editoriale",
      desc: "Cataloghi, flyer e brochure cartacee o digitali curate nei minimi dettagli tipografici.",
      subject: "editoria",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-slow"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
      )
    },
    {
      title: "Website Design",
      desc: "Siti web e landing page intuitivi, progettati per offrire la migliore esperienza utente.",
      subject: "web-design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-stretch-slow"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      )
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-medium-purple relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <h2 className="font-serif text-6xl md:text-8xl text-brand-deep tracking-tighter leading-none shrink-0">
              Servizi
          </h2>
          
          <div className="hidden md:block grow h-px bg-brand-deep/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-purple/40 -translate-x-full animate-line-flow"></div>
          </div>
          
          <div className="md:text-right shrink-0">
              <p className="text-brand-deep/40 font-mono text-[10px] tracking-[0.4em] uppercase italic md:flex items-center gap-3">
              <span className="d-none md:hidden w-8 h-px bg-brand-deep/10"></span>
              // Designing Solutions / 2026
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-deep/5 shadow-2xl shadow-brand-deep/10 rounded-none">
          {services.map((service, index) => (
            <div key={index} className="group relative p-8 md:p-12 bg-white/60 backdrop-blur-lg flex flex-col items-center text-center transition-all duration-700 ease-in-out hover:bg-white md:hover:-translate-y-2">
              
              <div className="mb-10 text-[#555] group-hover:text-brand-purple transform transition-all duration-500 md:group-hover:-translate-y-1 md:group-hover:scale-110">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-brand-deep mb-6 leading-tight group-hover:text-brand-purple transition-colors">
                {service.title}
              </h3>
              
              <p className="text-brand-deep/60 leading-relaxed text-sm mb-12 group-hover:text-brand-deep transition-colors font-light">
                {service.desc}
              </p>

              <div className="mt-auto mb-8 w-12 h-px bg-brand-purple/20 group-hover:w-24 group-hover:bg-brand-purple/60 transition-all duration-700 ease-in-out"></div>

              <div className="relative md:absolute bottom-0 left-0 w-full h-12 md:h-14 transition-all duration-700 ease-out opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                <a href={`?servizio=${service.subject}#contact`} className="inline-flex items-center justify-center w-full h-full bg-brand-deep text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-purple transition-colors">
                Contattami →
                </a>
              </div>

              <div className="hidden md:block absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}