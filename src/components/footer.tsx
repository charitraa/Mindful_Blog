import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content1 border-t border-divider py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:book-open" width={24} height={24} className="text-primary" />
              <h3 className="font-semibold text-xl">Mindful Blog</h3>
            </div>
            <p className="text-foreground-500 mb-4">
              Exploring ideas that matter through thoughtful writing and meaningful conversations.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-foreground-500 hover:text-primary transition-colors">
                <Icon icon="lucide:twitter" width={20} height={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-foreground-500 hover:text-primary transition-colors">
                <Icon icon="lucide:instagram" width={20} height={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-foreground-500 hover:text-primary transition-colors">
                <Icon icon="lucide:linkedin" width={20} height={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground-500 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground-500 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/post/create" className="text-foreground-500 hover:text-primary transition-colors">
                  Write a Post
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Subscribe</h4>
            <p className="text-foreground-500 mb-4">
              Get the latest posts delivered straight to your inbox.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-medium border border-divider bg-content1 flex-grow"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary text-white rounded-medium hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 text-center text-foreground-500">
          <p>© {new Date().getFullYear()} Mindful Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};