import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6E4]">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-italian-red/10 py-2 text-center">
          <p className="text-rich-black">Webbplatsen är under konstruktion</p>
        </div>

        <div className="container mx-auto px-4 py-8 mb-16">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-12">
            Våra Kollektioner
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clothes Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Kläder</CardTitle>
                <CardDescription>Upptäck vår exklusiva klädkollektion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-soft-gray rounded-md mb-4"></div>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary">Utforska Kläder</Button>
              </CardFooter>
            </Card>

            {/* Bags Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Väskor</CardTitle>
                <CardDescription>Eleganta väskor för varje tillfälle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-soft-gray rounded-md mb-4"></div>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary">Utforska Väskor</Button>
              </CardFooter>
            </Card>

            {/* Jewelry Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Smycken</CardTitle>
                <CardDescription>Tidlösa smycken med italiensk design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-soft-gray rounded-md mb-4"></div>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary">Utforska Smycken</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;