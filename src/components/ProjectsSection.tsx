import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "React Thermo App (Dockerized)",
      description:
        "Temperature Conversion Application built using ReactJS and implemented using Docker",
      techStack: ["Container", "Docker", "ReactJS"],
      github: "https://github.com/MochamadAbdulRouf/reactjs-docker",
    },
    {
      title: "Laravel Container Environment",
      description:
        "Development Environment for Laravel Applications Containerized using Docker, with Nginx as the web server, MySQL as the database, and Redis as caching.",
      techStack: ["Container", "Redis", "Docker", "MySQL", "Nginx", "Laravel"],
      github:
        "https://github.com/MochamadAbdulRouf/laravel-containerized-environment",
    },
    {
      title: "Secure Image Docker using Trivy",
      description:
        "Implementing Security & Optimization in Docker Images, Creating a secure and optimized Docker Image for use in production environments.",
      techStack: ["Container", "Docker", "Trivy"],
      github: "https://github.com/MochamadAbdulRouf/secure-image-docker",
    },
    {
      title: "Laravel e-Library Deployment",
      description:
        "Deployment of Laravel-based e-Library Application using Docker, with Bash Scripting implementation to automate the deployment process within the container.",
      techStack: ["Docker", "Bash", "MySQL", "Nginx", "Laravel"],
      github: "https://github.com/MochamadAbdulRouf/Laravel-Perpus-Docker",
    },
    {
      title: "Microstack Docker",
      description:
        "Build a simple environment consisting of Api Service and Database, then connect them through Custom Network.",
      techStack: ["Nginx", "NodeJS", "PostgreSQL", "Docker"],
      github: "https://github.com/MochamadAbdulRouf/microstack-docker-lab",
    },
    {
      title: "Fullstack Application Deployment with Docker and Kubernetes",
      description:
        "A full-stack ReactJS and TypeScript application using Lovable Cloud's AI backend, then setting up best practice topology for deployment in production.",
      techStack: ["Containerized", "Orchestration", "Docker", "Kubernetes"],
      github: "https://github.com/MochamadAbdulRouf/myz-universe-reader",
    },
    {
      title:
        "Monitoring Container with Docker, Prometheus, Grafana, and cAdvisor",
      description:
        "Implementation of Docker Container Monitoring using Prometheus to collect and store metric data, cAdvisor to collect real-time container resource usage, and Grafana to visualize the data.",
      techStack: ["Monitoring", "Grafana", "cAdvisor", "Prometheus", "Docker"],
      github: "https://github.com/MochamadAbdulRouf/Grafana-Prometheus-Docker",
    },
    {
      title: "Automation Build Docker Image for NodeJS Application",
      description:
        "Automate the process of building and pushing Docker Images for NodeJS applications using GitHub Actions as a CI/CD tool.",
      techStack: ["CI/CD", "Github Action", "Container", "Docker"],
      github:
        "https://github.com/MochamadAbdulRouf/automation-build-docker-nodejs",
    },
    {
      title:
        "Implementation of a Simple GKE (Google Kubernetes Engine) Project",
      description:
        "Create a simple Docker image, then push the image to GCR (Google Container Registry), and deploy it on Google Kubernetes Engine (GKE).",
      techStack: ["GKE", "GCR", "GCP", "Docker", "Kubernetes"],
      github: "https://github.com/MochamadAbdulRouf/project-simple-gke",
    },
    {
      title:
        "Implementing Application Deployment Using GKE and AR(Artifact Registry)",
      description:
        "Implementation of Application Deployment Process on Google Kubernetes Engine (GKE) using Artifact Registry (AR) as a storage location for Docker Image and Bash to automatically create GKE clusters.",
      techStack: ["AR", "Bash", "GCP", "AWS"],
      github: "https://github.com/MochamadAbdulRouf/gke-valkyrie-app",
    },
    {
      title: "GKE Managed Prometheus Exporter Metrics",
      description:
        "Manage services to collect metrics from cloud source infrastructure using exporters.",
      techStack: ["Prometheus", "GKE", "GCP"],
      github:
        "https://github.com/MochamadAbdulRouf/gke-managed-prometheus-exporter-metrics",
    },
    {
      title: "Bash Scripting Automation Setup Server",
      description:
        "A collection of project scripts for automating server setup, such as log archive tools, server performance stats, etc.",
      techStack: ["Bash", "Linux", "Scripting"],
      github: "https://github.com/MochamadAbdulRouf/Hands-on-Bash-Script-Labs",
    },
    {
      title: "Automated Server Hardening & Docker Provisioning with Ansible",
      description:
        "This project implements the use of Ansible to automate the server provisioning process from a fresh OS to production readiness. The main focus of this project is security hardening and container environment preparation (Docker environment).",
      techStack: ["DevOps", "IAC", "Ansible"],
      github:
        "https://github.com/MochamadAbdulRouf/Hands-on-Ansible-Labs/tree/master/ansible-server-hardening",
    },
    {
      title: "Automated Pipeline: Jenkins, Docker, and SonarQube",
      description:
        "This project includes the phases of Code Integration, Quality Inspection, Security Scanning, Containerization, and Automated Deployment to separate production servers.",
      techStack: [
        "DevOps",
        "CI/CD",
        "Docker",
        "Container",
        "Sonar Qube",
        "Jenkins",
      ],
      github:
        "https://github.com/MochamadAbdulRouf/Local-Enterprise-Grade-Secure-CI-CD-Pipeline",
    },
    {
      title: "GCP Infrastructure Automation with Terraform",
      description:
        "This Terraform project contains GCP (Google Cloud Platform) infrastructure with the following resources: VM Instances, VPC, Cloud Storage Bucket, and Backend Bucket. It was created using Modules for perfect implementation and easy modification later on.",
      techStack: ["DevOps", "IaC", "Terraform", "GCP"],
      github:
        "https://github.com/MochamadAbdulRouf/Terraform-AWS-GCP-IAC/tree/master/GCP/Project-Infrastructure-GCP",
    },
    {
      title: "Terraform AWS High Availability Web Application",
      description:
        "This project demonstrates a production-ready approach to deploying web infrastructure on AWS using Terraform. It focuses on modularity, scalability, and security best practices.",
      techStack: ["DevOps", "IaC", "Terraform", "AWS"],
      github:
        "https://github.com/MochamadAbdulRouf/Terraform-AWS-GCP-IAC/tree/master/AWS/aws-terraform-ha-webapp",
    },
    {
      title: "SportOn Website FullStack",
      description:
        "SportOn is a full-stack sports equipment buying and selling website designed to provide a fast, secure, and modern online shopping experience. The platform supports various sports product categories such as fitness, soccer, basketball, running, and outdoor sports.",
      techStack: ["React", "NextJS", "ExpressJS", "API", "MongoDB", "Vercel"],
      github:
        "https://github.com/MochamadAbdulRouf/Terraform-AWS-GCP-IAC/tree/master/AWS/aws-terraform-ha-webapp",
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
      <div className="text-center mt-16 border-t pt-12">
        <h3 className="text-2xl font-semibold mb-6">Find All My Project</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Tombol 1: GITHUB (Contoh) */}
          <Button
            size="lg"
            asChild
            className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            <a
              href="https://github.com/MochamadAbdulRouf" // <-- GANTI DENGAN LINK PROFIL ANDA
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              My GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
