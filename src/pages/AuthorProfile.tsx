import "../global.css";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, BarChart3, Users, Heart } from "lucide-react";

export default function AuthorProfile() {
  const { authorId } = useParams();

  // Sample author data
  const author = {
    id: authorId,
    name: "Sarah Chen",
    title: "Full Stack Developer & Tech Writer",
    bio: "Passionate about building scalable web applications and sharing knowledge with the community. 10+ years of experience in software development.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=300&fit=crop",
    stats: {
      posts: 42,
      followers: 3500,
      likes: 8234,
    },
    socialLinks: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://sarahchen.dev",
    },
    isFollowing: false,
  };

  const AUTHOR_POSTS = [
    {
      id: "1",
      title: "The Future of Web Development: What You Need to Know in 2025",
      excerpt: "Explore the latest trends, frameworks, and best practices that are shaping the future of web development.",
      author: { name: author.name, avatar: author.avatar },
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      readTime: "8 min read",
      publishedAt: "2 days ago",
      likes: 1247,
      comments: 89,
    },
    {
      id: "2",
      title: "React 19: Everything You Need to Know",
      excerpt: "Deep dive into React 19's new features, improvements, and breaking changes.",
      author: { name: author.name, avatar: author.avatar },
      category: "Technology",
      image: "https://images.unsplash.com/photo-1633356713697-e73dbe26dd8f?w=800&h=400&fit=crop",
      readTime: "10 min read",
      publishedAt: "5 days ago",
      likes: 1521,
      comments: 124,
    },
    {
      id: "3",
      title: "The Art of Writing Technical Documentation",
      excerpt: "Best practices for creating clear, concise, and helpful technical docs.",
      author: { name: author.name, avatar: author.avatar },
      category: "Technology",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop",
      readTime: "7 min read",
      publishedAt: "1 week ago",
      likes: 456,
      comments: 32,
    },
  ];

  return (
    <Layout>
      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden -mx-4 md:mx-0">
        <img
          src={author.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Author Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12 pb-12 border-b border-border">
          {/* Avatar */}
          <div className="flex-shrink-0 -mt-24 md:-mt-32">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-40 w-40 rounded-full object-cover border-4 border-background shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{author.name}</h1>
            <p className="text-lg text-primary font-medium mb-2">{author.title}</p>
            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              {author.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {author.socialLinks.twitter && (
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {author.socialLinks.github && (
                <a
                  href={author.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {author.socialLinks.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {author.socialLinks.website && (
                <a
                  href={author.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
                >
                  <Globe className="h-5 w-5" />
                </a>
              )}
            </div>

            {/* Follow Button */}
            <Button className={author.isFollowing ? "bg-secondary text-secondary-foreground" : "bg-primary hover:bg-primary/90"}>
              {author.isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BarChart3, label: "Posts", value: author.stats.posts },
            { icon: Users, label: "Followers", value: author.stats.followers.toLocaleString() },
            { icon: Heart, label: "Likes", value: author.stats.likes.toLocaleString() },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Articles */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Published Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTHOR_POSTS.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
