import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import SectionBackground from "@/components/SectionBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      {/* Hero section with original background */}
      <div className="relative">
        <HeroBackground />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      
      {/* Other sections with cleaner background */}
      <div className="relative">
        <SectionBackground />
        <div className="relative z-10">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;