import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full absolute z-10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl font-bold text-soft-white drop-shadow-lg">
          DONNA DI CLASSE
        </Link>
        <div className="space-x-8">
          <Link to="/" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-lg">Hem</Link>
          <Link to="/products" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-lg">Produkter</Link>
          <Link to="/contact" className="text-soft-white hover:text-italian-red transition-colors drop-shadow-lg">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;