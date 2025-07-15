import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
