import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ClipsGallery: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const clips = [
    {
      id: "BSJa1UytM8w",
      title: "Saiyaara - Emotional Moment",
      description: "A heart-wrenching scene"
    },
    {
      id: "0v5eHPfy5Lk",
      title: "Saiyaara - Heartbreak Scene",
      description: "The pain of separation"
    },
    {
      id: "D9DiMnlpFK8",
      title: "Saiyaara - Poetic Dialogue",
      description: "Words that touch the soul"
    }
  ];

  return (
    <section 
      ref={ref}
      className="scroll-section relative h-screen w-full bg-deep-black py-16 overflow-hidden"
    >
      {/* Romantic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-burgundy/10 to-deep-black" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 
          className={`hero-text text-3xl md:text-5xl font-bold text-rose-gold mb-16 text-center glow-text transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          Fragments of Memory
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {clips.map((clip, index) => (
            <div 
              key={clip.id}
              className={`enhanced-card w-full lg:w-1/3 max-w-md transition-all duration-1000 ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 1) 100%)'
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="iframe-wrapper">
                  <iframe 
                    src={`https://www.youtube.com/embed/${clip.id}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                    title={clip.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="transition-transform duration-300 hover:scale-105"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
                
              <div className="p-6">
                <h3 className="text-xl text-rose-gold mb-2 font-medium">{clip.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{clip.description}</p>
              </div>
              
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-lg border border-rose-gold/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClipsGallery;