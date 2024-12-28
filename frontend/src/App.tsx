import React from 'react';
import { Background } from './components/layout/Background';
import { Logo } from './components/layout/Logo';
import { Hero } from './components/home/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Background />
      <Logo />
      <Hero />
    </div>
  );
}

export default App;