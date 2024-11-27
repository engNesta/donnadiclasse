import { Button } from "./ui/button";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "/Products/introPiece1.jpg",
      alt: "Elegant Italian Fashion 1"
    },
    {
      id: 2,
      image: "/Products/introP2.jpg",
      alt: "Elegant Italian Fashion 2"
    },
    {
      id: 3,
      image: "/Products/introP3.jpg",
      alt: "Elegant Italian Fashion 3"
    },
    {
      id: 4,
      image: "/Products/introP4.jpg",
      alt: "Elegant Italian Fashion 4"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative overflow-hidden aspect-[3/4]">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="btn-secondary text-sm text-italian-red bg-white hover:scale-95 transition-transform duration-300 !bg-white">
          View More Collections
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;