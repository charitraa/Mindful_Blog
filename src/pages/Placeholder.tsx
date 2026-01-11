import "../global.css";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 md:py-20">
        <div className="text-center max-w-md px-4">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{title}</h1>

          <p className="text-lg text-muted-foreground mb-8">
            This page is currently being built. Check back soon for exciting new content!
          </p>

          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2">
                Back to Home <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/explore" className="block">
              <Button variant="outline" className="w-full">
                Explore Articles
              </Button>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Want to see this page sooner? Let us know by sending feedback!
          </p>
        </div>
      </div>
    </Layout>
  );
}
