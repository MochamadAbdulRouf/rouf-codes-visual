import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;
