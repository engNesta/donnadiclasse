import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <div className="fixed top-0 w-full bg-italian-red text-soft-white py-2 z-50 overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="inline-block px-4">Webbplatsen är under konstruktion</span>
          <span className="inline-block px-4">Webbplatsen är under konstruktion</span>
          <span className="inline-block px-4">Webbplatsen är under konstruktion</span>
        </div>
      </div>
      
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative w-full h-[calc(100vh-0px)] overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            webkit-playsinline="true"
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/IntroVideo.mp4" type="video/mp4" />
            Din webbläsare stöder inte videotaggen.
          </video>
          <div className="absolute top-0 left-0 w-full h-[120vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-2 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                DONNA DI CLASSE
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-playfair mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                Italienskt dammode i Kristianstad
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-playfair drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-1000">
                "Våga vara vacker"
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full flex">
          <div className="h-2 flex-1 bg-italian-green"></div>
          <div className="h-2 flex-1 bg-soft-white"></div>
          <div className="h-2 flex-1 bg-italian-red"></div>
        </div>

        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
};

export default Index;