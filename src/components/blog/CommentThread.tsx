import { useState } from "react";
import { ThumbsUp, Reply, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

interface CommentThreadProps {
  comments: Comment[];
  onReply?: (commentId: string, content: string) => void;
}

function CommentItem({
  comment,
  level = 0,
  onReply,
}: {
  comment: Comment;
  level?: number;
  onReply?: (commentId: string, content: string) => void;
}) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleReply = () => {
    if (replyContent.trim()) {
      onReply?.(comment.id, replyContent);
      setReplyContent("");
      setIsReplying(false);
    }
  };

  return (
    <div className={`space-y-4 ${level > 0 ? "ml-6 md:ml-12 border-l border-border pl-4" : ""}`}>
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={comment.author.avatar}
            alt={comment.author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Comment Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-semibold text-sm">{comment.author.name}</p>
              <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
            </div>
            <button className="p-1 hover:bg-secondary rounded-md transition-colors">
              <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          <p className="text-sm mb-3 leading-relaxed">{comment.content}</p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
              <ThumbsUp className="h-4 w-4" />
              <span>{comment.likes}</span>
            </button>
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Reply className="h-4 w-4" />
              <span>Reply</span>
            </button>
          </div>

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-4 space-y-3">
              <Textarea
                placeholder={`Reply to ${comment.author.name}...`}
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="resize-none min-h-24"
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  onClick={handleReply}
                >
                  Reply
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsReplying(false);
                    setReplyContent("");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              level={level + 1}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentThread({
  comments,
  onReply,
}: CommentThreadProps) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={onReply}
        />
      ))}
    </div>
  );
}
