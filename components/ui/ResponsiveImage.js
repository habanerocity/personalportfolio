import OptimizedImage from './OptimizedImage';

// Helper function to generate responsive image sources
export const getOptimizedImageSrc = (originalSrc, useOptimized = true) => {
  if (!useOptimized || originalSrc.includes('optimized/')) {
    return originalSrc;
  }
  
  // Extract filename without extension
  const pathParts = originalSrc.split('/');
  const filename = pathParts[pathParts.length - 1];
  const nameWithoutExt = filename.split('.')[0];
  
  // Return optimized version path
  return `/static/optimized/${nameWithoutExt}-optimized.webp`;
};

// Responsive image sizes configuration
export const getResponsiveSizes = (imageType) => {
  const sizeConfigs = {
    hero: "(max-width: 768px) 0px, (max-width: 1024px) 50vw, (max-width: 1200px) 40vw, 33vw",
    card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
    thumbnail: "(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px",
    icon: "(max-width: 768px) 60px, (max-width: 1024px) 80px, 100px",
    full: "100vw"
  };
  
  return sizeConfigs[imageType] || sizeConfigs.full;
};

// Example usage component
export const ResponsiveImage = ({ 
  src, 
  alt, 
  imageType = 'full',
  useOptimized = true,
  ...props 
}) => {
  const optimizedSrc = getOptimizedImageSrc(src, useOptimized);
  const sizes = getResponsiveSizes(imageType);
  
  return (
    <OptimizedImage
      src={optimizedSrc}
      alt={alt}
      sizes={sizes}
      quality={85}
      {...props}
    />
  );
};
