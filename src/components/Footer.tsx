const Footer = () => {
  return (
    <footer className="bg-rich-black text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Besök oss</h3>
            <p>Västra Storgatan 32</p>
            <p>Kristianstad</p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Kontakt</h3>
            <p>Email: info@donnadiclasse.se</p>
            <p>Tel: +46-XXX-XXXX</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p>© 2024 Donna di Classe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;