import Navbar from "@/components/Navbar";
import PostsSection from "@/components/PostsSection";

const Posts = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <PostsSection />
      </div>
    </div>
  );
};

export default Posts;
