import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RecipesSection from "@/components/RecipesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <RecipesSection />
    <PricingSection />
    {/*<TestimonialsSection />*/}
    <ContactSection />
    <Footer />
  </>
);

export default Index;
