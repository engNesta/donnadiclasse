const Footer = () => {
  return (
    <footer className="bg-rich-black text-soft-white py-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-playfair text-lg mb-2">Besök oss</h3>
            <p className="font-montserrat">Västra Storgatan 32</p>
            <p className="font-montserrat">Kristianstad</p>
          </div>
          <div>
            <h3 className="font-playfair text-lg mb-2">Kontakt</h3>
            <p className="font-montserrat">Email: info@donnadiclasse.se</p>
            <p className="font-montserrat">Tel: +46-XXX-XXXX</p>
          </div>
        </div>
        <div className="border-t border-soft-white/10 mt-4 pt-4 text-center">
          <p className="font-montserrat">© 2024 Donna di Classe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;