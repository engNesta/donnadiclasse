
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
      { id: 1, name: "", price: "", image: "https://i.imgur.com/mv7b5bO.jpg" },
      { id: 2, name: "", price: "", image: "https://i.imgur.com/9D2naNi.jpg" },
      { id: 3, name: "", price: "", image: "https://i.imgur.com/SGdK65k.jpg" },
      { id: 4, name: "", price: "", image: "https://i.imgur.com/Ouam2xR.jpg" },
      { id: 5, name: "", price: "", image: "https://i.imgur.com/hZIeVfG.jpg" },
      { id: 6, name: "", price: "", image: "https://i.imgur.com/8fHh575.jpg" },
      { id: 7, name: "", price: "", image: "https://i.imgur.com/z3MGLBA.jpg" },
      { id: 8, name: "", price: "", image: "https://i.imgur.com/2TrIexg.jpg" },
    ],
    bags: [
      { id: 1, name: "", price: "", image: "Products/Bags/Bag 1.jpg" },
      { id: 2, name: "", price: "", image: "Products/Bags/Bag 2.jpg" },
      { id: 3, name: "", price: "", image: "Products/Bags/Bag 3.jpg" },
      { id: 4, name: "", price: "", image: "Products/Bags/Bag 4.jpg" },
      { id: 5, name: "", price: "", image: "Products/Bags/Bag 5.jpg" },
      { id: 6, name: "", price: "", image: "Products/Bags/Bag 6.jpg" },
      { id: 7, name: "", price: "", image: "Products/Bags/Bag 7.jpg" },
      { id: 8, name: "", price: "", image: "Products/Bags/Bag 8.jpg" },
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
              categoryName={selectedCategory === 'clothes' ? 'Kläder' : 'Väskor'}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
