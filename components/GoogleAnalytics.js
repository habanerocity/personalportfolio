import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GA_MEASUREMENT_ID } from './utils/gtag';

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Defer GTM loading until after initial page load
    const loadGTM = () => {
      if (typeof window !== 'undefined') {
        // Load GTM script after a delay to improve initial page load
        const timer = setTimeout(() => {
          // Create and inject the GTM script
          const script = document.createElement('script');
          script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
          script.async = true;
          document.head.appendChild(script);

          // Initialize GTM after script loads
          script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID, {
              page_path: window.location.pathname,
            });

            // Set up route change tracking
            const handleRouteChange = (url) => {
              gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
              });
            };

            router.events.on('routeChangeComplete', handleRouteChange);

            // Store cleanup function for later use
            window._gtmCleanup = () => {
              router.events.off('routeChangeComplete', handleRouteChange);
            };
          };
        }, 2000); // 2-second delay for better LCP

        return () => {
          clearTimeout(timer);
          // Cleanup event listeners if they exist
          if (window._gtmCleanup) {
            window._gtmCleanup();
          }
        };
      }
    };

    const cleanup = loadGTM();
    
    // Cleanup on component unmount
    return cleanup;
  }, [router.events]);

  // This component doesn't render anything visible
  return null;
};

export default GoogleAnalytics;