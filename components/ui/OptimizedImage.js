import Image from 'next/image';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  sizes = "100vw",
  quality = 85,
  fill = false,
  style = {},
  placeholder = "blur",
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  ...props 
}) => {
  const imageProps = {
    src,
    alt,
    className,
    priority,
    sizes,
    quality,
    style,
    ...props
  };

  // Add placeholder only for non-SVG images
  if (!src.endsWith('.svg')) {
    imageProps.placeholder = placeholder;
    imageProps.blurDataURL = blurDataURL;
  }

  if (fill) {
    imageProps.fill = true;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  return <Image {...imageProps} />;
};

export default OptimizedImage;
