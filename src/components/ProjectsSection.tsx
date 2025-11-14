import { Github, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
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
    {
      title: "Infrastructure Monitoring Stack",
      description: "Implemented comprehensive monitoring solution using Prometheus and Grafana for cloud infrastructure.",
      techStack: ["Prometheus", "Grafana", "Docker", "Linux"],
      github: "https://github.com",
    },
    {
      title: "Container Orchestration Platform",
      description: "Designed and deployed a scalable container orchestration platform with Docker Swarm and Kubernetes.",
      techStack: ["Docker", "Kubernetes", "AWS", "Terraform"],
      github: "https://github.com",
    },
    {
      title: "Automated Backup System",
      description: "Created automated backup and disaster recovery solution for cloud-based applications.",
      techStack: ["Bash", "Python", "AWS S3", "Cron"],
      github: "https://github.com",
    },
    {
      title: "Infrastructure as Code Templates",
      description: "Developed reusable IaC templates for rapid deployment of cloud infrastructure across multiple providers.",
      techStack: ["Terraform", "Ansible", "GCP", "AWS"],
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my DevOps and Cloud infrastructure projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
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
      </div>
    </section>
  );
};

export default ProjectsSection;
