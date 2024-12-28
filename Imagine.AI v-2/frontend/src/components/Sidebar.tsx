import React from 'react';
import { Menu, Settings, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';

interface SidebarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDark, onThemeToggle }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-slate-900 flex flex-col items-center py-4 space-y-4">
      <Button variant="ghost" className="text-white">
        <Menu size={20} />
      </Button>
      
      <div className="flex-1" />
      
      <Button variant="ghost" className="text-white" onClick={onThemeToggle}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
      
      <Button variant="ghost" className="text-white">
        <Settings size={20} />
      </Button>
    </div>
  );
};