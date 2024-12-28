import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />
    </div>
  );
};