import "../global.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditPost() {
  const { postId } = useParams();
  const [formData, setFormData] = useState({
    title: "The Future of Web Development: What You Need to Know in 2025",
    excerpt: "Explore the latest trends, frameworks, and best practices that are shaping the future of web development.",
    content: "The web development landscape is evolving at an unprecedented pace...",
    category: "Technology",
    tags: "web-dev, javascript, react",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Article updated successfully!");
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold">Edit Article</h1>
              <p className="text-muted-foreground">
                Post #{postId}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8 border-b border-border flex gap-4">
            <button
              onClick={() => setPreviewMode(false)}
              className={`pb-4 font-medium transition-colors border-b-2 ${
                !previewMode
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => setPreviewMode(true)}
              className={`pb-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${
                previewMode
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>
          </div>

          {!previewMode ? (
            <form className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-base font-semibold mb-2 block">
                  Article Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="text-2xl font-bold h-auto py-3"
                />
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt" className="text-base font-semibold mb-2 block">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={2}
                  className="resize-none"
                />
              </div>

              {/* Cover Image */}
              <div>
                <Label htmlFor="coverImage" className="text-base font-semibold mb-2 block">
                  Cover Image URL
                </Label>
                <Input
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                />
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content" className="text-base font-semibold mb-2 block">
                  Content
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={15}
                  className="resize-none"
                />
              </div>

              {/* Meta Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category" className="text-base font-semibold mb-2 block">
                    Category
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background"
                  >
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Business</option>
                    <option>Productivity</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="tags" className="text-base font-semibold mb-2 block">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <Link to="/dashboard">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2 flex-1"
                >
                  <Save className="h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {formData.coverImage && (
                <img
                  src={formData.coverImage}
                  alt="Cover"
                  className="w-full h-96 object-cover rounded-lg"
                />
              )}
              <div>
                <span className="blog-tag mb-4 inline-block">{formData.category}</span>
                <h1 className="text-4xl font-bold mb-4">{formData.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{formData.excerpt}</p>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-wrap">{formData.content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
