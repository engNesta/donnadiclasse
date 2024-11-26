import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="hero-video-wrapper">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hero-video"
          >
            <source src="/IntroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                DONNA DI CLASSE
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair italic mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                Italienskt dammode i Kristianstad
              </h2>
              <p className="text-lg md:text-xl font-playfair drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-1000">
                "Dare to be beautiful"
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;