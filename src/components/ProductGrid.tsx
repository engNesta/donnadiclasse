import { Button } from "./ui/button";
import { Facebook, Instagram } from "lucide-react";

const ProductGrid = () => {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
        <Button className="btn-secondary text-sm text-italian-red hover:text-italian-red bg-white hover:scale-95 transition-transform duration-300 !bg-white">
          Se Fler Kollektioner
        </Button>
      </div>
      
      <div className="text-center mt-12 p-8 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] border-t-[12px] border-b-[12px] border-t-italian-green border-b-italian-red bg-white">
        <h3 className="font-playfair text-2xl mb-6">Följ oss</h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/Donna.Di.Classe.Sweden" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-italian-red hover:text-rich-black transition-colors"
          >
            <Facebook size={32} />
          </a>
          <a 
            href="https://www.instagram.com/donna.di.classe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-italian-red hover:text-rich-black transition-colors"
          >
            <Instagram size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;