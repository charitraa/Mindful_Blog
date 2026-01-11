import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image?: string;
  readTime: string;
  publishedAt: string;
  likes: number;
  comments: number;
  variant?: "horizontal" | "vertical";
}

export default function BlogCard({
  id,
  title,
  excerpt,
  author,
  category,
  image,
  readTime,
  publishedAt,
  likes,
  comments,
  variant = "vertical",
}: BlogCardProps) {
  if (variant === "horizontal") {
    return (
      <article className="flex gap-6 pb-6 border-b border-border hover:bg-secondary/20 p-4 rounded-lg transition-colors cursor-pointer group">
        {image && (
          <Link to={`/post/${id}`} className="flex-shrink-0 w-40 h-32 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        )}

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-medium">{author.name}</p>
                <p className="text-xs text-muted-foreground">{publishedAt}</p>
              </div>
            </div>

            <Link to={`/post/${id}`}>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                {title}
              </h3>
            </Link>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <span className="px-3 py-1 bg-secondary rounded-full">{category}</span>
              <span>{readTime}</span>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                <span className="text-xs">{likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{comments}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-transparent rounded-lg hover:bg-secondary/30 transition-colors group cursor-pointer h-full flex flex-col p-4 border border-transparent hover:border-border/50">
      {image && (
        <Link to={`/post/${id}`} className="overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}

      <div className="flex flex-col flex-1">
        {/* Author Info at Top */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-medium">{author.name}</p>
            <p className="text-xs text-muted-foreground">{publishedAt}</p>
          </div>
        </div>

        <Link to={`/post/${id}`}>
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span className="px-3 py-1 bg-secondary rounded-full">{category}</span>
            <span>{readTime}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <button className="flex items-center gap-1 hover:text-primary transition-colors p-1 hover:bg-secondary rounded">
              <Heart className="h-4 w-4" />
              <span className="text-xs">{likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors p-1 hover:bg-secondary rounded">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{comments}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
