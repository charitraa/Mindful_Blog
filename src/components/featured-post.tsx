import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-visible mb-12" disableRipple>
        <CardBody className="p-0 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 md:h-auto overflow-hidden rounded-t-medium md:rounded-l-medium md:rounded-tr-none">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <div className="flex gap-2 mb-3">
                <Chip color="primary" variant="flat" size="sm">Featured</Chip>
                {post.categories.slice(0, 1).map((category, index) => (
                  <Chip key={index} variant="flat" size="sm">{category}</Chip>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{post.title}</h2>
              <p className="text-foreground-500 mb-6 flex-grow">{post.excerpt}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar src={post.author.avatar} size="md" />
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-foreground-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <Button 
                  as={Link}
                  to={`/post/${post.slug}`}
                  color="primary" 
                  variant="flat"
                  endContent={<Icon icon="lucide:arrow-right" width={16} height={16} />}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};