import React from 'react';
import { Input, Button, Avatar, Card, CardBody, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { BlogCard } from '../components/blog-card';
import { blogPosts } from '../data/blog-posts';

export const Following: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("posts");
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Mock following users data
  const followingUsers = [
    {
      id: 1,
      name: "Jordan Rivers",
      role: "Environmental Scientist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author2",
      isFollowing: true
    },
    {
      id: 2,
      name: "Dr. Taylor Williams",
      role: "Behavioral Psychologist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author3",
      isFollowing: true
    },
    {
      id: 3,
      name: "Casey Martinez",
      role: "Workplace Strategist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author4",
      isFollowing: true
    }
  ];
  
  // Mock suggested users to follow
  const suggestedUsers = [
    {
      id: 4,
      name: "Robin Chen",
      role: "Cultural Anthropologist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author5",
      isFollowing: false
    },
    {
      id: 5,
      name: "Morgan Rivera",
      role: "Sustainability Consultant",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author6",
      isFollowing: false
    }
  ];
  
  // Filter posts to only show those from followed users
  const followingUserNames = followingUsers.map(user => user.name);
  const followingPosts = blogPosts.filter(post => 
    followingUserNames.includes(post.author.name)
  );
  
  // Filter users based on search query
  const filteredFollowingUsers = followingUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredSuggestedUsers = suggestedUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Following</h1>
          <p className="text-foreground-500">
            Stay updated with posts from people you follow
          </p>
        </div>
        
        <div className="mb-6">
          <Input
            placeholder="Search users..."
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
        
        <Tabs 
          aria-label="Following options" 
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab as any}
          className="mb-6"
        >
          <Tab key="posts" title="Posts" />
          <Tab key="people" title="People" />
        </Tabs>
        
        {selectedTab === "posts" ? (
          <>
            {followingPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {followingPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon icon="lucide:users" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
                <h3 className="text-xl font-medium mb-2">No posts from people you follow</h3>
                <p className="text-foreground-500 mb-6">
                  Follow more writers to see their posts here, or they haven't published anything yet.
                </p>
                <Button 
                  color="primary" 
                  variant="flat"
                  onPress={() => setSelectedTab("people")}
                >
                  Discover People to Follow
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">People you follow</h2>
              {filteredFollowingUsers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredFollowingUsers.map((user) => (
                    <UserCard 
                      key={user.id} 
                      user={user} 
                      onFollowToggle={() => console.log(`Unfollowed ${user.name}`)} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-content2 rounded-large">
                  <p className="text-foreground-500">No matching users found</p>
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Suggested for you</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSuggestedUsers.map((user) => (
                  <UserCard 
                    key={user.id} 
                    user={user} 
                    onFollowToggle={() => console.log(`Followed ${user.name}`)} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

interface UserCardProps {
  user: {
    id: number;
    name: string;
    role: string;
    avatar: string;
    isFollowing: boolean;
  };
  onFollowToggle: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onFollowToggle }) => {
  const [isFollowing, setIsFollowing] = React.useState(user.isFollowing);
  
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    onFollowToggle();
  };
  
  return (
    <Card disableRipple>
      <CardBody className="p-4">
        <div className="flex items-center gap-3">
          <Avatar src={user.avatar} size="lg" />
          <div className="flex-grow">
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-sm text-foreground-500">{user.role}</p>
          </div>
          <Button
            size="sm"
            color={isFollowing ? "default" : "primary"}
            variant={isFollowing ? "bordered" : "solid"}
            onPress={handleFollowToggle}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};