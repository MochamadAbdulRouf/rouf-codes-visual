import { Calendar, Clock, ArrowRight, ArrowDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PostsPreview = () => {
  const posts = [
    {
      title: "Implementing Zero-Downtime Deployments with Kubernetes",
      excerpt: "Learn how to achieve seamless application updates using rolling deployments, blue-green strategies, and canary releases in Kubernetes.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["Kubernetes", "DevOps", "Deployment"],
    },
    {
      title: "Infrastructure as Code: Terraform Best Practices",
      excerpt: "Explore advanced Terraform patterns, state management strategies, and module design principles for scalable infrastructure.",
      date: "2024-03-10",
      readTime: "10 min read",
      tags: ["Terraform", "IaC", "Cloud"],
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-bounce-slow">
          <div className="inline-flex flex-col items-center gap-2 text-muted-foreground group">
            <span className="text-sm font-medium tracking-wide">SOME OF MY WRITING</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-3 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/posts">View All My Writing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostsPreview;
