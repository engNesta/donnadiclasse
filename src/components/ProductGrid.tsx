import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const handleProductsClick = () => {
    window.scrollTo(0, 0);
  };

  const products = [
    {
      id: 1,
      image: "/Products/introPiece1.jpg",
      alt: "Elegant Italienskt Mode 1"
    },
    {
      id: 2,
      image: "/Products/introP2.jpg",
      alt: "Elegant Italienskt Mode 2"
    },
    {
      id: 3,
      image: "/Products/introP3.jpg",
      alt: "Elegant Italienskt Mode 3"
    },
    {
      id: 4,
      image: "/Products/introP4.jpg",
      alt: "Elegant Italienskt Mode 4"
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative overflow-hidden aspect-[3/4] rounded-sm">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-12">
        <Link to="/products" onClick={handleProductsClick}>
          <Button className="btn-secondary text-sm text-italian-red hover:text-italian-red bg-white hover:scale-95 transition-transform duration-300 !bg-white">
            Se Fler Kollektioner
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;