import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative w-full h-[calc(100vh-0px)] overflow-hidden">
          <img 
            src="/DDCImage.jpg" 
            alt="Donna Di Classe Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-[120vh] flex items-center justify-center">
            <div className="text-center text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                DONNA DI CLASSE
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                Italienskt dammode i Kristianstad
              </h2>
              <p className="text-lg md:text-xl font-playfair drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-1000">
                "Dare to be beautiful"
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full py-8 text-center bg-black overflow-hidden">
          <p className="text-xl font-playfair text-soft-white animate-[marquee_20s_linear_infinite]">
            Website under construction - Vi arbetar med att göra hemsidan ännu bättre!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;