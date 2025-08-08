import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NoScrollLink = ({ href, children, className, ...props }) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  // This helps prevent automatic scrolling when the component is mounted
  useEffect(() => {
    if (isNavigating && typeof window !== 'undefined') {
      // Force scroll position to remain at top
      const handleScroll = () => {
        window.scrollTo(0, 0);
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        setIsNavigating(false);
      };
    }
  }, [isNavigating]);
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Set a flag to indicate navigation is happening
    setIsNavigating(true);
    
    // Save current scroll position (if you want to maintain it)
    const currentPosition = typeof window !== 'undefined' ? window.pageYOffset : 0;
    
    // Navigate without scrolling
    router.push(href, undefined, { 
      scroll: false,
      shallow: true // Use shallow routing to avoid full page refresh
    });
    
    // Additional measures to prevent scroll after navigation
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };
  
  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default NoScrollLink;