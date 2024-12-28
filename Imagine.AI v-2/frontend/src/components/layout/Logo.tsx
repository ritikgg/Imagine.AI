import React from 'react';
import { Sparkles } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-white" />
        <span className="text-white text-xl font-bold">Imagine.AI</span>
      </div>
    </div>
  );
};