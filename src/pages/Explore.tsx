import "../global.css";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const SAMPLE_ARTICLES = [
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
    publishedAt: "1 day ago",
    likes: 1256,
    comments: 89,
  },
  {
    id: "3",
    title: "Ethical Hacking: Mastering Penetration Testing Fundamentals",
    excerpt: "A comprehensive guide to penetration testing methodologies and tools used by security professionals.",
    author: { name: "Jordan Miller", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
    category: "Security",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=800&h=400&fit=crop",
    readTime: "14 min read",
    publishedAt: "3 days ago",
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
    publishedAt: "5 days ago",
    likes: 1521,
    comments: 124,
  },
];

const CATEGORIES = ["All", "Security", "DevOps", "Web Development", "Cloud", "Backend", "Frontend", "Mobile"];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = SAMPLE_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Articles</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover insightful articles from our community of writers.
            </p>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-secondary border-none"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <BlogCard key={article.id} {...article} />
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No articles found matching your search.
                </p>
              </div>
            )}
          </div>

          {/* Load More */}
          {filteredArticles.length > 0 && (
            <div className="text-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Load more articles
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
