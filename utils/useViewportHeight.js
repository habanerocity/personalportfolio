import { useState, useEffect } from 'react';

function useViewportHeight() {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
}

export default useViewportHeight;
