// src/components/ZoomableImage.tsx
import React from 'react';
import { ZoomIn } from 'lucide-react';
import { useImageZoom } from '../context/ImageZoomContext';
import './ZoomableImage.css';

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  title?: string;
  containerClassName?: string;
  showBadge?: boolean;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt = '',
  title,
  className = '',
  containerClassName = '',
  showBadge = true,
  style,
  ...props
}) => {
  const { openZoom } = useImageZoom();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openZoom(src, alt, title || alt);
  };

  return (
    <div
      className={`zoomable-img-wrapper ${containerClassName}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Click to zoom in on ${title || alt || 'image'}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openZoom(src, alt, title || alt);
        }
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`zoomable-img ${className}`}
        style={style}
        {...props}
      />
      {showBadge && (
        <div className="zoom-hint-badge">
          <ZoomIn size={14} />
          <span>Click to Zoom</span>
        </div>
      )}
    </div>
  );
};

export default ZoomableImage;
