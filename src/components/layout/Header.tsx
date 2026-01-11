import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X, Settings } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-foreground">
              ArticleHub
            </div>
          </Link>

          {/* Search - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-secondary border-none text-sm h-9"
              />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Explore
            </Link>
            <Link
              to="/trending"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Trending
            </Link>
          </nav>

          {/* Auth Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/settings" title="Settings">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-foreground">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-secondary border-none"
                />
              </div>
            </div>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="block px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/trending"
              className="block px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </Link>
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button
                  variant="ghost"
                  className="w-full text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
