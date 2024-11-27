import { Button } from "./ui/button";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Elegant Italian Fashion 1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Elegant Italian Fashion 2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Elegant Italian Fashion 3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Elegant Italian Fashion 4"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative overflow-hidden">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="btn-secondary text-lg">
          View More Collections
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;