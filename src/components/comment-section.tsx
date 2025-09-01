import React from 'react';
import { Card, CardBody, Avatar, Textarea, Button, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Comment } from '../types/blog';

interface CommentSectionProps {
  comments: Comment[];
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [commentText, setCommentText] = React.useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      console.log('Submitting comment:', commentText);
      setCommentText('');
      // In a real app, you would send this to your API
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h3>
      
      <Card className="mb-8" disableRipple>
        <CardBody className="p-6">
          <form onSubmit={handleSubmitComment}>
            <div className="flex gap-4">
              <Avatar 
                src="https://img.heroui.chat/image/avatar?w=40&h=40&u=user1" 
                size="md"
              />
              <div className="flex-grow">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onValueChange={setCommentText}
                  minRows={2}
                  className="mb-4"
                />
                <div className="flex justify-end">
                  <Button 
                    color="primary" 
                    type="submit" 
                    isDisabled={!commentText.trim()}
                    endContent={<Icon icon="lucide:send" width={16} height={16} />}
                  >
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
      
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card disableRipple>
              <CardBody className="p-6">
                <div className="flex gap-4">
                  <Avatar src={comment.author.avatar} size="md" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-medium">{comment.author.name}</h4>
                        <p className="text-sm text-foreground-500">
                          {new Date(comment.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:more-horizontal" width={16} height={16} />
                      </Button>
                    </div>
                    <p className="text-foreground-700">{comment.content}</p>
                    <div className="flex gap-4 mt-4">
                      <Button 
                        size="sm" 
                        variant="light" 
                        startContent={<Icon icon="lucide:thumbs-up" width={14} height={14} />}
                      >
                        {comment.likes}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="light" 
                        startContent={<Icon icon="lucide:thumbs-down" width={14} height={14} />}
                      >
                        {comment.dislikes}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="light" 
                        startContent={<Icon icon="lucide:reply" width={14} height={14} />}
                      >
                        Reply
                      </Button>
                    </div>
                    
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 pl-6 border-l-2 border-divider">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="mt-4">
                            <div className="flex gap-3">
                              <Avatar src={reply.author.avatar} size="sm" />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h5 className="font-medium">{reply.author.name}</h5>
                                  <span className="text-xs text-foreground-500">
                                    {new Date(reply.createdAt).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric'
                                    })}
                                  </span>
                                </div>
                                <p className="text-sm text-foreground-700 mt-1">{reply.content}</p>
                                <div className="flex gap-3 mt-2">
                                  <Button size="sm" variant="light" className="text-xs">
                                    <Icon icon="lucide:thumbs-up" width={12} height={12} className="mr-1" />
                                    {reply.likes}
                                  </Button>
                                  <Button size="sm" variant="light" className="text-xs">
                                    <Icon icon="lucide:thumbs-down" width={12} height={12} className="mr-1" />
                                    {reply.dislikes}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};