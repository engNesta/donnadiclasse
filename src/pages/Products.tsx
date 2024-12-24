import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoriesGrid from "../components/CategoriesGrid";
import ProductDisplay from "../components/ProductDisplay";
import VideoBanner from "../components/VideoBanner";
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
      { id: 1, name: "", price: "", image: "/Products/Bags/Bag 1.jpg" },
      { id: 2, name: "", price: "", image: "/Products/Bags/Bag 2.jpg" },
      { id: 3, name: "", price: "", image: "/Products/Bags/Bag 3.jpg" },
      { id: 4, name: "", price: "", image: "/Products/Bags/Bag 4.jpg" },
      { id: 5, name: "", price: "", image: "/Products/Bags/Bag 5.jpg" },
      { id: 6, name: "", price: "", image: "/Products/Bags/Bag 6.jpg" },
      { id: 7, name: "", price: "", image: "/Products/Bags/Bag 7.jpg" },
      { id: 8, name: "", price: "", image: "/Products/Bags/Bag 8.jpg" },
    ],
    jewelry: [
      { id: 1, name: "Guldarmband", price: "999 kr", image: "/Products/introP3.jpg" },
      { id: 2, name: "Halsband", price: "1499 kr", image: "/Products/introP4.jpg" },
      { id: 3, name: "Örhängen", price: "799 kr", image: "/Products/introPiece1.jpg" },
      { id: 4, name: "Ring", price: "1299 kr", image: "/Products/introP2.jpg" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      <VideoBanner />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 mb-16">
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-montserrat">
            Våra produkter är helt inspirerade av italiensk design och hantverk. Vi strävar efter att leverera högsta kvalitet i varje detalj, från material till finish, och erbjuder tidlös elegans med äkta italienskt arv.
          </p>
          
          <CategoriesGrid 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
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