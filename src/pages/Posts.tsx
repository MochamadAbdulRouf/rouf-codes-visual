import Navbar from "@/components/Navbar";
import PostsSection from "@/components/PostsSection";
import Footer from "@/components/Footer";

const Posts = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <PostsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
