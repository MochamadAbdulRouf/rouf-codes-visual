import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import PostsPreview from "@/components/PostsPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsPreview />
      <PostsPreview />
    </div>
  );
};

export default Index;
