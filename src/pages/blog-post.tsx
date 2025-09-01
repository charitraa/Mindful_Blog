import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Button, Chip, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { CommentSection } from '../components/comment-section';
import { RelatedPosts } from '../components/related-posts';
import { blogPosts } from '../data/blog-posts';

interface RouteParams {
  slug: string;
}

export const BlogPost: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const post = blogPosts.find(post => post.slug === slug);
  const [isSaved, setIsSaved] = React.useState(false);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const handleSavePost = () => {
    setIsSaved(!isSaved);
    // In a real app, you would save this to the user's profile
    console.log(`Post ${isSaved ? 'unsaved' : 'saved'}: ${post?.title}`);
  };
  
  if (!post) {
    return (
      <div className="text-center py-20">
        <Icon icon="lucide:file-question" width={64} height={64} className="mx-auto mb-4 text-foreground-400" />
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <p className="text-foreground-500 mb-6">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <Button 
          as={Link} 
          to="/" 
          color="primary"
          startContent={<Icon icon="lucide:arrow-left" width={16} height={16} />}
        >
          Back to Home
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-6">
          <Button
            as={Link}
            to="/"
            variant="light"
            size="sm"
            startContent={<Icon icon="lucide:arrow-left" width={16} height={16} />}
            className="mb-6"
          >
            Back to all posts
          </Button>
          
          <div className="flex gap-2 mb-4 flex-wrap">
            {post.categories.map((category, index) => (
              <Chip key={index} color="primary" variant="flat">
                {category}
              </Chip>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <Avatar src={post.author.avatar} size="md" />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center gap-2 text-sm text-foreground-500">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-large overflow-hidden mb-8">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="flex flex-wrap gap-3 mt-8 mb-6">
            {post.tags.map((tag, index) => (
              <Chip key={index} variant="flat" size="sm" radius="sm">
                #{tag}
              </Chip>
            ))}
          </div>
          
          <Divider className="my-8" />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button
                isIconOnly
                variant="flat"
                aria-label="Like post"
              >
                <Icon icon="lucide:heart" width={20} height={20} />
              </Button>
              <Button
                isIconOnly
                variant="flat"
                aria-label={isSaved ? "Unsave post" : "Save post"}
                onPress={handleSavePost}
              >
                <Icon 
                  icon={isSaved ? "lucide:bookmark-minus" : "lucide:bookmark"} 
                  width={20} 
                  height={20}
                  className={isSaved ? "text-primary" : ""}
                />
              </Button>
              <Button
                isIconOnly
                variant="flat"
                aria-label="Share post"
              >
                <Icon icon="lucide:share" width={20} height={20} />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="flat"
                size="sm"
                startContent={<Icon icon="lucide:twitter" width={16} height={16} />}
              >
                Tweet
              </Button>
              <Button
                variant="flat"
                size="sm"
                startContent={<Icon icon="lucide:facebook" width={16} height={16} />}
              >
                Share
              </Button>
            </div>
          </div>
          
          <Divider className="my-8" />
          
          <div className="bg-content2 rounded-large p-6 flex flex-col md:flex-row gap-6 items-center">
            <Avatar src={post.author.avatar} size="lg" />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-1">{post.author.name}</h3>
              <p className="text-sm text-foreground-500 mb-3">{post.author.role}</p>
              <p className="mb-4">{post.author.bio}</p>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="flat"
                  startContent={<Icon icon="lucide:user-plus" width={16} height={16} />}
                >
                  Follow
                </Button>
                <Button
                  size="sm"
                  variant="flat"
                  startContent={<Icon icon="lucide:mail" width={16} height={16} />}
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
          
          <RelatedPosts posts={blogPosts} currentPostSlug={post.slug} />
          
          <CommentSection comments={post.comments} />
        </div>
      </motion.div>
    </div>
  );
};