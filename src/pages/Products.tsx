import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-italian-red/10 py-2 text-center">
          <p className="text-rich-black">Webbplatsen är under konstruktion</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-8">
            Våra Kollektioner
          </h1>
          <p className="text-center mb-16">Coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;