// src/pages/Weddings.tsx
import React from 'react';
import './Weddings.css';

const Weddings: React.FC = () => {
  const weddingItems = [
    'Centerpieces', 'Welcome Signs', 'Driftwood Arches', 'Table Decor', 'Memory Tables', 'Place Settings'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your wedding inquiry! I am honored to be considered for your big day.');
  };

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
        <div className="showcase-grid">
          <div className="showcase-item">
            <div className="showcase-img">
              <img src="/images/wild flowers.jpg" alt="Driftwood Arch" />
            </div>
            <h3>Driftwood Arches</h3>
            <p>Stunning focal points for your ceremony, shaped by the lake.</p>
          </div>
          <div className="showcase-item">
            <div className="showcase-img">
              <img src="/images/flowers on a log.jpg" alt="Centerpieces" />
            </div>
            <h3>Centerpieces</h3>
            <p>Intricate designs that bring nature to every table.</p>
          </div>
          <div className="showcase-item">
            <div className="showcase-img">
              <img src="/images/large succulents (1).jpg" alt="Welcome Signs" />
            </div>
            <h3>Welcome Signs</h3>
            <p>Hand-lettered on weathered wood to greet your guests.</p>
          </div>
        </div>
      </section>

      <section className="wedding-quote container">
        <div className="quote-container">
          <div className="quote-info">
            <h2>Request a Wedding Quote</h2>
            <p>Every wedding is unique. Please share some details about your vision, and I'll put together a personalized proposal for your special day.</p>
            <ul className="wedding-features">
              <li>Customized design concepts</li>
              <li>Local delivery and setup options</li>
              <li>Sustainable, natural materials</li>
              <li>Hand-crafted with attention to every detail</li>
            </ul>
          </div>
          
          <form className="wedding-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Wedding Date</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Venue Location</label>
              <input type="text" placeholder="City or Specific Venue" />
            </div>
            <div className="form-group full-width">
              <label>Items of Interest</label>
              <div className="checkbox-grid">
                {weddingItems.map(item => (
                  <label key={item} className="checkbox-label">
                    <input type="checkbox" name="items" value={item} /> {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group full-width">
              <label>Your Vision & Special Requests</label>
              <textarea rows={4}></textarea>
            </div>
            <button type="submit" className="btn btn-copper full-width">Send Wedding Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
