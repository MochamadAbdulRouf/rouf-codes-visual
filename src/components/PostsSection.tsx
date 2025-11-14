import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PostsSection = () => {
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
    {
      title: "Monitoring at Scale: Prometheus and Grafana",
      excerpt: "A comprehensive guide to setting up enterprise-grade monitoring with Prometheus metrics collection and Grafana dashboards.",
      date: "2024-03-05",
      readTime: "12 min read",
      tags: ["Monitoring", "Prometheus", "Grafana"],
    },
    {
      title: "CI/CD Pipeline Security: Best Practices",
      excerpt: "Secure your CI/CD pipelines with secrets management, container scanning, and automated security testing workflows.",
      date: "2024-02-28",
      readTime: "7 min read",
      tags: ["Security", "CI/CD", "DevSecOps"],
    },
    {
      title: "Docker Multi-Stage Builds for Optimal Images",
      excerpt: "Optimize your container images using multi-stage builds, reduce image size, and improve build performance.",
      date: "2024-02-20",
      readTime: "6 min read",
      tags: ["Docker", "Containers", "Optimization"],
    },
    {
      title: "AWS vs GCP: Cloud Services Comparison",
      excerpt: "A detailed comparison of compute, storage, networking, and managed services across AWS and Google Cloud Platform.",
      date: "2024-02-15",
      readTime: "15 min read",
      tags: ["AWS", "GCP", "Cloud Comparison"],
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
    <section id="posts" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on DevOps practices, cloud technologies, and infrastructure automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </div>
    </section>
  );
};

export default PostsSection;
