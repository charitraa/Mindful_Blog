import "../global.css";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock } from "lucide-react";

const TRENDING_ARTICLES = [
  {
    id: "1",
    title: "Zero Trust Security: The Future of Cybersecurity Architecture in 2025",
    excerpt: "Understand the principles, implementation strategies, and best practices for adopting a Zero Trust security model.",
    author: { name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    category: "Security",
    image: "https://images.unsplash.com/photo-1555949519-3d1755ffc4d1?w=800&h=400&fit=crop",
    readTime: "12 min read",
    publishedAt: "2 days ago",
    likes: 1847,
    comments: 127,
  },
  {
    id: "2",
    title: "Building Scalable Microservices with Kubernetes: A Complete Guide",
    excerpt: "Learn how to architect and deploy microservices at scale using Kubernetes and DevOps best practices.",
    author: { name: "Alex Rivera", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    readTime: "15 min read",
    publishedAt: "5 days ago",
    likes: 1621,
    comments: 156,
  },
  {
    id: "3",
    title: "Ethical Hacking: Mastering Penetration Testing Fundamentals",
    excerpt: "A comprehensive guide to penetration testing methodologies and tools used by security professionals.",
    author: { name: "Jordan Miller", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
    category: "Security",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=800&h=400&fit=crop",
    readTime: "14 min read",
    publishedAt: "1 day ago",
    likes: 1642,
    comments: 104,
  },
  {
    id: "4",
    title: "TypeScript Performance Optimization: Best Practices and Patterns",
    excerpt: "Deep dive into TypeScript optimization techniques, compilation strategies, and runtime performance improvements.",
    author: { name: "Emma Johnson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356713697-e73dbe26dd8f?w=800&h=400&fit=crop",
    readTime: "11 min read",
    publishedAt: "3 days ago",
    likes: 1321,
    comments: 94,
  },
  {
    id: "5",
    title: "Cloud Security Best Practices: AWS, Azure, and GCP Compared",
    excerpt: "Comprehensive comparison of security practices and implementations across major cloud providers.",
    author: { name: "Michael Brown", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop",
    readTime: "13 min read",
    publishedAt: "1 day ago",
    likes: 987,
    comments: 67,
  },
  {
    id: "6",
    title: "API Security: Protecting Your REST and GraphQL Endpoints",
    excerpt: "Explore authentication, authorization, rate limiting, and other critical security practices for modern APIs.",
    author: { name: "Lisa Park", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    readTime: "10 min read",
    publishedAt: "2 days ago",
    likes: 743,
    comments: 56,
  },
];

const TIME_FILTERS = ["Today", "This Week", "This Month", "All Time"];

export default function Trending() {
  const [selectedTime, setSelectedTime] = useState("This Week");

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Trending Now</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The hottest articles from our community right now. See what everyone is reading and discussing.
            </p>
          </div>

          {/* Time Filters */}
          <div className="mb-12">
            <div className="flex gap-2 flex-wrap">
              {TIME_FILTERS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTime === time
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Top Article Highlight */}
          {TRENDING_ARTICLES.length > 0 && (
            <div className="mb-16 pb-16 border-b border-border">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-sm font-medium text-primary flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  #1 Most Viewed
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {TRENDING_ARTICLES[0].image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={TRENDING_ARTICLES[0].image}
                      alt={TRENDING_ARTICLES[0].title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="blog-tag">{TRENDING_ARTICLES[0].category}</span>
                    <span className="text-sm text-muted-foreground">
                      {TRENDING_ARTICLES[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    {TRENDING_ARTICLES[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {TRENDING_ARTICLES[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <img
                      src={TRENDING_ARTICLES[0].author.avatar}
                      alt={TRENDING_ARTICLES[0].author.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{TRENDING_ARTICLES[0].author.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {TRENDING_ARTICLES[0].publishedAt}
                      </p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">More Trending Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRENDING_ARTICLES.slice(1).map((article) => (
                <BlogCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
