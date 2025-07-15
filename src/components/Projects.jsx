import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Crypto App",
      description:
        "A modern crypto wallet mobile app offering seamless, secure management of digital assets. It features a sleek UI and uses Firebase for cloud data synchronization and SQLite for fast, offline local storage.",
      image:
        "https://media.istockphoto.com/id/2178269162/photo/coin-on-cpu-background-data-and-innovation-cryptocurrency-technology-crypto-payments.webp?a=1&b=1&s=612x612&w=0&k=20&c=lK-8x_sem3xeLvwutbLpHAbMstGkRDnYs3H_Kh0Sjgs=",
      tags: ["Flutter", "Firebase", "API", "SQLite", "Authentication"],
      githubUrl: "https://www.github.com/aliarshad46515/Crypto-App",
      featured: true,
    },
    {
      id: 2,
      title: "RentHive - E-commerce Platform",
      description:
        "A modern mobile app for rental management with a sleek UI. It leverages Firebase for cloud data and SQLite for local storage, featuring map-based location selection and email communication.",
      image:
        "https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb21tZXJjZSUyMHN0b3JlfGVufDB8fDB8fHww",
      tags: [
        "Flutter",
        "EmailJS",
        "GoogleMaps",
        "Firebase",
        "SQLite",
        "Authentication",
      ],
      githubUrl: "https://www.github.com/aliarshad46515/Rent-Hive/",
      featured: true,
    },
    {
      id: 3,
      title: "NeuroMind",
      description:
        "A dedicated mobile app for neuromuscular disease management, offering a modern, intuitive front-end. Designed for ease of use, it provides a streamlined experience for users navigating complex conditions.",
      image:
        "https://plus.unsplash.com/premium_photo-1682705276681-58ee6e3bcab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluZHxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React Native", "Expo Go", "Lucide-React", "Core ML"],
      githubUrl: "https://www.github.com/aliarshad46515/NeuroMind/",
      featured: true,
    },
    {
      id: 4,
      title: "Homin App",
      description:
        "A modern home inventory app to effortlessly track product availability, receive low-stock alerts, and find nearby stores and deals. Also includes a BMI calculator for added convenience.",
      image:
        "https://images.unsplash.com/photo-1748609422318-7301636fb625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9tZSUyMGludmVudG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Flutter", "GoogleMaps", "EmailJS", "Firebase"],
      githubUrl: "https://www.github.com/aliarshad46515/Homin-App/",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="neon-text-accent">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent mobile and web applications, demonstrating
            innovation and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass hover-glow group cursor-pointer overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-normal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="neon" size="icon" className="rounded-full">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-primary border-0 neon-glow-primary">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-orbitron group-hover:neon-text-primary transition-all">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="neon-outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="neon-secondary"
            size="lg"
            className="hover-glow"
            onClick={() =>
              window.open("https://www.github.com/aliarshad46515", "_blank")
            }
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
