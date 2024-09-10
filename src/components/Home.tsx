import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <About />
      <FAQs />
      <Footer />
    </main>
  );
}
