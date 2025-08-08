import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollManager = () => {
  const router = useRouter();

  // Force scroll reset on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Force scroll reset on route changes
  useEffect(() => {
    const handleStart = () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
    };
    
    const handleComplete = () => {
      // Reset scroll multiple times to overcome any race conditions
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    };
    
    // Disable browser's built-in scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return null;
};

export default ScrollManager;