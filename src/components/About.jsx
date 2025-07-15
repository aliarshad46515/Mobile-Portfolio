import Profile from "/Port_Pro.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 rounded-full overflow-hidden">
              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>

              {/* Profile image */}
              <img
                src={Profile}
                alt="Developer Profile"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
              />

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center neon-glow-primary float">
                <span className="text-primary-foreground font-bold text-lg">
                  ⚛️
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center neon-glow-accent float delay-1000">
                <span className="text-accent-foreground font-bold text-lg">
                  📱
                </span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="neon-text-secondary">About Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a{" "}
                <span className="neon-text-primary font-semibold">
                  dedicated mobile app developer
                </span>{" "}
                with over a year of experience in creating intuitive and
                user-friendly applications. I focus on building seamless digital
                experiences that connect cutting-edge technology with everyday
                usability.
              </p>

              <p>
                My journey began with a passion for technology, allowing me to
                collaborate with startups and established companies to realize
                their digital visions. My expertise includes cross-platform
                development, performance enhancement, and creating user-friendly
                apps.
              </p>

              <p>
                Outside of coding, I explore the latest tech trends, participate
                in open-source projects, and mentor emerging developers. I
                prioritize continuous learning in the rapidly evolving mobile
                technology landscape.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold neon-text-primary">
                  4
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold neon-text-accent">
                  1
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold neon-text-success">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
