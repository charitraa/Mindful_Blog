import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
  currentPostSlug: string;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, currentPostSlug }) => {
  // Filter out the current post and limit to 3 related posts
  const relatedPosts = posts
    .filter(post => post.slug !== currentPostSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 mb-8">
      <h3 className="text-2xl font-semibold mb-6">Related Posts</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              isPressable 
              as={Link} 
              to={`/post/${post.slug}`}
              className="h-full"
              disableRipple
            >
              <CardBody className="p-0">
                <div className="h-40 overflow-hidden rounded-t-medium">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {post.categories.slice(0, 1).map((category, idx) => (
                      <Chip key={idx} size="sm" variant="flat">
                        {category}
                      </Chip>
                    ))}
                  </div>
                  <h4 className="font-medium line-clamp-2">{post.title}</h4>
                </div>
              </CardBody>
              <CardFooter className="text-xs text-foreground-500 border-t border-divider p-4">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};