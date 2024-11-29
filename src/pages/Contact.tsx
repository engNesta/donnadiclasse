import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />

      <div className="sticky top-0 w-full bg-italian-red text-soft-white py-2 z-40 overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="inline-block px-4">Webbplatsen är under konstruktion</span>
          <span className="inline-block px-4">Webbplatsen är under konstruktion</span>
          <span className="inline-block px-4">Webbplatsen är under konstruktion</span>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-16">
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;