import "../global.css";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const SEARCH_RESULTS = [
  {
    id: "1",
    title: "The Future of Web Development: What You Need to Know in 2025",
    excerpt: "Explore the latest trends, frameworks, and best practices that are shaping the future of web development.",
    author: { name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
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
    author: { name: "Emma Johnson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633356713697-e73dbe26dd8f?w=800&h=400&fit=crop",
    readTime: "10 min read",
    publishedAt: "5 days ago",
    likes: 1521,
    comments: 124,
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("development");
  const [results, setResults] = useState(SEARCH_RESULTS);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      // Filter results based on query
      const filtered = SEARCH_RESULTS.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(SEARCH_RESULTS);
    }
  };

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-14 text-lg bg-secondary border-none"
              />
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Search Results
            </h2>
            <p className="text-muted-foreground mb-8">
              Found {results.length} article{results.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>

            {results.length > 0 ? (
              <div className="space-y-6">
                {results.map((post) => (
                  <BlogCard
                    key={post.id}
                    {...post}
                    variant="horizontal"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-lg text-muted-foreground">
                  No articles found matching "{searchQuery}"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try searching with different keywords
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
