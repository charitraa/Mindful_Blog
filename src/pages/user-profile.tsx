import React from 'react';
import { Card, CardBody, CardHeader, Avatar, Button, Input, Textarea, Divider, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const UserProfile: React.FC = () => {
  // Mock user data
  const [user, setUser] = React.useState({
    name: 'Alex Morgan',
    email: 'alex@mindfullblog.com',
    role: 'Mindfulness Coach',
    bio: 'Alex Morgan is a certified mindfulness instructor and digital wellness advocate with over a decade of experience helping people develop healthier relationships with technology.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=author1',
    website: 'alexmorgan.com',
    twitter: '@alexmorgan',
    linkedin: 'alex-morgan',
  });

  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
    // In a real app, you would send this data to your API
    console.log('Profile updated:', formData);
  };

  const [selectedTab, setSelectedTab] = React.useState("profile");
  
  // Mock followers data
  const followers = [
    {
      id: 1,
      name: "Jordan Rivers",
      role: "Environmental Scientist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author2"
    },
    {
      id: 2,
      name: "Dr. Taylor Williams",
      role: "Behavioral Psychologist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author3"
    }
  ];
  
  // Mock following data
  const following = [
    {
      id: 3,
      name: "Casey Martinez",
      role: "Workplace Strategist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author4"
    },
    {
      id: 4,
      name: "Robin Chen",
      role: "Cultural Anthropologist",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author5"
    },
    {
      id: 5,
      name: "Morgan Rivera",
      role: "Sustainability Consultant",
      avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author6"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Profile</h1>
          {!isEditing && selectedTab === "profile" && (
            <Button 
              color="primary" 
              variant="flat" 
              onPress={() => setIsEditing(true)}
              startContent={<Icon icon="lucide:edit-2" width={16} height={16} />}
            >
              Edit Profile
            </Button>
          )}
        </div>
        
        <Tabs 
          aria-label="Profile options" 
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab as any}
          className="mb-6"
        >
          <Tab key="profile" title="Profile" />
          <Tab key="followers" title={`Followers (${followers.length})`} />
          <Tab key="following" title={`Following (${following.length})`} />
        </Tabs>
        
        {selectedTab === "profile" ? (
          <>
            <Card className="mb-8" disableRipple>
              <CardHeader className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Profile Information</h2>
              </CardHeader>
              <CardBody>
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col items-center gap-3">
                        <Avatar src={user.avatar} size="lg" className="w-24 h-24" />
                        <Button 
                          size="sm" 
                          variant="flat"
                          startContent={<Icon icon="lucide:upload" width={14} height={14} />}
                        >
                          Change Photo
                        </Button>
                      </div>
                      <div className="flex-grow space-y-4">
                        <Input
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="bordered"
                        />
                        <Input
                          label="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          variant="bordered"
                        />
                        <Input
                          label="Role/Title"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          variant="bordered"
                        />
                      </div>
                    </div>

                    <Textarea
                      label="Bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      variant="bordered"
                      minRows={4}
                    />

                    <Divider />

                    <h3 className="text-lg font-medium">Social Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        startContent={<Icon icon="lucide:globe" width={16} height={16} />}
                        variant="bordered"
                      />
                      <Input
                        label="Twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        startContent={<Icon icon="lucide:twitter" width={16} height={16} />}
                        variant="bordered"
                      />
                      <Input
                        label="LinkedIn"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        startContent={<Icon icon="lucide:linkedin" width={16} height={16} />}
                        variant="bordered"
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="flat" 
                        color="danger" 
                        onPress={() => {
                          setIsEditing(false);
                          setFormData(user);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        color="primary" 
                        type="submit"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <Avatar src={user.avatar} size="lg" className="w-24 h-24" />
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-foreground-500">{user.role}</p>
                        <p className="text-sm text-foreground-500 mt-1">{user.email}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-medium font-medium mb-2">Bio</h4>
                      <p>{user.bio}</p>
                    </div>

                    <Divider />

                    <div>
                      <h4 className="text-medium font-medium mb-3">Social Links</h4>
                      <div className="space-y-2">
                        {user.website && (
                          <div className="flex items-center gap-2">
                            <Icon icon="lucide:globe" width={16} height={16} className="text-foreground-500" />
                            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {user.website}
                            </a>
                          </div>
                        )}
                        {user.twitter && (
                          <div className="flex items-center gap-2">
                            <Icon icon="lucide:twitter" width={16} height={16} className="text-foreground-500" />
                            <a href={`https://twitter.com/${user.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {user.twitter}
                            </a>
                          </div>
                        )}
                        {user.linkedin && (
                          <div className="flex items-center gap-2">
                            <Icon icon="lucide:linkedin" width={16} height={16} className="text-foreground-500" />
                            <a href={`https://linkedin.com/in/${user.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {user.linkedin}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
            
            <Card disableRipple>
              <CardHeader>
                <h2 className="text-xl font-semibold">Account Settings</h2>
              </CardHeader>
              <CardBody className="space-y-6">
                <div>
                  <h3 className="text-medium font-medium mb-3">Password</h3>
                  <Button 
                    variant="flat" 
                    color="primary"
                    startContent={<Icon icon="lucide:key" width={16} height={16} />}
                  >
                    Change Password
                  </Button>
                </div>

                <Divider />

                <div>
                  <h3 className="text-medium font-medium mb-3 text-danger">Danger Zone</h3>
                  <Button 
                    variant="flat" 
                    color="danger"
                    startContent={<Icon icon="lucide:trash-2" width={16} height={16} />}
                  >
                    Delete Account
                  </Button>
                </div>
              </CardBody>
            </Card>
          </>
        ) : selectedTab === "followers" ? (
          <Card disableRipple>
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold mb-4">People who follow you</h2>
              
              {followers.length > 0 ? (
                <div className="space-y-4">
                  {followers.map(follower => (
                    <div key={follower.id} className="flex items-center justify-between border-b border-divider last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center gap-3">
                        <Avatar src={follower.avatar} size="md" />
                        <div>
                          <p className="font-medium">{follower.name}</p>
                          <p className="text-sm text-foreground-500">{follower.role}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="flat">View Profile</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon icon="lucide:users" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
                  <h3 className="text-xl font-medium mb-2">No followers yet</h3>
                  <p className="text-foreground-500">
                    When people follow you, they'll appear here.
                  </p>
                </div>
              )}
            </CardBody>
          </Card>
        ) : (
          <Card disableRipple>
            <CardBody className="p-6">
              <h2 className="text-xl font-semibold mb-4">People you follow</h2>
              
              {following.length > 0 ? (
                <div className="space-y-4">
                  {following.map(user => (
                    <div key={user.id} className="flex items-center justify-between border-b border-divider last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center gap-3">
                        <Avatar src={user.avatar} size="md" />
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-foreground-500">{user.role}</p>
                        </div>
                      </div>
                      <Button size="sm" color="danger" variant="flat">Unfollow</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon icon="lucide:users" width={48} height={48} className="mx-auto mb-4 text-foreground-400" />
                  <h3 className="text-xl font-medium mb-2">You're not following anyone</h3>
                  <p className="text-foreground-500 mb-4">
                    When you follow someone, they'll appear here.
                  </p>
                  <Button color="primary" variant="flat">Discover People</Button>
                </div>
              )}
            </CardBody>
          </Card>
        )}
      </motion.div>
    </div>
  );
};