import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// AnimatedSphere now takes a `pauseAnimation` prop.
// When true, we skip updating the position and rotation.
function AnimatedSphere({ pauseAnimation }: { pauseAnimation: boolean }) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const frameCount = useRef(0);

  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    // If scrolling is happening and we're on mobile, skip updates to reduce GPU load
    if (pauseAnimation) return;
    
    // Throttle updates to every other frame
    frameCount.current = (frameCount.current + 1) % 2;
    if (frameCount.current !== 0) return;

    const elapsed = clock.getElapsedTime();
    // Apply subtle movement and rotation
    sphereRef.current.position.y = Math.sin(elapsed * 0.5) * 0.15;
    sphereRef.current.position.x = Math.cos(elapsed * 0.3) * 0.1;
    sphereRef.current.rotation.x = elapsed * 0.1;
    sphereRef.current.rotation.y = elapsed * 0.05;
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 32, 32]} position={[1, 0, -1]}>
      <meshPhongMaterial
        color="#3CAAFF"
        opacity={0.08}
        transparent
        wireframe
      />
    </Sphere>
  );
}

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  // Track whether the page is being scrolled.
  const [isScrolling, setIsScrolling] = useState(false);
  // Track if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false);
  // We'll use a timeout to debounce the scroll event.
  let scrollTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    setMounted(true);
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add a small delay before showing the background
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      setMounted(false);
      setIsVisible(false);
      window.removeEventListener('resize', checkMobile);
      // Ensure canvas is properly disposed
      if (canvasRef.current) {
        const canvas = canvasRef.current.querySelector('canvas');
        if (canvas) {
          canvas.style.opacity = '0';
          canvas.style.transition = 'opacity 0.3s ease-out';
        }
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // 100ms debounce after scrolling stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#0A0A0A]" />;
  }

  return (
    <div 
      ref={canvasRef}
      className={`absolute inset-0 -z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden"
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedSphere pauseAnimation={isMobile && isScrolling} />
      </Canvas>
    </div>
  );
} 