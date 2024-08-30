import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    console.log('scrolling to top...');
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log('Scroll to top executed')
    }, 100); // Adjust the delay as needed
  }, [pathname]);

  return null;
}