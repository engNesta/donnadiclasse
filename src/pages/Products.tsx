import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoriesGrid from "../components/CategoriesGrid";
import ProductDisplay from "../components/ProductDisplay";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const productsByCategory = {
    clothes: [
      { id: 1, name: "Elegant Klänning", price: "2999 kr", image: "/Products/introPiece1.jpg" },
      { id: 2, name: "Sommarklänning", price: "1999 kr", image: "/Products/introP2.jpg" },
      { id: 3, name: "Kostym", price: "4999 kr", image: "/Products/introP3.jpg" },
      { id: 4, name: "Aftonklänning", price: "3999 kr", image: "/Products/introP4.jpg" },
    ],
    bags: [
      { id: 1, name: "Läderväska", price: "1999 kr", image: "/Products/introP2.jpg" },
      { id: 2, name: "Handväska", price: "2499 kr", image: "/Products/introP3.jpg" },
      { id: 3, name: "Axelremsväska", price: "1799 kr", image: "/Products/introP4.jpg" },
      { id: 4, name: "Aftonväska", price: "2999 kr", image: "/Products/introPiece1.jpg" },
    ],
    jewelry: [
      { id: 1, name: "Guldarmband", price: "999 kr", image: "/Products/introP3.jpg" },
      { id: 2, name: "Halsband", price: "1499 kr", image: "/Products/introP4.jpg" },
      { id: 3, name: "Örhängen", price: "799 kr", image: "/Products/introPiece1.jpg" },
      { id: 4, name: "Ring", price: "1299 kr", image: "/Products/introP2.jpg" },
    ],
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8 mb-16">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-12">
            Våra Kollektioner
          </h1>
          
          <CategoriesGrid 
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />

          {selectedCategory && (
            <ProductDisplay
              products={productsByCategory[selectedCategory as keyof typeof productsByCategory]}
              categoryName={selectedCategory === 'clothes' ? 'Kläder' : 
                          selectedCategory === 'bags' ? 'Väskor' : 'Smycken'}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;