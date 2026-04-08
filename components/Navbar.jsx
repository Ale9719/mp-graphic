import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-purple/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Image src="/mp-graphic/Logo-mp.png" alt="Melania Pintore Logo" width={200} height={50} priority style={{ height: 'auto' }} className="object-contain"/>
        </Link>
        
        {/* MENU CENTRALE */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-brand-deep font-medium">
          <Link href="/lavori" className="hover:text-brand-purple transition-colors">Portfolio</Link>
          <Link href="/contatti" className="hover:text-brand-purple transition-colors">Contattami</Link>
        </div>

        <div className="w-50 justify-end flex items-center gap-5 text-brand-purple">
          <a href="#" className="hover:text-brand-deep transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          
          <a href="#" className="hover:text-brand-deep transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>

          <a href="mailto:melania.pintore@gmail.com" className="hover:text-brand-deep transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
        
      </div>
    </nav>
  );
}