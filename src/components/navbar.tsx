import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";
import { Icon } from '@iconify/react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Add current user mock data
  const currentUser = {
    name: "Alex Morgan",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=author1",
    email: "alex@mindfullblog.com"
  };

  const handleLogout = () => {
    console.log("User logged out");
    // In a real app, you would handle logout logic here
    // Then redirect to home or login page
  };

  return (
    <HeroNavbar maxWidth="xl" className="border-b border-divider">
      <NavbarBrand>
        <RouterLink to="/" className="flex items-center gap-2">
          <Icon icon="lucide:book-open" width={24} height={24} className="text-primary" />
          <p className="font-semibold text-xl">Mindful Blog</p>
        </RouterLink>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive("/")}>
          <Link as={RouterLink} to="/" color={isActive("/") ? "primary" : "foreground"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/following")}>
          <Link as={RouterLink} to="/following" color={isActive("/following") ? "primary" : "foreground"}>
            Following
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/about")}>
          <Link as={RouterLink} to="/about" color={isActive("/about") ? "primary" : "foreground"}>
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={RouterLink} 
            to="/post/create" 
            color="primary" 
            variant="flat"
            startContent={<Icon icon="lucide:edit-3" width={18} height={18} />}
          >
            Write
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform"
                src={currentUser.avatar}
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu actions">
              <DropdownItem key="profile" textValue="Profile">
                <div className="flex flex-col">
                  <span className="font-semibold">{currentUser.name}</span>
                  <span className="text-xs text-foreground-500">{currentUser.email}</span>
                </div>
              </DropdownItem>
              <DropdownItem key="my-profile" as={RouterLink} to="/profile">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:user" width={16} height={16} />
                  My Profile
                </div>
              </DropdownItem>
              <DropdownItem key="my-posts" as={RouterLink} to="/my-posts">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:file-text" width={16} height={16} />
                  My Posts
                </div>
              </DropdownItem>
              <DropdownItem key="saved-posts" as={RouterLink} to="/saved-posts">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:bookmark" width={16} height={16} />
                  Saved Posts
                </div>
              </DropdownItem>
              <DropdownItem key="new-post" as={RouterLink} to="/post/create">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:plus-circle" width={16} height={16} />
                  New Post
                </div>
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onPress={handleLogout}>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:log-out" width={16} height={16} />
                  Log Out
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};