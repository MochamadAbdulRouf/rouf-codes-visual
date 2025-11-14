import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PostsSection from "@/components/PostsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PostsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
