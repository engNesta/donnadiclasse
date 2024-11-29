import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="w-full bg-italian-red/10 py-2 text-center">
          <p className="text-rich-black">Webbplatsen är under konstruktion</p>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-8">
            Kontakta Oss
          </h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-8">Vi ser fram emot att höra från dig!</p>
            <div className="space-y-4">
              <p>Email: info@donnadiclasse.se</p>
              <p>Tel: +46-XXX-XXXX</p>
              <p>Adress: Västra Storgatan 32, Kristianstad</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;