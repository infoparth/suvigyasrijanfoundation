interface ImageMarqueeProps {
  images: string[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  altText?: string;
}

const ImageMarquee = ({
  images,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  altText = 'Gallery image'
}: ImageMarqueeProps) => {
  const animationDirection = direction === 'left' ? 'scroll-left' : 'scroll-right';
  
  return (
    <div className={`overflow-hidden bg-background/50 backdrop-blur-sm border-y ${className}`}>
      <div 
        className={`flex space-x-8 py-6 animate-marquee ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {/* First set of images */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0"
          >
            <img
              src={image}
              alt={`${altText} ${index + 1}`}
              className="h-24 w-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0"
          >
            <img
              src={image}
              alt={`${altText} ${index + 1}`}
              className="h-24 w-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;