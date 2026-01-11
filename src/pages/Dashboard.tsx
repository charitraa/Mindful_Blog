import "../global.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Eye,
  Heart,
  MessageSquare,
  Plus,
  Edit2,
  Trash2,
  BookmarkCheck,
} from "lucide-react";

const USER_STATS = [
  { label: "Total Posts", value: 12, icon: BarChart },
  { label: "Total Views", value: 2847, icon: Eye },
  { label: "Total Likes", value: 456, icon: Heart },
  { label: "Total Comments", value: 89, icon: MessageSquare },
];

const MY_POSTS = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and frameworks...",
    publishedAt: "2 days ago",
    views: 342,
    likes: 45,
    comments: 12,
    status: "published",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    excerpt: "Deep dive into React component patterns...",
    publishedAt: "1 week ago",
    views: 521,
    likes: 78,
    comments: 23,
    status: "published",
  },
  {
    id: 3,
    title: "Building Scalable APIs",
    excerpt: "Best practices for API design...",
    publishedAt: "2 weeks ago",
    views: 198,
    likes: 34,
    comments: 8,
    status: "draft",
  },
];

const SAVED_POSTS = [
  {
    id: 1,
    title: "Design Systems at Scale",
    author: "Alex Rivera",
    category: "Design",
  },
  {
    id: 2,
    title: "Remote Work Best Practices",
    author: "Jordan Miller",
    category: "Productivity",
  },
  {
    id: 3,
    title: "Machine Learning for Beginners",
    author: "Emma Johnson",
    category: "Technology",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Manage your articles, track your stats, and engage with your audience.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {USER_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="mb-8 border-b border-border">
            <div className="flex gap-8">
              {[
                { id: "posts", label: "My Posts" },
                { id: "saved", label: "Saved Posts" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 font-medium transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Tab */}
          {activeTab === "posts" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My Articles</h2>
                <Link to="/write">
                  <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Write New Article
                  </Button>
                </Link>
              </div>

              {MY_POSTS.length > 0 ? (
                <div className="space-y-4">
                  {MY_POSTS.map((post) => (
                    <div
                      key={post.id}
                      className="bg-card rounded-lg border border-border p-6 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {post.views} views
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {post.likes} likes
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {post.comments} comments
                            </span>
                            <span>{post.publishedAt}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Link to={`/post/${post.id}/edit`}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-2"
                            >
                              <Edit2 className="h-4 w-4" />
                              Edit
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-destructive hover:text-destructive gap-2"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === "published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          }`}
                        >
                          {post.status === "published" ? "Published" : "Draft"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    You haven't written any articles yet.
                  </p>
                  <Link to="/write">
                    <Button className="bg-primary hover:bg-primary/90">
                      Write Your First Article
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Saved Posts Tab */}
          {activeTab === "saved" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Saved for Later</h2>
              {SAVED_POSTS.length > 0 ? (
                <div className="space-y-4">
                  {SAVED_POSTS.map((post) => (
                    <div
                      key={post.id}
                      className="bg-card rounded-lg border border-border p-6 hover:border-primary/20 transition-colors flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          by {post.author} • {post.category}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 text-primary"
                      >
                        <BookmarkCheck className="h-4 w-4" />
                        Saved
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    You haven't saved any articles yet.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
