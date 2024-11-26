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
            poster="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          >
            <source src="/IntroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center text-soft-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                DONNA DI CLASSE
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair italic mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                Italienskt dammode i Kristianstad
              </h2>
              <p className="text-lg md:text-xl font-playfair drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                "Dare to be beautiful"
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              Vad trevligt att du har hittat till vår underbara lilla butik! Här nedan kan du klicka dig vidare till vårt breda produktutbud av högkvalitativt, elegant och glamoröst dammode för alla åldrar, former och tillställningar.
            </p>
            <p className="text-lg leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              Har du några frågor? Tveka inte att höra av dig till oss så hjälper vi dig att hitta det perfekta plagget för just dig.
            </p>
            <p className="text-lg leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              Varmt välkommen in till oss på Västra Storgatan 32 i Kristianstad för optimerad personlig service!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;