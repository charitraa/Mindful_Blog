import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Chip, Avatar } from '@heroui/react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="overflow-visible h-full"
        isPressable
        as={Link}
        to={`/post/${post.slug}`}
        disableRipple
      >
        <CardBody className="p-0 overflow-visible">
          <div className="h-48 overflow-hidden rounded-t-medium">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="flex gap-2 mb-3 flex-wrap">
              {post.categories.map((category, index) => (
                <Chip 
                  key={index} 
                  size="sm" 
                  variant="flat" 
                  color="primary"
                >
                  {category}
                </Chip>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-foreground-500 line-clamp-3 mb-4">{post.excerpt}</p>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center border-t border-divider p-5">
          <div className="flex items-center gap-2">
            <Avatar src={post.author.avatar} size="sm" />
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-foreground-500">{post.author.role}</p>
            </div>
          </div>
          <div className="text-sm text-foreground-500">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};