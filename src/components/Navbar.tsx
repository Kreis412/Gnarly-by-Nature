// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand">
          Gnarly by Nature
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/store" onClick={() => setIsOpen(false)}>Store</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/testimonials" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/weddings" className="nav-special" onClick={() => setIsOpen(false)}>Weddings</Link>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="nav-icon">
            <ShoppingCart size={24} />
          </Link>
          <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
