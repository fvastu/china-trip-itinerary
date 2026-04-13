import { useEffect } from "react";
import Navbar from "../components/itinerary/Navbar";
import Footer from "../components/itinerary/Footer";

export default function CityPage({ children }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 md:px-6 pb-16 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
