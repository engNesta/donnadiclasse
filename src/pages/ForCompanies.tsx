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
      icon: <Building2 className="w-12 h-12 text-italian-red" />,
      description: "Förhöj din spamiljö med våra lyxiga textilier. Perfekt för att skapa en avkopplande och exklusiv atmosfär för dina gäster.",
      benefits: ["Specialpriser för företagskunder", "Skräddarsydda lösningar", "Regelbundna uppdateringar"]
    },
    {
      title: "Hotell & Boende",
      icon: <Hotel className="w-12 h-12 text-italian-red" />,
      description: "Ge dina hotellrum en touch av italiensk elegans. Våra produkter passar perfekt för att skapa en lyxig hotellupplevelse.",
      benefits: ["Volymrabatter", "Snabba leveranser", "Personlig service"]
    },
    {
      title: "Butiker & Showrooms",
      icon: <Store className="w-12 h-12 text-italian-red" />,
      description: "Bli en återförsäljare av våra produkter och erbjud dina kunder det bästa inom italiensk heminredning.",
      benefits: ["Exklusiva återförsäljaravtal", "Marknadsföringsstöd", "Produktutbildning"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <div className="w-full bg-italian-red py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Företagssamarbeten</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{type.icon}</div>
                <h3 className="text-2xl font-playfair mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-italian-red mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-italian-green/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Intresserad av att samarbeta?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Låt oss diskutera hur vi kan skapa ett skräddarsytt samarbete som passar just din verksamhet.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-italian-red hover:bg-italian-red/90 text-white px-8 py-6 text-lg"
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