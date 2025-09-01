import React from 'react';
import { Avatar, Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold mb-6">About Mindful Blog</h1>
        
        <div className="mb-12">
          <img 
            src="https://img.heroui.chat/image/landscape?w=1200&h=400&u=about-header" 
            alt="Mindful Blog Team" 
            className="w-full h-auto rounded-large mb-6"
          />
          
          <p className="text-xl mb-4">
            Welcome to Mindful Blog, a space dedicated to thoughtful writing and meaningful conversations.
          </p>
          
          <p className="mb-4">
            Founded in 2023, Mindful Blog aims to explore ideas that matter through carefully crafted articles, essays, and stories. We believe in the power of words to inspire, challenge, and transform.
          </p>
          
          <p className="mb-4">
            Our team of writers and contributors comes from diverse backgrounds and perspectives, united by a shared commitment to quality content and authentic expression.
          </p>
          
          <p>
            Whether you're here to read, write, or engage with our community, we're glad you've found us. Take your time, explore our content, and join the conversation.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card disableRipple>
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <Avatar src={member.avatar} size="lg" className="mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-foreground-500 mb-3">{member.role}</p>
                  <p className="mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <Button
                      isIconOnly
                      variant="light"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Icon icon="lucide:twitter" width={18} height={18} />
                    </Button>
                    <Button
                      isIconOnly
                      variant="light"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Icon icon="lucide:linkedin" width={18} height={18} />
                    </Button>
                    <Button
                      isIconOnly
                      variant="light"
                      aria-label={`Email ${member.name}`}
                    >
                      <Icon icon="lucide:mail" width={18} height={18} />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card disableRipple>
                <CardBody className="p-6">
                  <div className="bg-primary/10 p-3 rounded-medium w-12 h-12 flex items-center justify-center mb-4">
                    <Icon icon={mission.icon} width={24} height={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{mission.title}</h3>
                  <p className="text-foreground-600">{mission.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        
        <Card disableRipple className="mb-12">
          <CardBody className="p-6">
            <p className="mb-6">
              Have questions, feedback, or want to contribute? We'd love to hear from you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="flex items-center gap-2 mb-4">
                  <Icon icon="lucide:mail" width={18} height={18} className="text-primary" />
                  <span>hello@mindfullblog.com</span>
                </p>
                
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-3">
                  <Button
                    isIconOnly
                    variant="flat"
                    aria-label="Twitter"
                  >
                    <Icon icon="lucide:twitter" width={18} height={18} />
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    aria-label="Instagram"
                  >
                    <Icon icon="lucide:instagram" width={18} height={18} />
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    aria-label="LinkedIn"
                  >
                    <Icon icon="lucide:linkedin" width={18} height={18} />
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="flex items-center gap-2 mb-1">
                  <Icon icon="lucide:map-pin" width={18} height={18} className="text-primary" />
                  <span>123 Creativity Lane</span>
                </p>
                <p className="mb-4 ml-6">San Francisco, CA 94103</p>
                
                <h4 className="font-semibold mb-2">Working Hours</h4>
                <p className="mb-1">Monday - Friday: 9am - 5pm</p>
                <p>Weekend: By appointment</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Founder & Editor-in-Chief',
    bio: 'Writer, editor, and storyteller with a passion for meaningful content that connects and inspires.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=team1'
  },
  {
    id: 2,
    name: 'Jamie Chen',
    role: 'Senior Writer',
    bio: 'Specializes in technology, culture, and their intersection. Previously wrote for Tech Insider and The Verge.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=team2'
  },
  {
    id: 3,
    name: 'Taylor Williams',
    role: 'Creative Director',
    bio: 'Designer and visual storyteller focused on creating immersive digital experiences.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=team3'
  },
  {
    id: 4,
    name: 'Jordan Lee',
    role: 'Contributing Editor',
    bio: 'Journalist and essayist covering social issues, politics, and community stories.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=team4'
  },
  {
    id: 5,
    name: 'Casey Rivera',
    role: 'Community Manager',
    bio: 'Building and nurturing our community of readers and contributors through engagement and events.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=team5'
  },
  {
    id: 6,
    name: 'Morgan Smith',
    role: 'Tech Lead',
    bio: 'Developer and digital strategist ensuring our platform delivers the best possible reading experience.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=team6'
  }
];

const missions = [
  {
    icon: 'lucide:book-open',
    title: 'Quality Content',
    description: 'We publish thoughtful, well-researched articles that inform, inspire, and provoke thought.'
  },
  {
    icon: 'lucide:users',
    title: 'Community',
    description: 'We foster a welcoming space for readers and writers to connect, discuss, and grow together.'
  },
  {
    icon: 'lucide:lightbulb',
    title: 'Innovation',
    description: 'We explore new ideas and perspectives, challenging conventional thinking and encouraging creativity.'
  }
];