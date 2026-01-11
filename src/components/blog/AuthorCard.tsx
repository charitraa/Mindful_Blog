import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

interface AuthorCardProps {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  posts: number;
  followers: number;
  isFollowing?: boolean;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  variant?: "compact" | "full";
}

export default function AuthorCard({
  id,
  name,
  bio,
  avatar,
  posts,
  followers,
  isFollowing = false,
  socialLinks = {},
  variant = "compact",
}: AuthorCardProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
        <Link
          to={`/author/${id}`}
          className="flex items-center gap-3 flex-1 hover:opacity-80 transition-opacity"
        >
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{followers} followers</p>
          </div>
        </Link>

        <Button
          variant={isFollowing ? "outline" : "default"}
          className={isFollowing ? "bg-transparent" : "bg-primary"}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 max-w-sm w-full">
      <div className="text-center">
        <img
          src={avatar}
          alt={name}
          className="h-20 w-20 rounded-full object-cover mx-auto mb-4"
        />

        <Link to={`/author/${id}`}>
          <h3 className="text-xl font-semibold hover:text-primary transition-colors mb-2">
            {name}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-4">{bio}</p>

        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-border">
          <div>
            <p className="text-2xl font-semibold">{posts}</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">{followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
        </div>

        {/* Social Links */}
        {Object.keys(socialLinks).length > 0 && (
          <div className="flex items-center justify-center gap-3 mb-6">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {socialLinks.website && (
              <a
                href={socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-primary"
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        )}

        <Button className="w-full bg-primary hover:bg-primary/90">
          Follow
        </Button>
      </div>
    </div>
  );
}
