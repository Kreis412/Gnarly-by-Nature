// src/pages/Testimonials.tsx
import React, { useState } from 'react';
import { testimonials as initialTestimonials } from '../data/testimonials';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [newReview, setNewReview] = useState({ name: '', location: '', text: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', location: '', text: '' });
    alert('Thank you for your beautiful words!');
  };

  return (
    <div className="testimonials-page container">
      <header className="testimonials-header text-center">
        <h1>Voices from the Shore</h1>
        <p>I am deeply moved by the stories my customers share. Here is what some of them have to say about their Gnarly by Nature pieces.</p>
      </header>

      <div className="testimonials-grid">
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <p className="review-text">"{review.text}"</p>
              <div className="review-meta">
                <span className="name">{review.name}</span>
                <span className="location">{review.location}</span>
                <span className="date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="review-form-container">
          <h3>Leave a Review</h3>
          <p>Have a piece you love? I'd be honored if you shared your experience.</p>
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                value={newReview.name} 
                onChange={e => setNewReview({...newReview, name: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                value={newReview.location} 
                onChange={e => setNewReview({...newReview, location: e.target.value})}
                placeholder="e.g. Portland, OR"
              />
            </div>
            <div className="form-group">
              <label>Your Experience</label>
              <textarea 
                rows={5} 
                value={newReview.text} 
                onChange={e => setNewReview({...newReview, text: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">Post Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
