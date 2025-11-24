// import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Github, 
  FileText, 
  BookOpen,
  Database,
  Newspaper 
} from "lucide-react";
import { platform } from "os";

// BUAT "PETA" UNTUK IKON DAN TEKS
const linkDetails = {
  github: {
    text: "View on GitHub",
    Icon: Github
  }, 
  medium: {
    text: "Read on Medium",
    Icon: FileText
  },
  blogger: {
    text: "Read on Blogger",
    Icon: BookOpen
  },
  drive: {
    text: "View Google Docs/Sheets",
    Icon: Newspaper
  },
  default: {
    text: "Read More",
    Icon: ArrowRight
  }
};

const PostsSection = () => {
  const posts = [
    {
      title: "Deploy the Perpusku Laravel Application with Docker & Docker Compose",
      excerpt: "Deploying the Perpusku Laravel application using Docker and Docker Compose for easy container management.",
      date: "2025-07-10",
      readTime: "2 Jam",
      tags: ["Docker", "DevOps", "Deployment"],
      links: [
        { platform: 'medium', url: 'https://medium.com/@rouf08412/deploy-laravel-perpusku-dengan-docker-tutorial-lengkap-medium-style-86681792f198' },
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/07/challenge-deploy-web-laravel-perpus.html' }
      ]
    },
    {
      title: "AWS DevOps Module",
      excerpt: "A comprehensive guide to building AWS DevOps modules that include Jenkins, Terraform, Docker, and Kubernetes. This project was carried out with my friends at KITS (IT Community of SMKN 1 NGLEGOK).",
      date: "2025-06-28",
      readTime: "6 jam",
      tags: ["AWS", "IaC", "Cloud", "DevOps"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/07/blog-post.html' }
      ]
    },
    {
      title: "MTCNA Module: MikroTik Certified Network Associate",
      excerpt: "A comprehensive guide to preparing for MTCNA certification with a focus on network configuration using MikroTik devices.",
      date: "2024-04-21",
      readTime: "6 Jam",
      tags: ["Winbox", "Mikrotik", "Network"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/05/modul-mtcna-mochamad-abdul-rouf.html' }
      ]
    },
    {
      title: "Debian Linux Server - System Administration Module",
      excerpt: "System administration module for Debian Linux Server that covers installation, configuration, and management of server services.",
      date: "2024-03-21",
      readTime: "6 Jam",
      tags: ["Server", "Linux", "SystemAdministration"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/03/modul-debian-11-systemadministrator.html' }
      ]
    },
    {
      title: "Continuous Delivery with Jenkins in Kubernetes Engine GCP (Google Cloud Platform)",
      excerpt: "Set up applications using Jenkins on Google Kubernetes Engine to automate the Continuous Delivery process.",
      date: "2025-08-29",
      readTime: "2 Jam",
      tags: ["Kubernetes", "GCP", "Jenkins", "CI/CD", "DevOps", "Cloud"],
      links: [
        { platform: 'medium', url: 'https://medium.com/@rouf08412/continuous-delivery-with-jenkins-in-kubernetes-engine-7b3d37c40d72' }
      ]
    },
    {
      title: "Setup Jenkins With Kubernetes Engine GCP (Google Cloud Platform)",
      excerpt: "Configuring Jenkins in Google Kubernetes Engine to help manage the CI/CD pipeline for applications.",
      date: "2025-08-29",
      readTime: "2 Jam",
      tags: ["AWS", "GCP", "Jenkins", "Kubernetes", "DevOps", "Cloud"],
      links: [
        { platform: 'medium', url: 'https://medium.com/@rouf08412/setup-jenkins-with-kubernetes-engine-4f647cc24db6' }
      ]
    },
    {
      title: "Hands On Kubernetes Labs",
      excerpt: "A project I designed for my documentation while learning Kubernetes through a series of neatly organized labs.",
      date: "2025-09-01",
      readTime: "8 Jam",
      tags: ["Kubernetes", "DevOps", "Cloud"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Hands-on-Kubernetes-Labs' }
      ]
    },
    {
      title: "Hands On IAC with Terraform: AWS & GCP",
      excerpt: "A project I designed for my documentation while learning Infrastructure as Code (IaC) using Terraform on AWS and GCP.",
      date: "2025-05-01",
      readTime: "8 Jam",
      tags: ["Terraform", "DevOps", "Cloud"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Terraform-AWS-GCP-IAC' }
      ]
    },
    {
      title: "Hands On Ansible Labs",
      excerpt: "A project I designed for my documentation while learning Ansible through a series of neatly organized labs.",
      date: "2025-05-20",
      readTime: "8 Jam",
      tags: ["Ansible", "DevOps", "Infrastructure"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Hands-on-Ansible-Labs' },
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/05/write-up-learning-ansible.html' }
      ]
    },
    {
      title: "Hands On Docker Labs",
      excerpt: "A project I designed for my documentation while learning Docker through a series of neatly organized labs.",
      date: "2025-03-01",
      readTime: "8 Jam",
      tags: ["Docker", "DevOps", "Containerization"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Hands-on-Docker-Labs' },
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/03/write-up-task-and-learning-adinusa.html' }
      ]
    },
    {
      title: "Write Up Jenkins CI/CD",
      excerpt: "A comprehensive write-up about Jenkins CI/CD covering installation, pipeline configuration, and best practices for software delivery automation.",
      date: "2025-04-01",
      readTime: "8 Jam",
      tags: ["Jenkins", "DevOps", "CI/CD"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Learn-Jenkins-Pipeline' },
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/11/write-up-jenkins.html' }
      ]
    },
    {
      title: "Terraform on AWS: Hands On Labs",
      excerpt: "Terraform hands-on labs designed to learn how to use Terraform to automatically manage AWS infrastructure.",
      date: "2025-02-01",
      readTime: "8 Jam",
      tags: ["Terraform", "DevOps", "Infrastructure as Code"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Terraform-AWS' }
      ]
    },
    {
      title: "Write Up Gitlab CI/CD",
      excerpt: "Gitlab is one of the most popular DevOps tools used to manage source code repositories and automate CI/CD processes.",
      date: "2025-07-01",
      readTime: "8 Jam",
      tags: ["Gitlab", "DevOps", "CI/CD"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/11/hands-on-gitlab.html' }
      ]
    },
    {
      title: "Write Timeline Cloud DevOps AWS",
      excerpt: "Creating a timeline for learning Cloud DevOps over one semester with my friends at the SMKN 1 NGLEGOK IT Community (KITS).",
      date: "2025-06-01",
      readTime: "8 Jam",
      tags: ["AWS", "DevOps", "Cloud"],
      links: [
        { platform: 'drive', url: 'https://docs.google.com/spreadsheets/d/1CI6FFcBmYqcSwVzNufGSz6hgb-z9PX5aseI7ZI3KoCo/edit?usp=sharing' }
      ]
    },
    {
      title: "Implementation of WireGuard VPN and Tailscale",
      excerpt: "Implementation of WireGuard VPN and TailScale to secure network connections and create a secure and fast VPN.",
      date: "2025-08-10",
      readTime: "2 Jam",
      tags: ["VPN", "Wireguard", "Tailscale"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/11/wireguard-and-tail-scale.html' }
      ]
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
                <div className="flex flex-wrap gap-2">
                {/* Cek apakah 'post.links' ada dan punya isi */}
                {post.links && post.links.map((link, linkIndex) => {
                  // Ambil detail (teks & ikon) dari 'linkDetails'
                  const details = linkDetails[link.platform] || linkDetails.default;
                  const { Icon } = details; // Ambil komponen Ikon
                    // Render satu tombol untuk setiap link
                    return (
                      <Button 
                       
                        key={linkIndex} 
                        variant="ghost" 
                        size="sm" 
                        className="group" // Hapus 'w-full'
                        asChild>

                        <a 
                        href={link.url} // <-- URL dinamis
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {details.text} {/* <-- Teks dinamis */}
                        <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>

                      </Button>
                    );
                  })}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 border-t pt-12">
        <h3 className="text-2xl font-semibold mb-6">
          Find All My Writings
        </h3>
        <div className="flex justify-center gap-4 flex-wrap">

          {/* Tombol 1: MEDIUM */}
          <Button size="lg" asChild>
            <a 
              href="https://medium.com/@rouf08412" // <-- GANTI DENGAN LINK PROFIL ANDA
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-5 w-5" />
              My Medium Profile
            </a>
          </Button>

          {/* Tombol 2: GITHUB (Contoh) */}
          <Button size="lg" asChild>
            <a 
              href="https://github.com/MochamadAbdulRouf" // <-- GANTI DENGAN LINK PROFIL ANDA
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              My GitHub Profile
            </a>
          </Button>

          {/* Tombol 3: BLOGGER */}
          <Button size="lg" asChild>
            <a 
              href="https://mochabdulrouf.blogspot.com/" // <-- GANTI DENGAN LINK PROFIL ANDA
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              My Blogger Profile
            </a>
          </Button>

        </div>
      </div>
      </div>
    </section>
  );
};

export default PostsSection;
