import { Calendar, Clock, ArrowRight, ArrowDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PostsPreview = () => {
  const posts = [
    {
      title: "Continuous Delivery with Jenkins in Kubernetes Engine GCP (Google Cloud Platform)",
      excerpt: "Set Up Aplikasi menggunakan Jenkins di Google Kubernetes Engine untuk mengotomatisasi proses Continuous Delivery.",
      date: "2025-08-29",
      readTime: "2 Jam",
      tags: ["Kubernetes", "GCP", "Jenkins", "CI/CD", "DevOps", "Cloud"],
    },
    {
      title: "Setup Jenkins With Kubernetes Engine GCP (Google Cloud Platform)",
      excerpt: "Mengkonfigurasi Jenkins di Google Kubernetes Engine untuk membantu mengelola alur CI/CD Aplikasi.",
      date: "2025-08-29",
      readTime: "2 Jam",
      tags: ["AWS", "GCP", "Jenkins", "Kubernetes", "DevOps", "Cloud"],
    },
    {
      title: "Hands On Kubernetes Labs",
      excerpt: "Sebuah Project yang saya rancang untuk dokumentasi saya saat mempelajari Kubernetes melalui serangkaian lab yang tersusun rapi.",
      date: "2025-09-01",
      readTime: "8 Jam",
      tags: ["Kubernetes", "DevOps", "Cloud"],
    },
    {
      title: "Hands On IAC with Terraform: AWS & GCP",
      excerpt: "Sebuah Project yang saya rancang untuk dokumentasi saya saat mempelajari Infrastructure as Code (IaC) menggunakan Terraform pada AWS dan GCP.",
      date: "2025-09-01",
      readTime: "8 Jam",
      tags: ["Terraform", "DevOps", "Cloud"],
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
                <Button variant="ghost" size="sm" className="w-full group" asChild>
                  <Link to="/posts">Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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
