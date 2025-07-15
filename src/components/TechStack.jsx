import { Badge } from "../components/ui/badge";

const TechStack = () => {
  const skills = [
    { name: "Mobile Development", level: 75, color: "primary" },
    { name: "Frontend Development", level: 80, color: "secondary" },
    { name: "Backend & Databases", level: 70, color: "accent" },
    { name: "UI/UX Design", level: 80, color: "success" },
    { name: "Cloud Services", level: 65, color: "primary" },
    { name: "Version Control", level: 80, color: "secondary" },
  ];

  const techStack = [
    "React Native",
    "Flutter",
    "Kotlin",
    "React",
    "Node.js",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Figma",
    "VSCode",
    "Android Studio",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="neon-text-success">My Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks I use to build exceptional
            mobile and web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills with progress bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm font-mono neon-text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out neon-glow-primary"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack grid */}
          <div className="glass rounded-2xl p-8 hover-glow">
            <h3 className="text-2xl font-orbitron font-semibold mb-6 neon-text-primary text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-neon-primary transition-all hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
