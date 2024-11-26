import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="hero-video-wrapper">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source 
              src="https://player.vimeo.com/external/451991234.sd.mp4?s=a3f3c5f4d9f8e4f4e4f4e4f4e4f4e4f4e4f4e4f4&profile_id=165&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                DONNA DI CLASSE
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair italic mb-2">
                Italienskt dammode i Kristianstad
              </h2>
              <p className="text-lg md:text-xl font-playfair">
                Dare to be beautiful
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg leading-relaxed">
              Vad trevligt att du har hittat till vår underbara lilla butik! Här nedan kan du klicka dig vidare till vårt breda produktutbud av högkvalitativt, elegant och glamoröst dammode för alla åldrar, former och tillställningar.
            </p>
            <p className="text-lg leading-relaxed">
              Har du några frågor? Tveka inte att höra av dig till oss så hjälper vi dig att hitta det perfekta plagget för just dig.
            </p>
            <p className="text-lg leading-relaxed">
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