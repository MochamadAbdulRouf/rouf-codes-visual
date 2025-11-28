import { Linkedin, Github, Instagram, Mail, FileText, BookOpen, Boxes } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mochabdulrouf/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/mochabdlrouf/", label: "Instagram" },
    { icon: Github, href: "https://github.com/MochamadAbdulRouf", label: "GitHub" },
    { icon: Boxes, href: "https://hub.docker.com/u/YOUR_DOCKERHUB_USERNAME", label: "Docker Hub" },
    { icon: Mail, href: "mailto:mochamadabdulrouf1@gmail.com", label: "Email" },
    { icon: FileText, href: "https://medium.com/@rouf08412", label: "Medium" },
    { icon: BookOpen, href: "https://mochabdulrouf.blogspot.com/", label: "Blogger" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Logo/Name */}
          <div className="flex items-center gap-3 text-lg font-semibold text-foreground">
            <img src="/logo-gw.png" alt="Logo" className="h-6 w-6 object-contain" />
            <span className="text-sm">© 2025 Mochamad Abdul Rouf — All rights reserved.</span>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
