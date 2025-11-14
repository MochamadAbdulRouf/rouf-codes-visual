import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  const projects = [
    {
      title: "Kubernetes Cluster Automation",
      description: "Automated Kubernetes cluster provisioning and management using Terraform and Ansible on GCP.",
      techStack: ["Kubernetes", "Terraform", "Ansible", "GCP"],
      github: "https://github.com",
    },
    {
      title: "CI/CD Pipeline for Microservices",
      description: "Built end-to-end CI/CD pipeline with Jenkins and GitHub Actions for containerized microservices.",
      techStack: ["Jenkins", "GitHub Actions", "Docker", "AWS"],
      github: "https://github.com",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-bounce-slow">
          <div className="inline-flex flex-col items-center gap-2 text-muted-foreground group">
            <span className="text-sm font-medium tracking-wide">CHECK OUT MY PROJECTS</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/projects">View All My Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
