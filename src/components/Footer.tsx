import { Facebook, Instagram } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-black text-soft-white ${className}`}>
      <div className="w-full flex">
        <div className="h-2 flex-1 bg-italian-green"></div>
        <div className="h-2 flex-1 bg-soft-white"></div>
        <div className="h-2 flex-1 bg-italian-red"></div>
      </div>
      <div className="bg-black py-4">
        <h3 className="font-montserrat text-2xl mb-6 text-soft-white text-center">Följ oss</h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/Donna.Di.Classe.Sweden" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-italian-red transition-colors"
          >
            <Facebook size={32} className="text-white hover:text-italian-red transition-colors" />
          </a>
          <a 
            href="https://www.instagram.com/donna.di.classe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-italian-red transition-colors"
          >
            <Instagram size={32} className="text-white hover:text-italian-red transition-colors" />
          </a>
        </div>
        <div className="w-[95%] h-[1px] bg-white/10 mt-8 mx-auto"></div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="font-montserrat text-sm">Besök oss</h3>
            <p className="font-montserrat text-sm">Västra Storgatan 32</p>
            <p className="font-montserrat text-sm">Kristianstad</p>
          </div>
          <div>
            <h3 className="font-montserrat text-sm">Kontakt</h3>
            <p className="font-montserrat text-sm">Email: info@donnadiclasse.se</p>
            <p className="font-montserrat text-sm">Tel: +46 70 999 38 02</p>
          </div>
        </div>
        <div className="border-t border-soft-white/10 mt-4 pt-4 text-center">
          <p className="font-montserrat text-sm">© 2025 Donna di Classe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;