import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowContent(true);
    }
  }, [isVisible]);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={ref}
      className="scroll-section relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-rose-gold rounded-full opacity-20 float-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <h1 
          className={`hero-text text-4xl md:text-7xl font-bold text-rose-gold mb-6 glow-text transition-all duration-1000 ${
            showContent ? 'fade-in-up heartbeat' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Saiyaara
        </h1>
        
        <p 
          className={`quote-text text-2xl md:text-4xl italic text-white mb-8 transition-all duration-1000 ${
            showContent ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          The Lone Star
        </p>
        
        <div 
          className={`border-t border-b border-rose-gold py-6 my-8 ambient-glow transition-all duration-1000 ${
            showContent ? 'fade-in-up love-glow' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.8s' }}
        >
          <p className="dialogue-text text-xl md:text-2xl text-white leading-relaxed">
            "Jo rishta tha… ab sirf yaadon ka ek saaya reh gaya."
          </p>
        </div>
        
        <div 
          className={`mt-8 transition-all duration-1000 ${
            showContent ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '1.1s' }}
        >
          <button 
            onClick={scrollToNext}
            className="enhanced-button px-8 py-4 text-lg font-medium rounded-sm pulse-button relative overflow-hidden group"
          >
            <span className="relative z-10">Begin the Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
      
      {/* Romantic scroll indicator */}
      <div 
        className={`absolute bottom-10 left-0 right-0 flex justify-center transition-all duration-1000 ${
          showContent ? 'fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '1.4s' }}
      >
        <div className="text-2xl text-rose-gold animate-bounce heartbeat">♥</div>
      </div>
    </section>
  );
};

export default HeroSection;