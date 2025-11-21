import { Github, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "React Thermo App (Dockerized)",
      description: "Aplikasi Konversi Suhu yang dibangun menggunakan ReactJS dan Di Deploy menggunakan Docker",
      techStack: ["Container", "Docker", "ReactJS"],
      github: "https://github.com/MochamadAbdulRouf/reactjs-docker",
    },
    {
      title: "Laravel Container Environment",
      description: "Development Environment untuk Aplikasi Laravel yang di Containerize menggunakan Docker, Dengan Nginx sebagai server web, MySQL sebagai basis database, dan Redis sebagai caching.",
      techStack: ["Container", "Redis", "Docker", "MySQL", "Nginx", "Laravel"],
      github: "https://github.com/MochamadAbdulRouf/laravel-containerized-environment",
    },
    {
      title: "Secure Image Docker using Trivy",
      description: "Implementasi Security & Optimization pada Docker Image, Membuat sebuah Image Docker yang aman dan optimal untuk digunakan pada lingkungan production.",
      techStack: ["Container", "Docker", "Trivy"],
      github: "https://github.com/MochamadAbdulRouf/secure-image-docker",
    },
    {
      title: "Laravel e-Library Deployment",
      description: "Deployment Aplikasi e-Library berbasis Laravel menggunakan Docker, Dengan implementasi Bash Scripting untuk mengotomatisasi proses deployment didalam container.",
      techStack: ["Docker", "Bash", "MySQL", "Nginx","Laravel"],
      github: "https://github.com/MochamadAbdulRouf/Laravel-Perpus-Docker",
    },
    {
      title: "Microstack Docker",
      description: "Membangun sebuah lingkungan sederhana yang terdiri dari Api Service dan Database, Lalu dihubungkan melalui Custom Network",
      techStack: ["Nginx", "NodeJS", "PostgreSQL", "Docker"],
      github: "https://github.com/MochamadAbdulRouf/microstack-docker-lab",
    },
    {
      title: "Fullstack Application Deployment with Docker and Kubernetes",
      description: "Sebuah Aplikasi fullstack ReactJS dan TypeScript Menggunakan Backend Ai dari Lovable Cloud, Lalu melakukan Set Up Topologi best practice untuk melakukan Deployment di Production.",
      techStack: ["Containerized", "Orchestration", "Docker", "Kubernetes"],
      github: "https://github.com/MochamadAbdulRouf/myz-universe-reader",
    },
    {
      title: "Monitoring Container with Docker, Prometheus, Grafana, and cAdvisor",
      description: "Implementasi Monitoring Container Docker menggunakan Prometheus sebagai pengambil dan menyimpan data Metric, cAdvisor untuk mengambil penggunakan sumberdaya container secara realtime, Dan Grafana untuk memvisualisasikan data.",
      techStack: ["Monitoring","Grafana", "cAdvisor", "Prometheus", "Docker"],
      github: "https://github.com/MochamadAbdulRouf/Grafana-Prometheus-Docker",
    },
    {
      title: "Automation Build Docker Image for NodeJS Application",
      description: "Automasi proses build dan push Docker Image untuk Aplikasi NodeJS menggunakan GitHub Actions sebagai CI/CD tool.",
      techStack: ["CI/CD", "Github Action", "Container", "Docker"],
      github: "https://github.com/MochamadAbdulRouf/automation-build-docker-nodejs",
    },
    {
      title: "Implementation of a Simple GKE (Google Kubernetes Engine) Project",
      description: "Membuat sebuah image Docker sederhana, Lalu melakukan Push image ke GCR (Google Container Registry), Dan melakukan Deployment pada Google Kubernetes Engine (GKE).",
      techStack: ["GKE", "GCR", "GCP", "Docker", "Kubernetes"],
      github: "https://github.com/MochamadAbdulRouf/project-simple-gke",
    },
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
      title: "Bash Scripting Automation Setup Server",
      description: "Kumpulan project script untuk automatisasi setup server seperti log archive tool, server performance stats, dll.",
      techStack: ["Bash", "Linux", "Scripting",],
      github: "https://github.com/MochamadAbdulRouf/Hands-on-Bash-Script-Labs",
    },
    {
      title: "Automated Server Hardening & Docker Provisioning with Ansible",
      description: "Project ini mengimplementasikan penggunaan Ansible untuk mengotomatisasi proses penyedian server(server provisioning) dari fresh os menjadi siap produksi, Fokus utama project ini adalah keamanan (Security Hardening) dan persiapan lingkungan container (Docker environment). ",
      techStack: ["DevOps", "IAC", "Ansible",],
      github: "https://github.com/MochamadAbdulRouf/Hands-on-Ansible-Labs/tree/master/ansible-server-hardening",
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
            <h3 className="text-2xl font-semibold mb-6">
              Find All My Project
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {/* Tombol 1: GITHUB (Contoh) */}
              <Button size="lg" asChild>
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
