import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import StarBackground from './components/StarBackground';
import HeroSection from './components/HeroSection';
import LyricsSection from './components/LyricsSection';
import DialogueSection from './components/DialogueSection';
import ClipsGallery from './components/ClipsGallery';
import MusicPlaylist from './components/MusicPlaylist';
import OutroSection from './components/OutroSection';
import AmbientSound from './components/AmbientSound';
import LoveAnimations from './components/LoveAnimations';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <StarBackground />
      <LoveAnimations />
      
      <div className="scroll-container">
        <HeroSection />
        <LyricsSection />
        <DialogueSection />
        <ClipsGallery />
        <MusicPlaylist />
        <OutroSection />
      </div>
    </div>
  );
}

export default App;