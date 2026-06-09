// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Home.css';

const Home: React.FC = () => {
  const highlights = products.filter(p => p.isHighlight);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <h1>Nature, Gnarly and Beautiful.</h1>
          <p>One-of-a-kind driftwood art and handmade creations for your home, your business, and your most cherished celebrations.</p>
          <div className="hero-btns">
            <Link to="/store" className="btn btn-primary">Shop Collection</Link>
            <Link to="/contact" className="btn">Custom Work</Link>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Placeholder for "best piece" image */}
          <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200" alt="Flagship Driftwood Piece" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro container">
        <div className="intro-text">
          <h2>Handcrafted with a Lake Erie Heart</h2>
          <p>Every piece at Gnarly by Nature starts with a story—a piece of wood shaped by the lake, a found treasure from the forest floor. I specialize in custom driftwood art, including wedding decor, memorial pieces, business displays, and unique gifts.</p>
          <p>If you have a vision, let's bring it to life together.</p>
          <Link to="/weddings" className="btn-copper-text">Explore Wedding Decor &rarr;</Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights bg-tan">
        <div className="container">
          <h2 className="text-center">Featured Creations</h2>
          <div className="product-grid">
            {highlights.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <button className="btn btn-sm">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/store" className="btn">View All Pieces</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
