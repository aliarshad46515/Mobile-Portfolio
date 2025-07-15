import { Button } from "../components/ui/button";
import { ArrowDown, Code, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/20 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-6 flex items-center justify-center gap-2 text-success font-mono text-sm tracking-wider">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Available for new projects</span>
          </div>

          {/* Main heading with neon effect */}
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 leading-tight">
            <span className="block neon-text-primary">Crafting Digital</span>
            <span className="block gradient-text">Experiences</span>
            <span className="block neon-text-accent">
              with Code & Creativity
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a mobile app developer passionate about building intuitive and
            high-performance applications that bring ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="neon"
              size="xl"
              className="hover-glow group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Code className="group-hover:rotate-12 transition-transform" />
              Explore My Work
            </Button>
            <Button
              variant="neon-outline"
              size="xl"
              className="hover-glow group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Smartphone className="group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-primary w-6 h-6 opacity-70" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 float">
        <div className="w-16 h-16 border-2 border-primary/30 rounded-lg rotate-12 glass"></div>
      </div>
      <div className="absolute bottom-32 left-20 float delay-1000">
        <div className="w-12 h-12 border-2 border-secondary/30 rounded-full glass"></div>
      </div>
    </section>
  );
};

export default Hero;
