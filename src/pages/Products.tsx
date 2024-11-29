import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-playfair text-center mb-8">
          Våra Kollektioner
        </h1>
        <p className="text-center mb-16">Coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Products;