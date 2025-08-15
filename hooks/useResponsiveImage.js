import { useState, useEffect } from 'react';

const useResponsiveImage = (defaultImage, imageForRange, imageForAboveRange, minWidth, maxWidth) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {
        setImageSrc(imageForRange);
      } else if (window.innerWidth > maxWidth) {
        setImageSrc(imageForAboveRange);
      } else {
        setImageSrc(defaultImage);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [defaultImage, imageForRange, imageForAboveRange, minWidth, maxWidth]);

  return imageSrc;
};

export default useResponsiveImage;