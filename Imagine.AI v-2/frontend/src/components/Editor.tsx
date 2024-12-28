import React, { useState } from 'react';
import { Play, Copy, Trash } from 'lucide-react';
import { Button } from './ui/Button';

interface EditorProps {
  onSubmit: (input: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-800 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <h2 className="text-white font-medium">Input</h2>
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-slate-400 hover:text-white" onClick={() => setInput('')}>
            <Trash size={18} />
          </Button>
          <Button variant="ghost" className="text-slate-400 hover:text-white" onClick={() => navigator.clipboard.writeText(input)}>
            <Copy size={18} />
          </Button>
          <Button variant="primary" className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
            <Play size={18} className="mr-2" />
            Run
          </Button>
        </div>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full bg-slate-800 text-white p-4 resize-none focus:outline-none"
        placeholder="Enter your prompt here..."
      />
    </div>
  );
};