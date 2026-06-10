// src/components/Footer.tsx
import React from 'react';
import { Mail, Globe, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for joining our newsletter!');
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-section">
          <h3>Gnarly by Nature</h3>
          <p>Hand-crafted driftwood art and natural treasures inspired by the rugged beauty of Lake Erie.</p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Heart size={20} /></a>
            <a href="#"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/store">Store</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/story">My Story</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/weddings">Weddings</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Join our circle for news on new creations and stories from the lake.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit" className="btn btn-copper">Join</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gnarly by Nature. Handcrafted with heart.</p>
      </div>
    </footer>
  );
};

export default Footer;
