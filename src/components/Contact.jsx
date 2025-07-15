import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    // Removed React.FormEvent type annotation
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alyyarshad57@gmail.com",
      link: "mailto:alyyarshad57@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+923 418193401",
      link: "tel:+923418193401",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/aliarshad46515/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/aly-arshad-4u/",
    },
    {
      icon: FaBriefcase,
      label: "Fiverr",
      link: "https://www.fiverr.com/s/WEXLjdx",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="neon-text-primary">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your app idea to life? Let's collaborate and create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass border-primary/20 hover:border-primary/50 transition-all duration-normal">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron neon-text-accent">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-input/50 border-primary/30 focus:border-primary focus:ring-primary/50 focus:shadow-neon-primary transition-all"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-input/50 border-primary/30 focus:border-primary focus:ring-primary/50 focus:shadow-neon-primary transition-all"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-input/50 border-primary/30 focus:border-primary focus:ring-primary/50 focus:shadow-neon-primary transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="neon"
                  size="lg"
                  className="w-full hover-glow group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover-glow group transition-all"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center neon-glow-primary group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-semibold group-hover:neon-text-primary transition-all">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-semibold mb-4 neon-text-secondary">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform neon-glow-accent"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5 text-accent-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="glass rounded-lg p-6 text-center">
              <h3 className="text-xl font-orbitron font-semibold mb-2 neon-text-success">
                Ready to Start?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss your project and turn your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
