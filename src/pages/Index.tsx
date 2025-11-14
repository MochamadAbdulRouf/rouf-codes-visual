import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import PostsPreview from "@/components/PostsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Gradient transition from grid to solid background */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
        <ProjectsPreview />
        <PostsPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
