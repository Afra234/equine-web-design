export const measurePerformance = () => {
  if (process.env.NODE_ENV === 'development') {
    // Report long tasks
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Increase threshold to reduce noise from initial loads
        if (entry.duration > 100) { // Increased from 50ms to 100ms
          const taskInfo = {
            type: entry.entryType,
            name: entry.name || 'Unknown Task',
            duration: Math.round(entry.duration),
            startTime: Math.round(entry.startTime),
            component: entry.name.includes('chunk-') ? 'Code Chunk Loading' : 
                      entry.name.includes('framer-motion') ? 'Animation' :
                      entry.name.includes('react') ? 'React Processing' :
                      entry.name === 'self' ? 'Main Thread Work' :
                      'Other Task',
            severity: entry.duration > 150 ? 'High' : 'Medium' // Adjusted severity threshold
          };
          
          // Only log if it's not an initial chunk load
          if (!taskInfo.name.includes('chunk-') || taskInfo.duration > 200) {
            console.warn(`Long Task (${taskInfo.severity} Impact):`, taskInfo);
          }
          
          // Log stack trace only for very long tasks
          if (taskInfo.duration > 200) {
            console.trace('Long Task Stack Trace:');
          }
        }
      });
    });
    
    // Monitor FPS with improved reporting
    let frameCount = 0;
    let lastTime = performance.now();
    let lowFPSCount = 0;
    let animationFrameId: number;
    let isInitialLoad = true;
    
    // Skip FPS monitoring during initial load
    setTimeout(() => {
      isInitialLoad = false;
    }, 5000);
    
    const checkFPS = () => {
      const now = performance.now();
      frameCount++;
      
      if (now - lastTime > 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        if (fps < 30 && !isInitialLoad) {
          lowFPSCount++;
          console.warn('Performance Alert:', {
            issue: 'Low FPS',
            fps,
            consecutive: lowFPSCount,
            timestamp: new Date().toISOString(),
            memory: getMemoryInfo()
          });
        } else {
          lowFPSCount = 0;
        }
        frameCount = 0;
        lastTime = now;
      }
      
      animationFrameId = requestAnimationFrame(checkFPS);
    };
    
    const getMemoryInfo = () => {
      const memory = (performance as any).memory;
      if (!memory) return 'Not available';
      
      return {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
      };
    };
    
    try {
      // Start observers with expanded entry types
      observer.observe({ 
        entryTypes: ['longtask', 'resource', 'measure', 'layout-shift', 'largest-contentful-paint'] 
      });
      animationFrameId = requestAnimationFrame(checkFPS);
      
      // Only log initial memory after a short delay
      setTimeout(() => {
        console.log('Performance monitoring initialized', {
          timestamp: new Date().toISOString(),
          environment: process.env.NODE_ENV,
          initialMemory: getMemoryInfo()
        });
      }, 2000);
      
      // Return cleanup function
      return () => {
        observer.disconnect();
        cancelAnimationFrame(animationFrameId);
      };
    } catch (error) {
      console.error('Performance monitoring setup failed:', error);
    }
  }
  
  return () => {}; // Return no-op cleanup for non-development
}; 