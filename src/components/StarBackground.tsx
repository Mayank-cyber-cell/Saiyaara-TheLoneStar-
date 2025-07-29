import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple layers of stars for parallax effect
    const layers = [
      { count: 50, speed: 0.5, size: { min: 1, max: 2 }, opacity: 0.3 },
      { count: 30, speed: 0.8, size: { min: 2, max: 3 }, opacity: 0.6 },
      { count: 20, speed: 1.2, size: { min: 1, max: 2 }, opacity: 0.9 }
    ];

    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const star = document.createElement('div');
        star.className = 'star absolute rounded-full bg-white';
        
        // Random size
        const size = Math.random() * (layer.size.max - layer.size.min) + layer.size.min;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 4 + 2;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.opacity = `${layer.opacity}`;
        
        // Add twinkling animation
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
        
        // Add to appropriate layer
        star.style.zIndex = `${layerIndex + 1}`;
        
        container.appendChild(star);
      }
    });

    // Add shooting stars occasionally
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'absolute bg-rose-gold';
      shootingStar.style.width = '2px';
      shootingStar.style.height = '2px';
      shootingStar.style.borderRadius = '50%';
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      shootingStar.style.boxShadow = '0 0 4px #e8b4b8, 0 0 8px #e8b4b8';
      
      // Shooting animation
      const angle = Math.random() * 60 + 15; // 15-75 degrees
      const distance = Math.random() * 200 + 100;
      
      shootingStar.animate([
        { 
          transform: 'translateX(0) translateY(0) scale(0)',
          opacity: 0
        },
        { 
          transform: `translateX(${Math.cos(angle * Math.PI / 180) * distance}px) translateY(${Math.sin(angle * Math.PI / 180) * distance}px) scale(1)`,
          opacity: 1,
          offset: 0.1
        },
        { 
          transform: `translateX(${Math.cos(angle * Math.PI / 180) * distance * 2}px) translateY(${Math.sin(angle * Math.PI / 180) * distance * 2}px) scale(0)`,
          opacity: 0
        }
      ], {
        duration: 1500,
        easing: 'ease-out'
      }).onfinish = () => {
        shootingStar.remove();
      };
      
      container.appendChild(shootingStar);
    };

    // Create shooting stars every 10-20 seconds
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createShootingStar();
      }
    }, Math.random() * 10000 + 5000);

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stars = container.querySelectorAll('.star');
      
      stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        const yPos = -(scrollY * speed * 0.1);
        (star as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(shootingStarInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)' }}
    />
  );
};

export default StarBackground;