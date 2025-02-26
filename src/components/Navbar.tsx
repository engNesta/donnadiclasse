import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed z-10 py-4 transition-all duration-300 ${
      isScrolled || isMenuOpen || !isHomePage ? "bg-black/80 backdrop-blur-md shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-3xl font-bold text-soft-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          <span className="md:hidden">
            <span className="text-italian-green">D.</span>{" "}
            <span className="text-soft-white">D.</span>{" "}
            <span className="text-italian-red">C.</span>
          </span>
          <span className="hidden md:inline">
            <span className="text-italian-green">D.</span>{" "}
            <span className="text-soft-white">D.</span>{" "}
            <span className="text-italian-red">C.</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] opacity-70">Hem</Link>
          <Link to="/products" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] opacity-70">Produkter</Link>
          <Link to="/contact" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] opacity-70">Kontakt</Link>
          <Link to="/for-companies" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] opacity-70">För Företag</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-soft-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link 
                to="/" 
                className="text-rich-black hover:text-italian-red transition-colors opacity-70"
              >
                Hem
              </Link>
              <Link 
                to="/products" 
                className="text-rich-black hover:text-italian-red transition-colors opacity-70"
              >
                Produkter
              </Link>
              <Link 
                to="/contact" 
                className="text-rich-black hover:text-italian-red transition-colors opacity-70"
              >
                Kontakt
              </Link>
              <Link 
                to="/for-companies" 
                className="text-rich-black hover:text-italian-red transition-colors opacity-70"
              >
                För Företag
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;