import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-italian-red/10 py-2 text-center">
          <p className="text-rich-black">Webbplatsen är under konstruktion</p>
        </div>

        <div className="container mx-auto px-4 py-8 mb-16">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-12">
            Våra Kollektioner
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clothes Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Kläder</CardTitle>
                <CardDescription>Upptäck vår exklusiva klädkollektion</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Clothes collection"
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${selectedCategory === 'clothes' ? 'bg-italian-red text-white' : 'bg-white text-italian-red'}`}
                  onClick={() => handleCategoryClick('clothes')}
                >
                  Utforska Kläder
                </Button>
              </CardFooter>
            </Card>

            {/* Bags Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Väskor</CardTitle>
                <CardDescription>Eleganta väskor för varje tillfälle</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Bags collection"
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${selectedCategory === 'bags' ? 'bg-italian-red text-white' : 'bg-white text-italian-red'}`}
                  onClick={() => handleCategoryClick('bags')}
                >
                  Utforska Väskor
                </Button>
              </CardFooter>
            </Card>

            {/* Jewelry Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Smycken</CardTitle>
                <CardDescription>Tidlösa smycken med italiensk design</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Jewelry collection"
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${selectedCategory === 'jewelry' ? 'bg-italian-red text-white' : 'bg-white text-italian-red'}`}
                  onClick={() => handleCategoryClick('jewelry')}
                >
                  Utforska Smycken
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Product Grid */}
          {selectedCategory && (
            <div className="mt-12 animate-fade-in">
              <h2 className="text-2xl font-playfair text-center mb-8">
                {selectedCategory === 'clothes' && 'Våra Kläder'}
                {selectedCategory === 'bags' && 'Våra Väskor'}
                {selectedCategory === 'jewelry' && 'Våra Smycken'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productsByCategory[selectedCategory as keyof typeof productsByCategory].map((product) => (
                  <div key={product.id} className="group relative overflow-hidden aspect-[3/4] rounded-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-montserrat text-lg">{product.name}</h3>
                      <p className="text-white font-montserrat">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;