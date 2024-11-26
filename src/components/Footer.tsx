const Footer = () => {
  return (
    <footer className="bg-black text-soft-white py-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-montserrat text-sm">Besök oss</h3>
            <p className="font-montserrat text-sm">Västra Storgatan 32</p>
            <p className="font-montserrat text-sm">Kristianstad</p>
          </div>
          <div>
            <h3 className="font-montserrat text-sm">Kontakt</h3>
            <p className="font-montserrat text-sm">Email: info@donnadiclasse.se</p>
            <p className="font-montserrat text-sm">Tel: +46-XXX-XXXX</p>
          </div>
        </div>
        <div className="border-t border-soft-white/10 mt-4 pt-4 text-center">
          <p className="font-montserrat text-sm">© 2024 Donna di Classe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;