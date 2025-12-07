import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import linuxLogo from "@/assets/linux.svg";
import kubeLogo from "@/assets/kube-logo.svg";
import awsLogo from "@/assets/logo-aws.svg";
import gcpLogo from "@/assets/gcp-logo.svg";
import dockerLogo from "@/assets/docker-logo.svg";
import jenkinsLogo from "@/assets/jenkins-logo.svg";
import githubActionLogo from "@/assets/github-action-logo.svg";
import terraformLogo from "@/assets/terraform.svg";
import ansibleLogo from "@/assets/ansible.svg";
import prometheusLogo from "@/assets/prometheus.svg";
import grafanaLogo from "@/assets/grafana.svg";
import bashlogo from "@/assets/bash.png";

// Alias to avoid production crash if older code references `linuxlogo`
const linuxlogo = linuxLogo;

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
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">Experience</h2>
            
            {/* Experience Timeline - Tambahkan experience baru di array ini */}
            <div className="relative mb-8">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="space-y-8">
                {[
                  {
                    company: "Nama Perusahaan",
                    role: "DevOps Engineer",
                    period: "Jan 2024 - Present",
                    location: "Jakarta, Indonesia",
                    description: [
                      "Mengelola infrastruktur cloud menggunakan AWS dan GCP",
                      "Implementasi CI/CD pipeline dengan Jenkins dan GitHub Actions",
                      "Containerization aplikasi menggunakan Docker dan Kubernetes",
                      "Monitoring dan observability dengan Prometheus dan Grafana",
                    ],
                  },
                  // Tambahkan experience baru di sini dengan format yang sama
                  // {
                  //   company: "Perusahaan Lain",
                  //   role: "Junior DevOps",
                  //   period: "Jun 2023 - Dec 2023",
                  //   location: "Bandung, Indonesia",
                  //   description: [
                  //     "Deskripsi tugas 1",
                  //     "Deskripsi tugas 2",
                  //   ],
                  // },
                ].map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                        <div className="text-sm text-muted-foreground sm:text-right">
                          <p className="font-medium">{exp.period}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5 text-muted-foreground mt-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary/70 mt-1">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                <img src={linuxLogo} alt="Linux Server" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Linux Server</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={kubeLogo} alt="Kubernetes" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Kubernetes</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={awsLogo} alt="Cloud (GCP/AWS)" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground text-center">AWS (Amazon Web Service)</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={gcpLogo} alt="Cloud (GCP/AWS)" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground text-center">GCP (Google Cloud Platform)</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={dockerLogo} alt="Docker" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Docker</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={jenkinsLogo} alt="CI/CD" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Jenkins</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={githubActionLogo} alt="CI/CD" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Github Action</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={terraformLogo} alt="CI/CD" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Terraform</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={ansibleLogo} alt="IaC (Terraform, Ansible)" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Ansible</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={prometheusLogo} alt="Prometheus" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Prometheus</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={grafanaLogo} alt="Grafana" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Grafana</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors">
                <img src={bashlogo} alt="BashScript" className="h-12 w-12 object-contain" />
                <span className="text-sm font-medium text-foreground">Bash Scripting</span>
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
                <Button variant="outline" size="lg" className="w-full">
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
