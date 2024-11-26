import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-soft-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl font-bold">
          DONNA DI CLASSE
        </Link>
        <div className="space-x-8">
          <Link to="/" className="hover:text-italian-red transition-colors">Hem</Link>
          <Link to="/products" className="hover:text-italian-red transition-colors">Produkter</Link>
          <Link to="/contact" className="hover:text-italian-red transition-colors">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;