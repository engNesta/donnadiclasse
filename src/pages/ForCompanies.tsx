import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Hotel, Store, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ForCompanies = () => {
  const navigate = useNavigate();

  const collaborationTypes = [
    {
      title: "Spa & Wellness",
      icon: <Building2 className="w-12 h-12 text-rich-black/70" />,
      description: "Förhöj din spamiljö med våra lyxiga textilier. Perfekt för att skapa en avkopplande och exklusiv atmosfär för dina gäster.",
      benefits: ["Specialpriser för företagskunder", "Skräddarsydda lösningar", "Regelbundna uppdateringar"]
    },
    {
      title: "Hotell & Boende",
      icon: <Hotel className="w-12 h-12 text-rich-black/70" />,
      description: "Ge dina hotellrum en touch av italiensk elegans. Våra produkter passar perfekt för att skapa en lyxig hotellupplevelse.",
      benefits: ["Volymrabatter", "Snabba leveranser", "Personlig service"]
    },
    {
      title: "Butiker & Showrooms",
      icon: <Store className="w-12 h-12 text-rich-black/70" />,
      description: "Bli en återförsäljare av våra produkter och erbjud dina kunder det bästa inom italiensk heminredning.",
      benefits: ["Exklusiva återförsäljaravtal", "Marknadsföringsstöd", "Produktutbildning"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-soft-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <div className="w-full bg-rich-black py-16 text-center text-soft-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Företagssamarbeten</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Upptäck möjligheterna med att samarbeta med Donna di Classe och lyft din verksamhet med våra exklusiva italienska textilier.
            </p>
          </div>
        </div>

        {/* Collaboration Types Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-soft-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-rich-black/5"
              >
                <div className="mb-6">{type.icon}</div>
                <h3 className="text-2xl font-playfair mb-4 text-rich-black">{type.title}</h3>
                <p className="text-rich-black/70 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-rich-black/80">
                      <ArrowRight className="w-4 h-4 text-rich-black/60 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-rich-black/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-rich-black">
              Intresserad av att samarbeta?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-rich-black/70">
              Låt oss diskutera hur vi kan skapa ett skräddarsytt samarbete som passar just din verksamhet.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-rich-black hover:bg-rich-black/90 text-soft-white px-8 py-6 text-lg"
            >
              Kontakta oss
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForCompanies;