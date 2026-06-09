// src/pages/Store.tsx
import React, { useState } from 'react';
import { products } from '../data/products';
import './Store.css';

const Store: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'driftwood' | 'handmade' | 'gift'>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="store-page container">
      <header className="store-header">
        <h1>Handmade Treasures</h1>
        <p>Each piece is unique, crafted from materials gathered from the rugged shores of Lake Erie.</p>
        
        <div className="filter-bar">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'driftwood' ? 'active' : ''} onClick={() => setFilter('driftwood')}>Driftwood</button>
          <button className={filter === 'handmade' ? 'active' : ''} onClick={() => setFilter('handmade')}>Handmade</button>
          <button className={filter === 'gift' ? 'active' : ''} onClick={() => setFilter('gift')}>Gifts</button>
        </div>
      </header>

      <div className="store-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="store-card">
            <div className="store-card-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="store-card-content">
              <h3>{product.name}</h3>
              <p className="dimensions">Dimensions: {product.dimensions}</p>
              <p className="description">{product.description}</p>
              <div className="store-card-footer">
                <span className="price">${product.price}</span>
                <button className="btn btn-sm btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
