import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed z-10 py-4 transition-all duration-300 ${
      isScrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl font-bold text-soft-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          DONNA DI CLASSE
        </Link>
        <div className="space-x-8">
          <Link to="/" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Hem</Link>
          <Link to="/products" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Produkter</Link>
          <Link to="/contact" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;