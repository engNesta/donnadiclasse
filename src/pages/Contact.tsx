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
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="mb-8">Vi ser fram emot att höra från dig!</p>
            <div className="space-y-4">
              <p>Email: info@donnadiclasse.se</p>
              <p>Tel: +46-XXX-XXXX</p>
              <p>Adress: Västra Storgatan 32, Kristianstad</p>
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.629446976067!2d14.151595!3d56.029595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4654037b9dbf5555%3A0x86cd0b4c5e4b926c!2sV%C3%A4stra%20Storgatan%2032%2C%20291%2031%20Kristianstad!5e0!3m2!1sen!2sse!4v1710425163793!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;