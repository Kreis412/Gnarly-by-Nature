// src/pages/Weddings.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ZoomableImage from '../components/ZoomableImage';
import './Weddings.css';

const Weddings: React.FC = () => {
  return (
    <div className="weddings-page">
      <section className="wedding-hero">
        <div className="container wedding-hero-content">
          <h1>Natural Elegance for Your Big Day</h1>
          <p>Hand-crafted Lake Erie treasures that bring organic beauty and timeless charm to your wedding celebrations.</p>
        </div>
      </section>

      <section className="wedding-showcase container">
        <h2 className="text-center">Wedding Essentials</h2>
        <p className="text-center zoom-sub-hint mb-md">Click any photo to zoom in and examine details</p>
        <div className="showcase-grid">
          <div className="showcase-item">
            <div className="showcase-img">
              <ZoomableImage src="/images/wedding-arch.jpg" alt="Driftwood Arch" title="Driftwood Wedding Arch" />
            </div>
            <h3>Driftwood Arches</h3>
            <p>Stunning focal points for your ceremony, shaped by the lake.</p>
          </div>
          <div className="showcase-item">
            <div className="showcase-img">
              <ZoomableImage src="/images/hanging flowers.png" alt="Table Centerpieces" title="Driftwood Table Centerpiece" />
            </div>
            <h3>Table Centerpieces</h3>
            <p>Intricate designs that bring nature to every table.</p>
          </div>
          <div className="showcase-item">
            <div className="showcase-img">
              <ZoomableImage src="/images/stay awhile.png" alt="Welcome Signs" title="Rustic Welcome Sign" />
            </div>
            <h3>Welcome Signs</h3>
            <p>Hand-lettered on weathered wood to greet your guests.</p>
          </div>
        </div>
      </section>

      <section className="wedding-contact-section text-center container">
        <div className="wedding-contact-card">
          <h2>Let's Create Your Vision</h2>
          <p>Contact us to discuss custom designs, options, and setup details for your special day.</p>
          <Link to="/contact" className="btn btn-copper">Contact Me</Link>
        </div>
      </section>
    </div>
  );
};

export default Weddings;

