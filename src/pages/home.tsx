import React from 'react';
import { Input, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { BlogCard } from '../components/blog-card';
import { FeaturedPost } from '../components/featured-post';
import { Pagination } from '../components/pagination';
import { blogPosts } from '../data/blog-posts';

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');
  const postsPerPage = 6;
  
  // Get featured post
  const featuredPost = blogPosts[0];
  
  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories.some(category => 
      category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mindful Blog</h1>
        <p className="text-xl text-foreground-600 max-w-2xl">
          Exploring ideas that matter through thoughtful writing and meaningful conversations.
        </p>
      </motion.div>
      
      <div className="mb-8">
        <Input
          placeholder="Search posts..."
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
      
      {searchQuery === '' && <FeaturedPost post={featuredPost} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <Icon icon="lucide:search-x" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
          <h3 className="text-xl font-medium mb-2">No posts found</h3>
          <p className="text-foreground-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <Button 
            color="primary" 
            variant="flat" 
            className="mt-4"
            onPress={() => setSearchQuery('')}
          >
            Clear Search
          </Button>
        </div>
      )}
      
      {filteredPosts.length > postsPerPage && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};