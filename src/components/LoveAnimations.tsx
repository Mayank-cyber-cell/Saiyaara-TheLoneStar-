import React, { useEffect, useRef } from 'react';

const LoveAnimations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating hearts
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.innerHTML = '♥';
      heart.className = 'absolute text-red-400/20 pointer-events-none select-none';
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = '100%';
      heart.style.zIndex = '1';
      
      // Animate heart floating up
      heart.animate([
        { 
          transform: 'translateY(0) rotate(0deg) scale(0)',
          opacity: 0
        },
        { 
          transform: 'translateY(-50px) rotate(10deg) scale(1)',
          opacity: 0.6,
          offset: 0.1
        },
        { 
          transform: `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg) scale(0.5)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 8000 + 6000,
        easing: 'ease-out'
      }).onfinish = () => {
        heart.remove();
      };
      
      container.appendChild(heart);
    };

    // Create broken hearts occasionally
    const createBrokenHeart = () => {
      const brokenHeart = document.createElement('div');
      brokenHeart.innerHTML = '💔';
      brokenHeart.className = 'absolute pointer-events-none select-none opacity-10';
      brokenHeart.style.fontSize = `${Math.random() * 15 + 8}px`;
      brokenHeart.style.left = `${Math.random() * 100}%`;
      brokenHeart.style.top = `${Math.random() * 100}%`;
      brokenHeart.style.zIndex = '1';
      
      // Fade in and out
      brokenHeart.animate([
        { opacity: 0, transform: 'scale(0)' },
        { opacity: 0.3, transform: 'scale(1)', offset: 0.5 },
        { opacity: 0, transform: 'scale(0.5)' }
      ], {
        duration: 4000,
        easing: 'ease-in-out'
      }).onfinish = () => {
        brokenHeart.remove();
      };
      
      container.appendChild(brokenHeart);
    };

    // Create love quotes that appear and fade
    const loveQuotes = [
      'प्रेम',
      'इश्क़',
      'मोहब्बत',
      'दिल',
      'यादें',
      'ख्वाब',
      'तन्हाई'
    ];

    const createLoveQuote = () => {
      const quote = document.createElement('div');
      quote.textContent = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
      quote.className = 'absolute text-gold/10 pointer-events-none select-none font-hindi text-2xl';
      quote.style.left = `${Math.random() * 80 + 10}%`;
      quote.style.top = `${Math.random() * 80 + 10}%`;
      quote.style.zIndex = '1';
      
      quote.animate([
        { 
          opacity: 0, 
          transform: 'scale(0) rotate(-10deg)',
          filter: 'blur(5px)'
        },
        { 
          opacity: 0.4, 
          transform: 'scale(1) rotate(0deg)',
          filter: 'blur(0px)',
          offset: 0.3
        },
        { 
          opacity: 0, 
          transform: 'scale(1.2) rotate(5deg)',
          filter: 'blur(2px)'
        }
      ], {
        duration: 6000,
        easing: 'ease-in-out'
      }).onfinish = () => {
        quote.remove();
      };
      
      container.appendChild(quote);
    };

    // Create tear drops
    const createTear = () => {
      const tear = document.createElement('div');
      tear.className = 'absolute w-1 h-3 bg-blue-300/30 rounded-full pointer-events-none';
      tear.style.left = `${Math.random() * 100}%`;
      tear.style.top = '0%';
      tear.style.zIndex = '1';
      
      tear.animate([
        { 
          transform: 'translateY(0) scale(0)',
          opacity: 0
        },
        { 
          transform: 'translateY(50px) scale(1)',
          opacity: 0.8,
          offset: 0.1
        },
        { 
          transform: `translateY(${window.innerHeight}px) scale(0.5)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'ease-in'
      }).onfinish = () => {
        tear.remove();
      };
      
      container.appendChild(tear);
    };

    // Start animations with intervals
    const heartInterval = setInterval(createHeart, 3000);
    const brokenHeartInterval = setInterval(createBrokenHeart, 8000);
    const quoteInterval = setInterval(createLoveQuote, 5000);
    const tearInterval = setInterval(createTear, 4000);

    // Create initial elements
    setTimeout(createHeart, 1000);
    setTimeout(createLoveQuote, 2000);
    setTimeout(createBrokenHeart, 4000);

    return () => {
      clearInterval(heartInterval);
      clearInterval(brokenHeartInterval);
      clearInterval(quoteInterval);
      clearInterval(tearInterval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
};

export default LoveAnimations;