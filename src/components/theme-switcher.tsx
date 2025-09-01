import React from 'react';
import { Icon } from '@iconify/react';
import { Button, Tooltip } from '@heroui/react';
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <Tooltip 
      content={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="left"
    >
      <Button
        isIconOnly
        color="primary"
        variant="solid"
        className="shadow-lg"
        onPress={handleToggle}
        aria-label="Toggle theme"
      >
        <Icon 
          icon={isDark ? "lucide:sun" : "lucide:moon"} 
          width={20} 
          height={20} 
        />
      </Button>
    </Tooltip>
  );
};