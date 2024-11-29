import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForCompanies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-italian-red/10 py-2 text-center">
          <p className="text-rich-black">Webbplatsen är under konstruktion</p>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-8">För Företag</h1>
          <p className="text-center text-gray-600">Denna sida är under utveckling.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForCompanies;