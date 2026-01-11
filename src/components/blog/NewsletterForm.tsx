import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

interface NewsletterFormProps {
  variant?: "inline" | "section";
}

export default function NewsletterForm({ variant = "section" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate subscription
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
      setIsLoading(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 800);
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-secondary border-none"
        />
        <Button
          type="submit"
          className="bg-primary hover:bg-primary/90 flex-shrink-0"
          disabled={isLoading}
        >
          {isLoading ? "..." : "Subscribe"}
        </Button>
      </form>
    );
  }

  return (
    <section className="bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
      {isSubmitted ? (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold">Welcome to our newsletter!</h3>
          <p className="text-muted-foreground">
            Check your email for a confirmation link.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Mail className="h-12 w-12 text-primary" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Never miss an article
            </h3>
            <p className="text-muted-foreground">
              Get the latest stories, insights, and inspiration delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border"
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 flex-shrink-0"
              disabled={isLoading}
            >
              {isLoading ? "..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            No spam, no marketing jargon. Just quality content.
          </p>
        </div>
      )}
    </section>
  );
}
