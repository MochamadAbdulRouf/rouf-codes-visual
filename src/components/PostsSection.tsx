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
      title: "Deploy Aplikasi Laravel Perpusku dengan Docker & Docker Compose",
      excerpt: "Melakukan deployment aplikasi Laravel Perpusku menggunakan Docker dan Docker Compose untuk kemudahan pengelolaan container.",
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
      excerpt: "Panduan lengkap untuk membangun modul AWS DevOps yang mencakup Jenkins, Terraform, Docker, dan Kubernetes.Project ini Di Kerjakan bersama Teman saya di organisasi KITS (Komunitas IT SMKN 1 NGLEGOK).",
      date: "2025-06-28",
      readTime: "6 jam",
      tags: ["AWS", "IaC", "Cloud", "DevOps"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/07/blog-post.html' }
      ]
    },
    {
      title: "MTCNA Module: MikroTik Certified Network Associate",
      excerpt: "Panduan lengkap untuk mempersiapkan sertifikasi MTCNA dengan fokus pada konfigurasi jaringan menggunakan perangkat MikroTik.",
      date: "2024-04-21",
      readTime: "6 Jam",
      tags: ["Winbox", "Mikrotik", "Network"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/05/modul-mtcna-mochamad-abdul-rouf.html' }
      ]
    },
    {
      title: "Debian Linux Server - System Administration Module",
      excerpt: "Modul administrasi sistem untuk Debian Linux Server yang mencakup instalasi, konfigurasi, dan manajemen layanan server.",
      date: "2024-03-21",
      readTime: "6 Jam",
      tags: ["Server", "Linux", "SystemAdministration"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/03/modul-debian-11-systemadministrator.html' }
      ]
    },
    {
      title: "Continuous Delivery with Jenkins in Kubernetes Engine GCP (Google Cloud Platform)",
      excerpt: "Set Up Aplikasi menggunakan Jenkins di Google Kubernetes Engine untuk mengotomatisasi proses Continuous Delivery.",
      date: "2025-08-29",
      readTime: "2 Jam",
      tags: ["Kubernetes", "GCP", "Jenkins", "CI/CD", "DevOps", "Cloud"],
      links: [
        { platform: 'medium', url: 'https://medium.com/@rouf08412/continuous-delivery-with-jenkins-in-kubernetes-engine-7b3d37c40d72' }
      ]
    },
    {
      title: "Setup Jenkins With Kubernetes Engine GCP (Google Cloud Platform)",
      excerpt: "Mengkonfigurasi Jenkins di Google Kubernetes Engine untuk membantu mengelola alur CI/CD Aplikasi.",
      date: "2025-08-29",
      readTime: "2 Jam",
      tags: ["AWS", "GCP", "Jenkins", "Kubernetes", "DevOps", "Cloud"],
      links: [
        { platform: 'medium', url: 'https://medium.com/@rouf08412/setup-jenkins-with-kubernetes-engine-4f647cc24db6' }
      ]
    },
    {
      title: "Hands On Kubernetes Labs",
      excerpt: "Sebuah Project yang saya rancang untuk dokumentasi saya saat mempelajari Kubernetes melalui serangkaian lab yang tersusun rapi.",
      date: "2025-09-01",
      readTime: "8 Jam",
      tags: ["Kubernetes", "DevOps", "Cloud"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Hands-on-Kubernetes-Labs' }
      ]
    },
    {
      title: "Hands On IAC with Terraform: AWS & GCP",
      excerpt: "Sebuah Project yang saya rancang untuk dokumentasi saya saat mempelajari Infrastructure as Code (IaC) menggunakan Terraform pada AWS dan GCP.",
      date: "2025-05-01",
      readTime: "8 Jam",
      tags: ["Terraform", "DevOps", "Cloud"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Terraform-AWS-GCP-IAC' }
      ]
    },
    {
      title: "Hands On Ansible Labs",
      excerpt: "Sebuah Project yang saya rancang untuk dokumentasi saya saat mempelajari Ansible melalui serangkaian lab yang tersusun rapi.",
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
      excerpt: "Sebuah project yang saya rancang untuk dokumentasi saya saat mempelajari Docker melalui serangkaian lab yang tersusun rapi.",
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
      excerpt: "Write up lengkap tentang Jenkins CI/CD yang mencakup instalasi, konfigurasi pipeline, dan praktik terbaik untuk otomatisasi pengiriman perangkat lunak.",
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
      excerpt: "Terraform hands on labs yang dirancang untuk mempelajari penggunaan Terraform dalam mengelola infrastruktur AWS secara otomatis.",
      date: "2025-02-01",
      readTime: "8 Jam",
      tags: ["Terraform", "DevOps", "Infrastructure as Code"],
      links: [
        { platform: 'github', url: 'https://github.com/MochamadAbdulRouf/Terraform-AWS' }
      ]
    },
    {
      title: "Write Up Gitlab CI/CD",
      excerpt: "Gitlab merupakan salah satu tools DevOps yang populer digunakan untuk mengelola repository kode sumber dan mengotomatisasi proses CI/CD.",
      date: "2025-07-01",
      readTime: "8 Jam",
      tags: ["Gitlab", "DevOps", "CI/CD"],
      links: [
        { platform: 'blogger', url: 'https://mochabdulrouf.blogspot.com/2025/11/hands-on-gitlab.html' }
      ]
    },
    {
      title: "Write Timeline Cloud DevOps AWS",
      excerpt: "Membuat timeline target belajar Cloud DevOps selama 1 Semester bersama teman saya di Komunitas IT SMKN 1 NGLEGOK (KITS).",
      date: "2025-06-01",
      readTime: "8 Jam",
      tags: ["AWS", "DevOps", "Cloud"],
      links: [
        { platform: 'drive', url: 'https://docs.google.com/spreadsheets/d/1CI6FFcBmYqcSwVzNufGSz6hgb-z9PX5aseI7ZI3KoCo/edit?usp=sharing' }
      ]
    },
    {
      title: "Implementation of WireGuard VPN and Tailscale",
      excerpt: "Implementasi WireGuard VPN dan TailScale untuk mengamankan koneksi jaringan dan membuat VPN yang aman dan cepat.",
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
