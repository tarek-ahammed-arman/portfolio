import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LabsAndProjects from "@/components/LabsAndProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EducationAndResearch from "@/components/EducationAndResearch";
import ExpertiseAndCredentials from "@/components/ExpertiseAndCredentials";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ExpertiseAndCredentials />
      <EducationAndResearch />
      <LabsAndProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
