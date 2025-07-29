import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MusicPlaylist: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const musicTracks = [
    {
      id: "BSJa1UytM8w",
      title: "Saiyaara – Original Version",
      description: "The heartbreak anthem"
    },
    {
      id: "0v5eHPfy5Lk",
      title: "Saiyaara – Acoustic",
      description: "Raw emotional version"
    },
    {
      id: "D9DiMnlpFK8",
      title: "Humsafar",
      description: "Companion in loneliness"
    },
    {
      id: "cUmUOb7j3dc",
      title: "Dhunn – Instrumental",
      description: "Melancholic instrumental"
    },
    {
      id: "rOUuGvJkBrQ",
      title: "Tum Ho Toh",
      description: "Romantic counterpart"
    }
  ];

  return (
    <section 
      ref={ref}
      className="scroll-section relative h-screen w-full bg-deep-black py-16 overflow-hidden"
    >
      {/* Music visualizer background */}
      <div className="absolute inset-0 flex items-end justify-center space-x-1 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="visualizer-bar w-2 bg-rose-gold"
            style={{
              '--duration': `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
              height: '20%'
            }}
          />
        ))}
      </div>

      {/* Floating musical symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {['♪', '♫', '♬', '♩', '♭', '♯'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-rose-gold/20 text-3xl float-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 8}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 
          className={`hero-text text-3xl md:text-5xl font-bold text-rose-gold mb-16 text-center glow-text transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          Melancholic Melodies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicTracks.map((track, index) => (
            <div 
              key={track.id}
              className={`enhanced-card rounded-lg overflow-hidden transition-all duration-1000 ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)'
              }}
            >
              <div className="relative overflow-hidden">
                <div className="iframe-wrapper">
                  <iframe 
                    src={`https://www.youtube.com/embed/${track.id}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                    title={track.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="transition-transform duration-300 hover:scale-105"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                
                {/* Audio wave overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-gold mb-2 font-medium leading-tight">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {track.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicPlaylist;