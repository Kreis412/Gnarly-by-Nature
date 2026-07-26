// src/context/ImageZoomContext.tsx
import React, { createContext, useContext, useState } from 'react';
import ImageModal from '../components/ImageModal';

interface ImageZoomContextType {
  openZoom: (src: string, alt?: string, title?: string) => void;
  closeZoom: () => void;
}

const ImageZoomContext = createContext<ImageZoomContextType | undefined>(undefined);

export const ImageZoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [zoomData, setZoomData] = useState<{ src: string; alt?: string; title?: string } | null>(null);

  const openZoom = (src: string, alt?: string, title?: string) => {
    setZoomData({ src, alt, title });
  };

  const closeZoom = () => {
    setZoomData(null);
  };

  return (
    <ImageZoomContext.Provider value={{ openZoom, closeZoom }}>
      {children}
      {zoomData && (
        <ImageModal
          src={zoomData.src}
          alt={zoomData.alt}
          title={zoomData.title}
          onClose={closeZoom}
        />
      )}
    </ImageZoomContext.Provider>
  );
};

export const useImageZoom = () => {
  const context = useContext(ImageZoomContext);
  if (!context) {
    throw new Error('useImageZoom must be used within an ImageZoomProvider');
  }
  return context;
};
