import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  isMobile: boolean;
  disableAnimations: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  isMobile: false,
  disableAnimations: false,
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setDisableAnimations(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <AnimationContext.Provider value={{ isMobile, disableAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext); 