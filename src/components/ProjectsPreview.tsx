import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  const projects = [
    {
      title: "Implementing Application Deployment Using GKE and AR(Artifact Registry)",
      description: "Implementasi Proses Deployment Aplikasi pada Google Kubernetes Engine (GKE) dengan menggunakan Artifact Registry (AR) sebagai tempat penyimpanan Docker Image dan Bash untuk melakukan pembuatan cluster GKE secara otomatis.",
      techStack: ["AR", "Bash", "GCP", "AWS"],
      github: "https://github.com/MochamadAbdulRouf/gke-valkyrie-app",
    },
    {
      title: "GKE Managed Prometheus Exporter Metrics",
      description: "Manage service untuk mengumpulkan metric dari infrastructure cloud source menggunakan exportes.",
      techStack: ["Prometheus", "GKE", "GCP",],
      github: "https://github.com/MochamadAbdulRouf/gke-managed-prometheus-exporter-metrics",
    },
    {
      title: "Fullstack Application Deployment with Docker and Kubernetes",
      description: "Sebuah Aplikasi fullstack ReactJS dan TypeScript Menggunakan Backend Ai dari Lovable Cloud, Lalu melakukan Set Up Topologi best practice untuk melakukan Deployment di Production.",
      techStack: ["Containerized", "Orchestration", "Docker", "Kubernetes"],
      github: "https://github.com/MochamadAbdulRouf/myz-universe-reader",
    },
    {
      title: "Automation Build Docker Image for NodeJS Application",
      description: "Automasi proses build dan push Docker Image untuk Aplikasi NodeJS menggunakan GitHub Actions sebagai CI/CD tool.",
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
          <Button size="lg" asChild>
            <Link to="/projects">View All My Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
