import { Linkedin, Github, Instagram, Mail, FileText, BookOpen } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: FileText, href: "https://medium.com", label: "Medium" },
    { icon: BookOpen, href: "https://blogger.com", label: "Blogger" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Logo/Name */}
          <div className="text-lg font-semibold text-foreground">
            Mochamad Abdul Rouf | @2025
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
