import React from 'react';
import { Gift } from 'lucide-react';

export const Banner = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-emerald-600 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
        <span>Happy end of year! Prompt during the holidays with 2M free</span>
        <Gift className="w-4 h-4" />
        <span>tokens!</span>
      </div>
    </div>
  );
};