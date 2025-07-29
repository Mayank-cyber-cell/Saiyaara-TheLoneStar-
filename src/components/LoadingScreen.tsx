import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Saiyaara is calling...",
    "Gathering stardust...",
    "Tuning heartstrings...",
    "Weaving memories..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="loading-screen fixed inset-0 flex flex-col items-center justify-center z-50">
      {/* Ambient stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8">
        <h1 className="hero-text text-4xl md:text-6xl font-bold loading-text mb-8 glow-text">
          Saiyaara
        </h1>
        
        <div className="quote-text text-xl md:text-2xl text-soft-pink mb-12 opacity-80">
          {loadingTexts[currentText]}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-card-black rounded-full mb-4 mx-auto overflow-hidden">
          <div 
            className="h-full rose-gradient transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-sm text-gray-400">{progress}%</div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-rose-gold/5 via-transparent to-transparent opacity-50" />
    </div>
  );
};

export default LoadingScreen;