
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductDisplayProps {
  products: Product[];
  categoryName: string;
}

const ProductDisplay = ({ products, categoryName }: ProductDisplayProps) => {
  return (
    <div 
      data-products-grid
      className="mt-12 opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards] transition-all duration-700"
      style={{
        animationFillMode: 'forwards',
        willChange: 'opacity, transform'
      }}
    >
      <h2 className="text-2xl font-playfair text-center mb-8">
        Våra {categoryName}
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group relative overflow-hidden aspect-[4/3] rounded-sm max-w-sm mx-auto w-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
