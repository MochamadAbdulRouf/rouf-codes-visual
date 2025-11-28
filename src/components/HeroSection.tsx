import { Linkedin, Github, Instagram, Mail, BookOpen, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/me.jpg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mochabdulrouf/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/mochabdlrouf/", label: "Instagram" },
    { icon: Github, href: "https://github.com/MochamadAbdulRouf", label: "GitHub" },
    { icon: Mail, href: "mailto:mochamadabdulrouf1@gmail.com", label: "Email" },
    { icon: FileText, href: "https://medium.com/@rouf08412", label: "Medium" },
    { icon: BookOpen, href: "https://mochabdulrouf.blogspot.com/", label: "Blogger" },
  ];

  const expertise = [
    "Linux Server Administration",
    "Kubernetes & Cloud (GCP, AWS)",
    "Docker & Docker Compose",
    "CI/CD Pipelines (Jenkins, GitHub Actions)",
    "Infrastructure as Code (Terraform, Ansible)",
    "Monitoring (Prometheus, Grafana)",
  ];

  return (
    <div className="min-h-screen grid-background pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Hello, I'm Rouf.
            </h1>
            
            <div className="text-xl md:text-2xl">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded font-semibold">
                Fresh Graduate
              </span>
              <span className="text-foreground ml-2">
                specializing in DevOps and Cloud.
              </span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am passionate about cloud infrastructure, automation, and server administration.
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Expertise in:</h3>
              <ul className="space-y-2">
                {expertise.map((skill, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <span className="text-accent mr-2">▪</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                <a
                  href="https://drive.google.com/file/d/1WibicNYyreZtrDQFLQwxFGIaf9l28ZjT/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center animate-fade-in-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
              <img
                src={avatarImage}
                alt="Mochamad Abdul Rouf"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
