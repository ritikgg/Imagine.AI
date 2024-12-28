import React from 'react';
import { Prompt } from './Prompt';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        What do you want to build?
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Prompt, run, edit, and deploy full-stack web apps.
      </p>
      <Prompt />
    </div>
  );
};