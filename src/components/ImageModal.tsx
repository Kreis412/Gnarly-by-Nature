// src/components/ImageModal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, X } from 'lucide-react';
import './ImageModal.css';

interface ImageModalProps {
  src: string;
  alt?: string;
  title?: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, title, onClose }) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset zoom & position when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [src]);

  // Handle ESC key and disable background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleReset();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scale]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.6, 3.5));
  };

  const handleZoomOut = () => {
    setScale(prev => {
      const next = Math.max(prev - 0.6, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleImageClick = () => {
    // If we just dragged, don't trigger click zoom
    if (isDragging) return;

    if (scale === 1) {
      setScale(2.2);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };


  // Drag handlers for panning when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || scale <= 1 || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStartRef.current.x,
      y: e.touches[0].clientY - dragStartRef.current.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const displayTitle = title || alt || 'Gnarly by Nature Artwork';

  return (
    <div className="image-modal-backdrop" onClick={onClose}>
      <div className="image-modal-container" onClick={e => e.stopPropagation()}>
        {/* Top Control Bar */}
        <header className="image-modal-header">
          <div className="image-modal-title">
            <span>{displayTitle}</span>
          </div>

          <div className="image-modal-controls">
            <button
              className="control-btn"
              onClick={handleZoomOut}
              disabled={scale <= 1}
              title="Zoom Out (-)"
              aria-label="Zoom out"
            >
              <ZoomOut size={18} />
            </button>
            <span className="scale-indicator">{Math.round(scale * 100)}%</span>
            <button
              className="control-btn"
              onClick={handleZoomIn}
              disabled={scale >= 3.5}
              title="Zoom In (+)"
              aria-label="Zoom in"
            >
              <ZoomIn size={18} />
            </button>
            <button
              className="control-btn"
              onClick={handleReset}
              disabled={scale === 1 && position.x === 0 && position.y === 0}
              title="Reset Zoom (0)"
              aria-label="Reset zoom"
            >
              <RotateCcw size={18} />
            </button>
            <button
              className="control-btn close-btn"
              onClick={onClose}
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Modal Viewport */}
        <div
          className={`image-modal-stage ${scale > 1 ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={src}
            alt={alt || displayTitle}
            className="image-modal-img"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'zoom-out') : 'zoom-in'
            }}
            onClick={handleImageClick}
            draggable={false}
          />
        </div>

        {/* Footer Hint */}
        <footer className="image-modal-footer">
          <p>
            {scale > 1
              ? 'Click image to zoom out • Drag or swipe to pan around'
              : 'Click image or use + / - controls to zoom in and examine details'}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ImageModal;
