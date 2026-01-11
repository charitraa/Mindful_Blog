import "../global.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CommentThread from "@/components/blog/CommentThread";
import AuthorCard from "@/components/blog/AuthorCard";
import NewsletterForm from "@/components/blog/NewsletterForm";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

// Sample post data
const POST_DATA = {
  id: "1",
  title: "Zero Trust Security: The Future of Cybersecurity Architecture in 2025",
  excerpt:
    "Understand the principles, implementation strategies, and best practices for adopting a Zero Trust security model in your organization.",
  author: {
    id: "author-1",
    name: "Sarah Chen",
    bio: "Cybersecurity architect and senior security engineer with 12+ years of experience. Specializes in enterprise security architecture and Zero Trust implementations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    posts: 38,
    followers: 4200,
  },
  category: "Security",
  image: "https://images.unsplash.com/photo-1555949519-3d1755ffc4d1?w=1200&h=600&fit=crop",
  readTime: "12 min read",
  publishedAt: "2 days ago",
  publishedDate: "January 20, 2025",
  likes: 1847,
  comments: 127,
  content: `
    <h2>Introduction</h2>
    <p>The traditional security perimeter is dead. As organizations increasingly adopt cloud services, remote work, and mobile devices, the concept of a protected network boundary has become obsolete. Zero Trust Security represents a paradigm shift in how we approach cybersecurity, treating every access request as potentially malicious until proven otherwise.</p>

    <h2>1. Core Principles of Zero Trust</h2>
    <p>Zero Trust operates on a simple but powerful principle: "Never trust, always verify." Rather than assuming that users and devices inside the network perimeter are trustworthy, Zero Trust requires continuous verification of identity and device posture. This includes verifying user identity through multi-factor authentication, ensuring device compliance with security policies, and monitoring behavior patterns for anomalies.</p>

    <h2>2. Identity and Access Management (IAM)</h2>
    <p>At the heart of Zero Trust lies robust identity and access management. This involves implementing single sign-on (SSO), multi-factor authentication (MFA), and conditional access policies. Organizations should enforce the principle of least privilege, granting users only the minimum permissions necessary to perform their jobs. Continuous monitoring and audit logging of all access attempts are essential components.</p>

    <h2>3. Microsegmentation and Network Architecture</h2>
    <p>Zero Trust replaces the traditional network perimeter with microsegmentation, dividing the network into smaller, isolated zones. Each zone has its own security policies and access controls. This approach limits lateral movement in case of a breach and requires attackers to compromise multiple layers to cause significant damage. Implementing microsegmentation requires understanding your network topology and application dependencies.</p>

    <h2>4. Data Protection and Encryption</h2>
    <p>Zero Trust emphasizes encryption both in transit and at rest. All data should be encrypted using industry-standard protocols (TLS 1.2+). Additionally, organizations should implement data loss prevention (DLP) tools to monitor and prevent unauthorized data transfers. Encryption key management becomes critical, requiring secure storage and rotation policies.</p>

    <h2>5. Implementation Challenges and Best Practices</h2>
    <p>Implementing Zero Trust is a journey, not a destination. Start by assessing your current security posture and identifying critical assets. Implement changes incrementally, beginning with high-risk applications and user groups. Involve all stakeholders including IT, security, and business teams. Maintain detailed documentation and establish clear accountability for each component of your Zero Trust architecture.</p>

    <h2>Conclusion</h2>
    <p>As cyber threats continue to evolve, Zero Trust Security provides a modern, robust framework for protecting organizational assets. While implementation requires significant effort and cultural change, the benefits in terms of reduced breach risk and improved incident response make it well worth the investment. Organizations that adopt Zero Trust today will be better positioned to defend against tomorrow's threats.</p>
  `,
  tableOfContents: [
    "Introduction",
    "1. Core Principles of Zero Trust",
    "2. Identity and Access Management (IAM)",
    "3. Microsegmentation and Network Architecture",
    "4. Data Protection and Encryption",
    "5. Implementation Challenges and Best Practices",
    "Conclusion",
  ],
};

