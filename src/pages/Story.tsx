// src/pages/Story.tsx
import React from 'react';
import { storyContent } from '../data/story';
import ZoomableImage from '../components/ZoomableImage';
import './Story.css';

const Story: React.FC = () => {
  return (
    <div className="story-page container">
      <div className="story-grid">
        <div className="story-image-section">
          <div className="artist-photo-frame">
            <ZoomableImage 
              src={storyContent.image} 
              alt="The Artist" 
              title="Lake Erie Driftwood Inspiration"
              className="artist-photo" 
            />
          </div>
          <p className="image-caption">Finding inspiration on the Lake Erie shore. (Click photo to expand & zoom)</p>
        </div>
        
        <div className="story-text-section">
          <h1>{storyContent.title}</h1>
          <div className="story-content">
            {storyContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="story-signature">
            <p>- Gnarly by Nature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

