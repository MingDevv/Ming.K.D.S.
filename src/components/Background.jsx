import React from 'react';

const Background = ({ theme = 'dark' }) => {
  if (theme === 'light') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
        {/* Soft Rose Mesh Gradient Top Right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-200/50 rounded-full blur-[120px] animate-pulse" />
        
        {/* Soft Amber Mesh Gradient Bottom Left */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[120px]" />
        
        {/* Subtle Grid Pattern for Light Mode */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030303]">
      {/* Ambient Red Glow Mesh Top Right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-red-deep/30 rounded-full blur-[140px] animate-pulse" />
      
      {/* Ambient Dark Ruby Glow Bottom Left */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-red-ruby/20 rounded-full blur-[140px]" />

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Particle Glow Effects */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-brand-red-glow animate-ping opacity-75" />
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse opacity-50" />
    </div>
  );
};

export default Background;
