import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LyricsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [isPaused, setIsPaused] = useState(false);
  const [animationElement, setAnimationElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.querySelector('.scroll-lyrics') as HTMLElement;
    setAnimationElement(element);
  }, []);
  const lyrics = [
    "Tu paas hai, mere paas hai aise",
    "Mera koi ehsaas hai jaise",
    "Haaye main mar hi jaaun",
    "Jo tujhko na paaun",
    "Baaton mein teri, main raatein bitaaun",
    "",
    "Honthon pe lamha lamha",
    "Hai naam tera haaye",
    "Tujhko hi gaaun main, tujhko pukaaroon",
    "",
    "Saiyaara tu toh badla nahin hai",
    "Mausam zara sa rootha hua hai",
    "",
    "Beete lamhon se duniya basa loon",
    "Main toh tere aansuon ka bana hoon",
    "",
    "Meri hansi mein teri sadayein",
    "Teri kahaani khud ko sunaoon",
    "",
    "Yaadon ke taare, yaadon ke taare",
    "Tootenge kaise? Mere hain jo, woh roothenge kaise?",
    "",
    "Beete dino ki kholi kitaabein",
    "Guzre palon ko kaise bhula dein?",
    "",
    "Haaye main mar hi jaaun",
    "Jo tujhko na paaun",
    "Baaton mein teri, main raatein bitaaun",
    "",
    "Honthon pe lamha lamha",
    "Hai naam tera haaye",
    "Tujhko hi gaaun main, tujhko pukaaroon",
    "",
    "Jis roz hum tum phir se milenge",
    "Yeh saari baatein tujhse kahenge",
    "",
    "Duniya mein chaahe ban jaayein jo bhi",
    "Tere bina tab kuch na rahenge",
    "",
    "Haaye main mar hi jaaun",
    "Jo tujhko na paaun",
    "Tujhko hi gaaun main, tujhko pukaaroon"
  ];

  const togglePause = () => {
    if (animationElement) {
      if (isPaused) {
        // Resume animation
        animationElement.style.animationPlayState = 'running';
      } else {
        // Pause animation
        animationElement.style.animationPlayState = 'paused';
      }
    }
    setIsPaused(!isPaused);
  };

  return (
    <section 
      ref={ref}
      className="scroll-section relative h-screen w-full bg-deep-black overflow-hidden"
    >
      {/* Torn paper effect */}
      <div className="absolute inset-0 torn-paper opacity-20" />
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-love-pink/5 via-transparent to-transparent opacity-60" />

      {/* Floating musical notes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-love-pink/20 text-2xl float-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 6}s`
            }}
          >
            ♪
          </div>
        ))}
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center px-4 md:px-8 relative z-10">
        <h2 
          className={`hero-text text-3xl md:text-5xl font-bold text-love-pink mb-12 text-center glow-text transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          The Poetic Heart
        </h2>
        
        <div className="relative h-96 overflow-hidden rounded-lg ambient-glow">
          <div 
            className="lyrics-text text-lg md:text-xl text-center text-blush-pink space-y-6 py-8 scroll-lyrics"
            style={{ 
              animationPlayState: 'running',
              background: 'linear-gradient(180deg, transparent 0%, rgba(26, 15, 18, 0.8) 50%, transparent 100%)',
              padding: '3rem 2rem'
            }}
          >
            {lyrics.map((line, index) => (
              <p 
                key={index} 
                className={`leading-relaxed transition-all duration-500 hover:text-love-pink hover:scale-105 ${
                  line === '' ? 'mb-4' : ''
                }`}
              >
                {line}
              </p>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-deep-black to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-deep-black to-transparent pointer-events-none" />
        </div>
        
        <div 
          className={`mt-8 text-center transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <button 
            onClick={togglePause}
            className="enhanced-button px-6 py-3 text-sm font-medium rounded-sm relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isPaused ? 'Resume Scrolling' : 'Pause Scrolling'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LyricsSection;