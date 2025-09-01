import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Input, Button, Chip, Textarea } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { RichTextEditor } from '../components/rich-text-editor';

export const CreatePost: React.FC = () => {
  const history = useHistory();
  const [post, setPost] = React.useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    tags: [] as string[],
    categories: [] as string[]
  });
  const [currentTag, setCurrentTag] = React.useState('');
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content: string) => {
    setPost(prev => ({ ...prev, content }));
  };

  const addTag = () => {
    if (currentTag.trim() && !post.tags.includes(currentTag.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tag: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const addCategory = () => {
    if (currentCategory.trim() && !post.categories.includes(currentCategory.trim())) {
      setPost(prev => ({
        ...prev,
        categories: [...prev.categories, currentCategory.trim()]
      }));
      setCurrentCategory('');
    }
  };

  const removeCategory = (category: string) => {
    setPost(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== category)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitting post:', post);
      setIsSubmitting(false);
      
      // In a real app, you would send this to your API and then redirect
      history.push('/');
    }, 1500);
  };

  const handlePreview = () => {
    console.log('Preview post:', post);
    // In a real app, you would show a preview of the post
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Create New Post</h1>
          <div className="flex gap-2">
            <Button
              variant="flat"
              onPress={handlePreview}
              startContent={<Icon icon="lucide:eye" width={18} height={18} />}
            >
              Preview
            </Button>
            <Button
              color="primary"
              onPress={handleSubmit}
              isLoading={isSubmitting}
              startContent={!isSubmitting && <Icon icon="lucide:send" width={18} height={18} />}
            >
              Publish
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card disableRipple>
            <CardHeader>
              <h2 className="text-xl font-semibold">Post Details</h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <Input
                label="Title"
                name="title"
                value={post.title}
                onChange={handleChange}
                variant="bordered"
                size="lg"
                placeholder="Enter a compelling title..."
                isRequired
              />

              <Textarea
                label="Excerpt"
                name="excerpt"
                value={post.excerpt}
                onChange={handleChange}
                variant="bordered"
                placeholder="Write a brief summary of your post..."
                isRequired
              />

              <Input
                label="Cover Image URL"
                name="coverImage"
                value={post.coverImage}
                onChange={handleChange}
                variant="bordered"
                placeholder="Enter image URL or upload..."
                endContent={
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    aria-label="Upload"
                  >
                    <Icon icon="lucide:upload" width={16} height={16} />
                  </Button>
                }
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Categories</label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={currentCategory}
                      onChange={(e) => setCurrentCategory(e.target.value)}
                      placeholder="Add a category..."
                      size="sm"
                      variant="bordered"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addCategory();
                        }
                      }}
                    />
                    <Button
                      isIconOnly
                      size="sm"
                      onPress={addCategory}
                      aria-label="Add category"
                    >
                      <Icon icon="lucide:plus" width={16} height={16} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.categories.map((category) => (
                      <Chip
                        key={category}
                        onClose={() => removeCategory(category)}
                        variant="flat"
                        color="primary"
                      >
                        {category}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      placeholder="Add a tag..."
                      size="sm"
                      variant="bordered"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                    />
                    <Button
                      isIconOnly
                      size="sm"
                      onPress={addTag}
                      aria-label="Add tag"
                    >
                      <Icon icon="lucide:plus" width={16} height={16} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <Chip
                        key={tag}
                        onClose={() => removeTag(tag)}
                        variant="flat"
                      >
                        #{tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card disableRipple>
            <CardHeader>
              <h2 className="text-xl font-semibold">Content</h2>
            </CardHeader>
            <CardBody>
              <RichTextEditor
                value={post.content}
                onChange={handleContentChange}
                minHeight="500px"
              />
            </CardBody>
          </Card>

          <div className="flex justify-end gap-2">
            <Button
              variant="flat"
              color="danger"
              onPress={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button
              variant="flat"
              onPress={() => {
                // Save as draft logic
                console.log('Saving draft:', post);
              }}
            >
              Save as Draft
            </Button>
            <Button
              color="primary"
              type="submit"
              isLoading={isSubmitting}
            >
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};