const COMMENTS = [
  {
    id: "comment-1",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    content:
      "Excellent breakdown of Zero Trust principles. Our organization is currently in the planning phase of implementing this architecture. The section on microsegmentation was particularly helpful. Do you have recommendations for tools?",
    timestamp: "1 hour ago",
    likes: 34,
    replies: [
      {
        id: "reply-1",
        author: {
          name: "Sarah Chen",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        },
        content:
          "Thanks for the question! Tool selection depends heavily on your existing infrastructure. I'd recommend evaluating solutions like Cisco Zero Trust, Zscaler, or cloud-native options like AWS PrivateLink. I'll write a detailed tool comparison soon.",
        timestamp: "45 minutes ago",
        likes: 12,
      },
    ],
  },
  {
    id: "comment-2",
    author: {
      name: "Emily Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    content:
      "This is critical for organizations still relying on VPNs and perimeter-based security. Zero Trust isn't just a technical implementation, it's a cultural shift that requires buy-in from leadership and all departments.",
    timestamp: "2 hours ago",
    likes: 48,
    replies: [],
  },
];

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

export default function Post() {
  const { postId } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(POST_DATA.likes);
  const [localComments, setLocalComments] = useState<Comment[]>(COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [commentCount, setCommentCount] = useState(POST_DATA.comments);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrolled / totalScroll) * 100 : 0;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const generateId = () => `comment-${Date.now()}-${Math.random()}`;

  const addReplyToComment = (
    comments: Comment[],
    commentId: string,
    replyContent: string
  ): Comment[] => {
    return comments.map((comment) => {
      if (comment.id === commentId) {
        const newReply: Comment = {
          id: generateId(),
          author: {
            name: "Your Name",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
          },
          content: replyContent,
          timestamp: "just now",
          likes: 0,
        };
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        };
      }
      if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToComment(comment.replies, commentId, replyContent),
        };
      }
      return comment;
    });
  };

  const handleReply = (commentId: string, content: string) => {
    const updatedComments = addReplyToComment(localComments, commentId, content);
    setLocalComments(updatedComments);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: generateId(),
        author: {
          name: "Your Name",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        },
        content: newComment,
        timestamp: "just now",
        likes: 0,
        replies: [],
      };
      setLocalComments([newCommentObj, ...localComments]);
      setNewComment("");
      setCommentCount(commentCount + 1);
    }
  };

  return (
    <Layout>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1">
        <Progress value={readingProgress} className="h-full rounded-none" />
      </div>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        {/* Hero Image */}
        {POST_DATA.image && (
          <div className="mb-12">
            <img
              src={POST_DATA.image}
              alt={POST_DATA.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="max-w-3xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="blog-tag">{POST_DATA.category}</span>
                    <span className="text-sm text-muted-foreground">
                      {POST_DATA.readTime}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {POST_DATA.title}
                  </h1>

                  <p className="text-lg text-muted-foreground mb-6">
                    {POST_DATA.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-y border-border">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <img
                        src={POST_DATA.author.avatar}
                        alt={POST_DATA.author.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{POST_DATA.author.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {POST_DATA.publishedDate}
                        </p>
                      </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleLike}
                        className={`gap-2 ${
                          isLiked ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <Heart
                          className="h-4 w-4"
                          fill={isLiked ? "currentColor" : "none"}
                        />
                        <span className="text-xs">{likes}</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-2 text-muted-foreground"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-xs">{POST_DATA.comments}</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-2 text-muted-foreground"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setIsSaved(!isSaved)}
                        className={`gap-2 ${
                          isSaved ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <Bookmark
                          className="h-4 w-4"
                          fill={isSaved ? "currentColor" : "none"}
                        />
                      </Button>
                    </div>
                  </div>
                </header>

                {/* Article Content */}
                <div className="prose-blog prose dark:prose-invert max-w-none mb-12">
                  {/* Render HTML content */}
                  <div
                    dangerouslySetInnerHTML={{ __html: POST_DATA.content }}
                    className="prose dark:prose-invert max-w-none"
                  />
                </div>

                {/* Author Info Card */}
                <div className="bg-secondary/50 rounded-lg p-6 mb-12 border border-border">
                  <div className="flex gap-4">
                    <img
                      src={POST_DATA.author.avatar}
                      alt={POST_DATA.author.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {POST_DATA.author.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {POST_DATA.author.bio}
                      </p>
                      <Button className="bg-primary hover:bg-primary/90">
                        Follow Author
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">
                    Comments ({commentCount})
                  </h2>

                  {/* Add Comment Form */}
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border mb-8">
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Share your thoughts about this article
                    </p>
                    <div className="space-y-3">
                      <Textarea
                        placeholder="Write your comment here... (thoughts, questions, insights)"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="resize-none min-h-28"
                      />
                      <div className="flex gap-2">
                        <Button
                          className="bg-primary hover:bg-primary/90"
                          onClick={handleAddComment}
                          disabled={!newComment.trim()}
                        >
                          Post Comment
                        </Button>
                        {newComment.trim() && (
                          <Button
                            variant="outline"
                            onClick={() => setNewComment("")}
                          >
                            Clear
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Comments List */}
                  {localComments.length > 0 ? (
                    <CommentThread
                      comments={localComments}
                      onReply={handleReply}
                    />
                  ) : (
                    <div className="text-center py-12 bg-secondary/20 rounded-lg">
                      <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                      <p className="text-muted-foreground">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    </div>
                  )}
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-8">
                {/* Table of Contents */}
                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {POST_DATA.tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Author Card */}
                <AuthorCard
                  id={POST_DATA.author.id}
                  name={POST_DATA.author.name}
                  bio={POST_DATA.author.bio}
                  avatar={POST_DATA.author.avatar}
                  posts={POST_DATA.author.posts}
                  followers={POST_DATA.author.followers}
                  variant="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <NewsletterForm variant="section" />
        </div>
      </section>
    </Layout>
  );
}
