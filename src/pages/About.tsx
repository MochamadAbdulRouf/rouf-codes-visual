import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <ul className="space-y-2 text-muted-foreground">
              <li>• Linux Server Administration</li>
              <li>• Kubernetes & Container Orchestration</li>
              <li>• Cloud Platforms (GCP, AWS)</li>
              <li>• Docker & Docker Compose</li>
              <li>• CI/CD Pipelines (Jenkins, GitHub Actions)</li>
              <li>• Infrastructure as Code (Terraform, Ansible)</li>
              <li>• Monitoring & Observability (Prometheus, Grafana)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />  
    </div>
    
    
  );
};

export default About;
