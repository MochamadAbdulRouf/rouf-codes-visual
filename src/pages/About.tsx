import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Server, Container, Cloud, FileCode, GitBranch, Settings, Activity, BarChart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Me
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Mochamad Abdul Rouf, a Fresh Graduate specializing in DevOps and Cloud Infrastructure. 
              I am passionate about building scalable, reliable, and automated systems.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Throughout my academic journey and hands-on projects, I've developed a strong foundation in 
              cloud technologies, container orchestration, and infrastructure automation. I believe in 
              continuous learning and staying updated with the latest DevOps practices.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Skills & Tech Stack</h2>
            
            {/* Tech Stack Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <Server className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Linux Server</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <Container className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Kubernetes</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <Cloud className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Cloud (GCP/AWS)</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <Container className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Docker</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <GitBranch className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">CI/CD</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <FileCode className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">IaC</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <Activity className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Prometheus</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <BarChart className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">Grafana</span>
              </div>
            </div>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Linux Server Administration</li>
              <li>• Kubernetes & Container Orchestration</li>
              <li>• Cloud Platforms (GCP, AWS)</li>
              <li>• Docker & Docker Compose</li>
              <li>• CI/CD Pipelines (Jenkins, GitHub Actions)</li>
              <li>• Infrastructure as Code (Terraform, Ansible)</li>
              <li>• Monitoring & Observability (Prometheus, Grafana)</li>
            </ul>
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
              <Link to="/projects" className="flex-1">
                <Button variant="default" size="lg" className="w-full">
                  View My Projects
                </Button>
              </Link>
              <Link to="/posts" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Read My Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />  
    </div>
    
    
  );
};

export default About;
