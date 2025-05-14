
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { Link } from "react-router-dom";

const Index = () => {
  const handleStoreVisitClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
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
            <source src="https://i.imgur.com/0VvVrjg.mp4" type="video/mp4" />
            Din webbläsare stöder inte videotaggen.
          </video>
          {/* Add a semi-transparent black overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15"></div>
          <div className="absolute top-0 left-0 w-full h-[120vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-2 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <span className="text-italian-green">D</span>ONNA&nbsp;&nbsp;
                <span className="text-soft-white">D</span>I&nbsp;&nbsp;
                <span className="text-italian-red">C</span>LASSE
              </h1>
              <div className="w-full flex h-1 mb-4">
                <div className="h-full flex-1 bg-italian-green"></div>
                <div className="h-full flex-1 bg-soft-white"></div>
                <div className="h-full flex-1 bg-italian-red"></div>
              </div>
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

        {/* Store Visit Section */}
        <section className="py-16 bg-gradient-to-b from-[#FEF6E4] via-[#fff8ed] to-white">
          <div className="w-full px-0">
            <div className="w-full">
              <div className="relative w-full aspect-video overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  webkit-playsinline="true"
                  preload="auto"
                  className="w-full h-full object-cover"
                  onLoadedMetadata={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.playbackRate = 0.75;
                  }}
                >
                  <source src="https://i.imgur.com/6igHrf2.mp4" type="video/mp4" />
                  Din webbläsare stöder inte videotaggen.
                </video>
                {/* Add a semi-transparent overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                {/* Add the text overlay with fade-in animation */}
                <Link 
                  to="/contact" 
                  className="absolute inset-0 flex items-center justify-center opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-1000 cursor-pointer hover:bg-black hover:bg-opacity-40 transition-colors"
                  onClick={handleStoreVisitClick}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    Besök vår butik
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
