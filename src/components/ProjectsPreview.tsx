import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  const projects = [
    {
      title: "Implementing Application Deployment Using GKE and AR(Artifact Registry)",
      description: "Implementation of Application Deployment Process on Google Kubernetes Engine (GKE) using Artifact Registry (AR) as a storage place for Docker Image and Bash to automatically create a GKE cluster.",
      techStack: ["AR", "Bash", "GCP", "AWS"],
      github: "https://github.com/MochamadAbdulRouf/gke-valkyrie-app",
    },
    {
      title: "GKE Managed Prometheus Exporter Metrics",
      description: "Manage services to collect metrics from cloud source infrastructure using exporters.",
      techStack: ["Prometheus", "GKE", "GCP",],
      github: "https://github.com/MochamadAbdulRouf/gke-managed-prometheus-exporter-metrics",
    },
    {
      title: "Fullstack Application Deployment with Docker and Kubernetes",
      description: "A full-stack ReactJS and TypeScript application using Lovable Cloud's AI backend, then setting up best practice topology for deployment in production.",
      techStack: ["Containerized", "Orchestration", "Docker", "Kubernetes"],
      github: "https://github.com/MochamadAbdulRouf/myz-universe-reader",
    },
    {
      title: "Automation Build Docker Image for NodeJS Application",
      description: "Automate the build and push process of Docker Images for NodeJS Applications using GitHub Actions as a CI/CD tool.",
      techStack: ["CI/CD", "Github Action", "Container", "Docker"],
      github: "https://github.com/MochamadAbdulRouf/automation-build-docker-nodejs",
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
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
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
          <Button size="lg" asChild className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
            <Link to="/projects">View All My Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
