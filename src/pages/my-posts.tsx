import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog-posts';

export const MyPosts: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("published");
  
  // Filter posts to show only those by the current user (Alex Morgan)
  const userPosts = blogPosts.filter(post => post.author.name === "Alex Morgan");
  
  // Mock drafts data
  const draftPosts = [
    {
      id: 101,
      title: "The Future of Mindfulness in Education",
      excerpt: "Exploring how mindfulness practices are being integrated into educational curricula worldwide.",
      lastEdited: "2023-11-10T14:30:00Z",
      coverImage: "https://img.heroui.chat/image/landscape?w=800&h=500&u=draft1"
    },
    {
      id: 102,
      title: "Digital Minimalism: A Path to Focus",
      excerpt: "How reducing digital clutter can lead to improved concentration and mental clarity.",
      lastEdited: "2023-11-05T09:15:00Z",
      coverImage: "https://img.heroui.chat/image/landscape?w=800&h=500&u=draft2"
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Posts</h1>
          <Button
            as={Link}
            to="/post/create"
            color="primary"
            startContent={<Icon icon="lucide:plus" width={18} height={18} />}
          >
            New Post
          </Button>
        </div>

        <Tabs 
          aria-label="Post options" 
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab as any}
          className="mb-6"
        >
          <Tab key="published" title="Published" />
          <Tab key="drafts" title="Drafts" />
        </Tabs>

        {selectedTab === "published" ? (
          <>
            {userPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden" disableRipple>
                    <CardBody className="p-0">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex gap-2 mb-2 flex-wrap">
                          {post.categories.slice(0, 2).map((category, index) => (
                            <Chip key={index} size="sm" variant="flat">
                              {category}
                            </Chip>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-foreground-500 text-sm line-clamp-2">{post.excerpt}</p>
                      </div>
                    </CardBody>
                    <CardFooter className="flex justify-between items-center border-t border-divider p-4">
                      <div className="text-sm text-foreground-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          as={Link}
                          to={`/post/${post.slug}`}
                          size="sm"
                          variant="flat"
                        >
                          View
                        </Button>
                        <Dropdown>
                          <DropdownTrigger>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                            >
                              <Icon icon="lucide:more-vertical" width={16} height={16} />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Post actions">
                            <DropdownItem key="edit">
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:edit-2" width={16} height={16} />
                                Edit
                              </div>
                            </DropdownItem>
                            <DropdownItem key="stats">
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:bar-chart-2" width={16} height={16} />
                                View Stats
                              </div>
                            </DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:trash-2" width={16} height={16} />
                                Delete
                              </div>
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon icon="lucide:file-text" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
                <h3 className="text-xl font-medium mb-2">No published posts yet</h3>
                <p className="text-foreground-500 mb-6">
                  Start writing and publish your first post to see it here.
                </p>
                <Button
                  as={Link}
                  to="/post/create"
                  color="primary"
                  startContent={<Icon icon="lucide:edit-3" width={18} height={18} />}
                >
                  Create Your First Post
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            {draftPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {draftPosts.map((draft) => (
                  <Card key={draft.id} className="overflow-hidden" disableRipple>
                    <CardBody className="p-0">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={draft.coverImage}
                          alt={draft.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{draft.title}</h3>
                        <p className="text-foreground-500 text-sm line-clamp-2">{draft.excerpt}</p>
                      </div>
                    </CardBody>
                    <CardFooter className="flex justify-between items-center border-t border-divider p-4">
                      <div className="text-sm text-foreground-500">
                        Last edited: {new Date(draft.lastEdited).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="flat"
                          color="primary"
                        >
                          Continue Editing
                        </Button>
                        <Dropdown>
                          <DropdownTrigger>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                            >
                              <Icon icon="lucide:more-vertical" width={16} height={16} />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Draft actions">
                            <DropdownItem key="publish">
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:send" width={16} height={16} />
                                Publish
                              </div>
                            </DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:trash-2" width={16} height={16} />
                                Delete
                              </div>
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon icon="lucide:file-edit" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
                <h3 className="text-xl font-medium mb-2">No drafts found</h3>
                <p className="text-foreground-500 mb-6">
                  You don't have any saved drafts. Start writing and save as draft to see it here.
                </p>
                <Button
                  as={Link}
                  to="/post/create"
                  color="primary"
                  startContent={<Icon icon="lucide:edit-3" width={18} height={18} />}
                >
                  Start Writing
                </Button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};