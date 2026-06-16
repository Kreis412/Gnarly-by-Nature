// src/pages/Contact.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Custom Decor',
    budget: '',
    date: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page container">
      <section className="contact-intro text-center">
        <h1>Start a Conversation</h1>
        <p>Whether you have a specific vision or just want to explore possibilities, I'd love to hear from you. Let's create something beautiful together.</p>
        <div className="wedding-cta">
          <p>Planning a wedding? We have a specialized process for that.</p>
          <Link to="/weddings" className="btn btn-copper">Get a Wedding Quote</Link>
        </div>
      </section>

      <section className="contact-form-container">
        <div className="contact-info-grid">
          <div className="contact-image-side">
            <img src="/images/Open-hours.jpg" alt="Open Hours" className="open-hours-img" />
            <div className="location-info">
              <h3>Visit the Workshop</h3>
              <p>Lake Erie Shoreline</p>
              <p>Available by appointment for custom consultations.</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Type of Project</label>
                <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="Custom Decor">Custom Decor</option>
                  <option value="Memorial Piece">Memorial Piece</option>
                  <option value="Centerpiece">Centerpiece</option>
                  <option value="Business Display">Business Display</option>
                  <option value="Gift">Unique Gift</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. $100 - $300" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date Needed By</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="description">Tell me about your vision</label>
              <textarea id="description" name="description" rows={5} value={formData.description} onChange={handleChange} placeholder="Describe what you are looking for..." required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
