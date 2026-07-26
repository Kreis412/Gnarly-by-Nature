// src/pages/Gallery.tsx
import React from 'react';
import { galleryItems } from '../data/gallery';
import ZoomableImage from '../components/ZoomableImage';
import './Gallery.css';

const Gallery: React.FC = () => {
  return (
    <div className="gallery-page container">
      <header className="gallery-header">
        <h1>Artistic Journey</h1>
        <p>A collection of past works, custom commissions, and natural inspirations.</p>
        <p className="zoom-sub-hint">Click on any picture to view full-screen and zoom in on details</p>
      </header>

      <div className="gallery-grid">
        {galleryItems.map(item => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-images">
              {item.images.map((img, index) => (
                <div key={index} className="gallery-img-wrapper">
                  <ZoomableImage 
                    src={img} 
                    alt={`${item.title} - ${index + 1}`} 
                    title={item.title}
                  />
                </div>
              ))}
            </div>
            <div className="gallery-info">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

