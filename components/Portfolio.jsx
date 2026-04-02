import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Studio Flora",
      category: "Brand Identity",
      img: "/placeholder.png", 
      width: "md:col-span-2",
      year: "2024"
    },
    {
      title: "Luna Café",
      category: "Social Kit",
      img: "/placeholder.png",
      width: "md:col-span-1",
      year: "2023"
    },
    {
      title: "Lookbook 2024",
      category: "Editoria",
      img: "/placeholder.png",
      width: "md:col-span-1",
      year: "2024"
    },
    {
      title: "Essenza",
      category: "Packaging Design",
      img: "/placeholder.png",
      width: "md:col-span-2",
      year: "2023"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-lavender relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Sezione */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center gap-10 relative group">
          <div className="max-w-2xl shrink-0">
              <h2 className="font-serif text-5xl md:text-8xl text-brand-deep leading-[0.85] tracking-tighter mb-8">
              I miei <br className="md:hidden" />
              <span className="italic text-brand-purple/80 transition-all duration-700"> lavori.</span>
              </h2>
              
              <p className="text-brand-deep/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Frammenti di <span className="text-brand-deep font-medium">identità</span> tradotti in 
              {" "}<span className="text-brand-purple font-medium">forma</span>, progettati per durare nel tempo.
              </p>
          </div>

          <div className="hidden md:block grow h-px bg-brand-deep/10 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-purple/20 to-transparent -translate-x-full animate-[line-flow_4s_infinite_linear]"></div>
          </div>

          <div className="shrink-0 mb-4 text-brand-deep/30 font-mono text-[10px] tracking-[0.4em] uppercase italic">
              // Selected Archive
          </div>
        </div>

        {/* Grid Progetti */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1"> 
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden bg-brand-deep ${project.width} aspect-4/5 md:aspect-auto md:h-125`}
            >
              {/* Overlay: Leggero su mobile, reagisce al colore su desk */}
              <div className="absolute inset-0 bg-[#1a1a1a]/40 md:group-hover:bg-brand-purple/80 transition-all duration-700 z-10 md:mix-blend-multiply" />
              
              <div className="w-full h-full relative overflow-hidden">
                 <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-out md:group-hover:scale-105 grayscale md:grayscale group-active:grayscale-0 md:group-hover:grayscale-0" 
                 /> 
                 
                 {/* LA CORNICE: Sempre visibile su mobile, cambia intensità su desk */}
                 <div className="absolute inset-4 border border-white/20 md:border-white/10 md:group-hover:border-white/30 transition-all duration-700 z-20 pointer-events-none" />
              </div>

              {/* CONTENUTO TESTUALE */}
              <div className="absolute inset-0 z-30 p-8 md:p-10 flex flex-col justify-between 
                              opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                
                {/* Top: Categoria e Anno */}
                <div className="flex justify-between items-start 
                                translate-y-0 md:-translate-y-5 md:group-hover:translate-y-0 transition-transform duration-700">
                  <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-white/80 md:text-white/50 italic underline decoration-white/20 underline-offset-4">
                    {project.category}
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] text-white/40 md:text-white/30">{project.year}</span>
                </div>

                {/* Bottom: Titolo e Call to action */}
                <div className="translate-y-0 md:translate-y-5 md:group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tighter leading-none mb-4 md:mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-6 md:w-8 h-px bg-white/40"></div>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 md:text-white/60 font-bold">
                      Vedi Progetto
                    </span>
                  </div>
                </div>
              </div>

              {/* Link cliccabile */}
              <a href="#" className="absolute inset-0 z-40 cursor-pointer">
                <span className="sr-only">Vedi {project.title}</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}