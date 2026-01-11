import "../global.css";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterForm from "@/components/blog/NewsletterForm";

// Sample posts data
const FEATURED_POST = {
  id: "1",
  title: "Zero Trust Security: The Future of Cybersecurity Architecture in 2025",
  excerpt:
    "Understand the principles, implementation strategies, and best practices for adopting a Zero Trust security model in your organization.",
  author: {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  readTime: "12 min read",
  publishedAt: "2 days ago",
  image: "https://images.unsplash.com/photo-1555949519-3d1755ffc4d1?w=1200&h=600&fit=crop",
};

const ALL_POSTS = [
  {
    id: "1",
    title: "Zero Trust Security: The Future of Cybersecurity Architecture in 2025",
    excerpt:
      "Understand the principles, implementation strategies, and best practices for adopting a Zero Trust security model in your organization.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
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
    excerpt: "Learn how to architect and deploy microservices at scale using Kubernetes and best practices.",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
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
    author: {
      name: "Jordan Miller",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
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
    author: {
      name: "Emma Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356713697-e73dbe26dd8f?w=800&h=400&fit=crop",
    readTime: "11 min read",
    publishedAt: "5 days ago",
    likes: 1521,
    comments: 124,
  },
  {
    id: "5",
    title: "Cloud Security Best Practices: AWS, Azure, and GCP Compared",
    excerpt: "Comprehensive comparison of security practices and implementations across major cloud providers.",
    author: {
      name: "Michael Brown",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop",
    readTime: "13 min read",
    publishedAt: "1 week ago",
    likes: 987,
    comments: 67,
  },
  {
    id: "6",
    title: "API Security: Protecting Your REST and GraphQL Endpoints",
    excerpt: "Explore authentication, authorization, rate limiting, and other critical security practices for modern APIs.",
    author: {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    readTime: "10 min read",
    publishedAt: "2 weeks ago",
    likes: 743,
    comments: 56,
  },
];

const TOPICS = [
  "Web Development",
  "Security",
  "DevOps",
  "Cloud",
  "Backend",
  "Frontend",
  "Mobile",
  "Infrastructure",
];

const TRENDING_POSTS = ALL_POSTS.slice(0, 3).map((post, idx) => ({
  ...post,
  rank: idx + 1,
}));

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState("Technology");
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const filteredPosts = ALL_POSTS.filter((post) =>
    post.category === selectedTopic || selectedTopic === "All"
  );

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background via-background to-secondary/20 border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            {/* Hero Content */}
            <Link to={`/post/${FEATURED_POST.id}`} className="group block">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 order-2 md:order-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                      {FEATURED_POST.title}
                    </h1>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {FEATURED_POST.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4">
                    <img
                      src={FEATURED_POST.author.avatar}
                      alt={FEATURED_POST.author.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/10"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {FEATURED_POST.author.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {FEATURED_POST.publishedAt} • {FEATURED_POST.readTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                {FEATURED_POST.image && (
                  <div className="order-1 md:order-2 rounded-xl overflow-hidden h-72 md:h-96 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                    <img
                      src={FEATURED_POST.image}
                      alt={FEATURED_POST.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Topics Navigation */}
      <div className="sticky top-16 border-b border-border bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex gap-8 py-4 whitespace-nowrap min-w-min">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`pb-4 text-sm font-medium transition-all border-b-2 ${
                    selectedTopic === topic
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Feed with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">Latest Stories</h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} articles in {selectedTopic}
              </p>
            </div>

            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group pb-8 border-b border-border hover:bg-secondary/20 -mx-4 px-4 py-6 rounded-lg transition-all duration-200"
              >
                <Link to={`/post/${post.id}`} className="block">
                  <div className="flex gap-6 items-start">
                    {/* Article Info */}
                    <div className="flex-1 min-w-0">
                      {/* Author Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-foreground">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {post.publishedAt} • {post.readTime}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-base text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-3 py-1 bg-secondary text-xs font-medium rounded-full text-foreground">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex gap-4 text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleLike(post.id);
                            }}
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                likedPosts.includes(post.id)
                                  ? "fill-primary text-primary"
                                  : ""
                              }`}
                            />
                            <span className="text-xs">
                              {likedPosts.includes(post.id)
                                ? post.likes + 1
                                : post.likes}
                            </span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-xs">{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Post Image */}
                    {post.image && (
                      <div className="hidden sm:block w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 h-fit sticky top-32">
            {/* Trending Section */}
            <div className="bg-secondary/40 rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">Trending Now</h3>
              </div>

              <div className="space-y-5">
                {TRENDING_POSTS.map((post) => (
                  <Link
                    key={post.id}
                    to={`/post/${post.id}`}
                    className="group block pb-5 border-b border-border/50 last:border-0 last:pb-0 hover:text-primary transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-primary/30">
                        {post.rank}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                          {post.title.substring(0, 50)}...
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {post.author.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-secondary/40 rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold mb-4">Recommended Topics</h3>
              <div className="space-y-2">
                {TOPICS.slice(0, 5).map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className="w-full text-left px-3 py-2 rounded-full bg-primary/5 hover:bg-primary/10 text-sm font-medium transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-transparent via-secondary/10 to-secondary/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm variant="section" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
