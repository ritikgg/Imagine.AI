import React from 'react';
import { Link2, Wand2 } from 'lucide-react';

export const Prompt = () => {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
        <textarea 
          placeholder="How can Imagine.AI help you today?"
          className="w-full bg-transparent text-white resize-none outline-none min-h-[100px]"
        />
        <div className="flex items-center gap-2 mt-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Link2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Wand2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};