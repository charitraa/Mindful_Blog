import React from 'react';
import { Input, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { BlogCard } from '../components/blog-card';
import { blogPosts } from '../data/blog-posts';

export const SavedPosts: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Mock saved posts data (using a subset of blog posts)
  const savedPostIds = [2, 3, 5]; // IDs of saved posts
  const savedPosts = blogPosts.filter(post => savedPostIds.includes(post.id));
  
  // Filter posts based on search query
  const filteredPosts = savedPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories.some(category => 
      category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Saved Posts</h1>
          <p className="text-foreground-500">
            Posts you've bookmarked for later reading
          </p>
        </div>
        
        <div className="mb-8">
          <Input
            placeholder="Search saved posts..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={<Icon icon="lucide:search" width={18} height={18} />}
            endContent={
              searchQuery && (
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  onPress={() => setSearchQuery('')}
                >
                  <Icon icon="lucide:x" width={14} height={14} />
                </Button>
              )
            }
            className="max-w-md"
          />
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Chip 
              variant="flat" 
              color="primary"
              onClose={() => console.log('All filter removed')}
            >
              All
            </Chip>
            {Array.from(new Set(savedPosts.flatMap(post => post.categories))).map((category, index) => (
              <Chip 
                key={index} 
                variant="flat"
                onClose={() => console.log(`${category} filter removed`)}
              >
                {category}
              </Chip>
            ))}
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon icon="lucide:bookmark" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
            <h3 className="text-xl font-medium mb-2">No saved posts found</h3>
            <p className="text-foreground-500 mb-6">
              {searchQuery 
                ? "No saved posts match your search criteria." 
                : "You haven't saved any posts yet. Click the bookmark icon on any post to save it for later."}
            </p>
            <Button 
              as="a" 
              href="/" 
              color="primary" 
              variant="flat"
            >
              Browse Posts
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};