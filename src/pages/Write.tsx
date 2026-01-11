import "../global.css";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Italic,
  List,
  Link,
  Image,
  Code,
  Save,
  Eye,
  Send,
} from "lucide-react";

export default function Write() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Technology",
    tags: "",
    coverImage: "",
  });
  const [isPublishing, setIsPublishing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      alert("Article published successfully!");
    }, 1500);
  };

  const EditorToolbar = () => (
    <div className="flex items-center gap-1 p-3 border-b border-border bg-secondary/30 rounded-t-lg overflow-x-auto">
      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Bold">
        <Bold className="h-5 w-5" />
      </button>
      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Italic">
        <Italic className="h-5 w-5" />
      </button>
      <div className="w-px h-6 bg-border mx-1" />
      <button className="p-2 hover:bg-secondary rounded transition-colors" title="List">
        <List className="h-5 w-5" />
      </button>
      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Link">
        <Link className="h-5 w-5" />
      </button>
      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Image">
        <Image className="h-5 w-5" />
      </button>
      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Code">
        <Code className="h-5 w-5" />
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Write an Article</h1>
            <p className="text-lg text-muted-foreground">
              Share your insights and ideas with our community.
            </p>
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
              Write
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
                  placeholder="Write an engaging title..."
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
                  placeholder="Brief summary of your article..."
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
                  placeholder="https://example.com/image.jpg"
                  value={formData.coverImage}
                  onChange={handleChange}
                />
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content" className="text-base font-semibold mb-2 block">
                  Content
                </Label>
                <div className="border border-border rounded-lg overflow-hidden">
                  <EditorToolbar />
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="Start writing your article here..."
                    value={formData.content}
                    onChange={handleChange}
                    rows={15}
                    className="resize-none border-0 rounded-none focus-visible:ring-0"
                  />
                </div>
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
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Business</option>
                    <option>Productivity</option>
                    <option>Culture</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="tags" className="text-base font-semibold mb-2 block">
                    Tags (comma-separated)
                  </Label>
                  <Input
                    id="tags"
                    name="tags"
                    placeholder="react, javascript, web-dev"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <Button variant="outline">
                  <Save className="h-4 w-4 mr-2" />
                  Save as Draft
                </Button>
                <Button
                  onClick={handlePublish}
                  disabled={isPublishing}
                  className="bg-primary hover:bg-primary/90 flex-1"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isPublishing ? "Publishing..." : "Publish Article"}
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
                <h1 className="text-4xl font-bold mb-4">{formData.title || "Article Title"}</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {formData.excerpt || "Article excerpt will appear here"}
                </p>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-wrap">
                  {formData.content || "Start writing to see your article preview here..."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
