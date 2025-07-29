import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const OutroSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTypewriter(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={ref}
      className="scroll-section relative h-screen w-full bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-card-black to-deep-black" />
      
      {/* Constellation pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-rose-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px #ff69b4`
            }}
          />
        ))}
      </div>

      {/* Central glow */}
      <div className="absolute inset-0 bg-gradient-radial from-love-pink/10 via-transparent to-transparent" />

      <div className="text-center px-4 md:px-8 max-w-4xl mx-auto relative z-10">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'fade-in-up love-glow' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <h1 className="hero-text text-3xl md:text-6xl text-love-pink mb-12 leading-relaxed font-bold drop-shadow-lg">
            Main Saiyaara tha… hoon… aur shayad hamesha rahunga.
          </h1>
        </div>
        
        <p 
          className={`body-text text-blush-pink/90 mb-12 text-lg md:text-xl leading-relaxed transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '1s' }}
        >
          A journey through love, loss, and longing
        </p>
        
        <div 
          className={`border-t border-love-pink/40 pt-12 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '1.5s' }}
        >
          <p className="text-sm text-love-pink mb-4 font-medium">Created with tears at 3 AM</p>
          <p className="text-xs text-blush-pink/60">© 2024 The Lone Star Project</p>
        </div>
      </div>

      {/* Final sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-love-pink rounded-full opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default OutroSection;