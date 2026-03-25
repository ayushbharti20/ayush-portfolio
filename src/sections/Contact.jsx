'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I\'ll get back to you soon. 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="code-line">
        <span className="syn-comment">{'/* Contact Styles */'}</span>
      </div>
      <div className="code-line">
        <span className="syn-tag">.connect </span>
        <span className="syn-punctuation">{'{'}</span>
      </div>
      <div className="code-line">
        <span>  </span>
        <span className="syn-property">display</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">flex</span>
        <span className="syn-punctuation">;</span>
      </div>
      <div className="code-line">
        <span className="syn-punctuation">{'}'}</span>
      </div>
      <div style={{ height: '12px' }} />

      <div className="contact-links">
        <a href="mailto:ayushbharti2022005@gmail.com" className="contact-link">
          <span className="contact-link__icon">📧</span>
          <div>
            <div className="contact-link__label">Email</div>
            <div className="contact-link__value">ayushbharti2022005@gmail.com</div>
          </div>
        </a>
        <a href="https://linkedin.com/in/ayushbharti20/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="contact-link__icon">💼</span>
          <div>
            <div className="contact-link__label">LinkedIn</div>
            <div className="contact-link__value">linkedin.com/in/ayushbharti20</div>
          </div>
        </a>
        <a href="https://github.com/ayushbharti20" target="_blank" rel="noopener noreferrer" className="contact-link">
          <span className="contact-link__icon">🐙</span>
          <div>
            <div className="contact-link__label">GitHub</div>
            <div className="contact-link__value">github.com/ayushbharti20</div>
          </div>
        </a>
        <a href="tel:+917668401426" className="contact-link">
          <span className="contact-link__icon">📱</span>
          <div>
            <div className="contact-link__label">Mobile</div>
            <div className="contact-link__value">+91-7668401426</div>
          </div>
        </a>
      </div>

      <div className="code-line">
        <span className="syn-comment">{'/* Send me a message */'}</span>
      </div>
      <div style={{ height: '8px' }} />

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="name">name:</label>
          <input
            id="name"
            className="contact-form__input"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="email">email:</label>
          <input
            id="email"
            className="contact-form__input"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="message">message:</label>
          <textarea
            id="message"
            className="contact-form__textarea"
            placeholder="Let's collaborate on something amazing..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="contact-form__submit">
          🚀 Send Message
        </button>
      </form>
    </div>
  );
}
