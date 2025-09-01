import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {children}
      </main>
      <Footer />
    </div>
  );
};