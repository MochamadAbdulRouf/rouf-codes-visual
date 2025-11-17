import Navbar from "@/components/Navbar";
import { Mail, Linkedin, Github, Instagram, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mochabdulrouf/",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "Follow me",
      href: "https://www.instagram.com/mochabdlrouf/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my repositories",
      href: "https://github.com/MochamadAbdulRouf",
    },
    {
      icon: Mail,
      title: "Email",
      value: "mochamadabdulrouf1@gmail.com",
      href: "mailto:mochamadabdulrouf1@gmail.com",
    },
    {
      icon: FileText,
      title: "Medium",
      value: "Read my articles",
      href: "https://medium.com/@rouf08412",
    },
    {
      icon: BookOpen,
      title: "Blogger",
      value: "Visit my blog",
      href: "https://mochabdulrouf.blogspot.com/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing 
            new opportunities, collaborations, or just having a chat about DevOps and Cloud technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription className="mt-1">{method.value}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
