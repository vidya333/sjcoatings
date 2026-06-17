import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Plant Manager',
    company: 'Reliance Industries Ltd.',
    location: 'Jamnagar, Gujarat',
    rating: 5,
    text: 'SJ Coatings delivered exceptional anti-corrosion work on our refinery pipelines. The surface prep quality was outstanding — we passed third-party inspection on the first attempt. Highly professional team.',
    avatar: 'RM',
  },
  {
    name: 'Capt. Suresh Nair',
    role: 'Port Operations Head',
    company: 'Jawaharlal Nehru Port Authority',
    location: 'Navi Mumbai, Maharashtra',
    rating: 5,
    text: 'Weve worked with SJ Coatings on three marine projects now. Their splash zone application technique is world-class. Zero rework, on-time delivery, and their NACE-certified inspector was present throughout.',
    avatar: 'SN',
  },
  {
    name: 'Anita Sharma',
    role: 'Project Director',
    company: 'Shapoorji Pallonji Group',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'The intumescent coating on our high-rise steel structure was applied perfectly. SJ Coatings understood fire-rating specifications better than any contractor weve used. Will use them on all future projects.',
    avatar: 'AS',
  },
  {
    name: 'Vikram Desai',
    role: 'Procurement Head',
    company: 'HPCL – Hindustan Petroleum',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Price-competitive without cutting corners on materials. SJ Coatings used Jotun systems exactly as specified. The tank lining has been defect-free for 3 years now. Excellent value and reliability.',
    avatar: 'VD',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Facility Manager',
    company: 'Sun Pharma Industries',
    location: 'Nashik, Maharashtra',
    rating: 5,
    text: 'Our food-grade epoxy flooring requirement was handled with precision. The team understood pharmaceutical GMP requirements and delivered a seamless, hygienic floor system on schedule.',
    avatar: 'PK',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(prev => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 5500);
    return () => clearInterval(timer);
  });

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="section-label">Client Voices</p>
          <h2 className="section-title">What Our <span>Clients</span> Say</h2>
        </div>

        <div className="testimonials__layout">
          <div className={`testimonials__main glass-card ${animating ? 'testimonials__main--fade' : ''}`}>
            <div className="testimonials__stars">
              {'★'.repeat(t.rating)}
            </div>
            <blockquote className="testimonials__quote">"{t.text}"</blockquote>
            <div className="testimonials__author">
              <div className="testimonials__avatar">{t.avatar}</div>
              <div>
                <div className="testimonials__name">{t.name}</div>
                <div className="testimonials__role">{t.role}, {t.company}</div>
                <div className="testimonials__loc"> {t.location}</div>
              </div>
            </div>
          </div>

          <div className="testimonials__sidebar">
            <div className="testimonials__controls">
              <button className="testimonials__btn" onClick={() => go(-1)}>←</button>
              <span className="testimonials__count">{current + 1} / {testimonials.length}</span>
              <button className="testimonials__btn" onClick={() => go(1)}>→</button>
            </div>

            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>

            <div className="testimonials__mini-list">
              {testimonials.map((tm, i) => (
                <button
                  key={i}
                  className={`testimonials__mini ${i === current ? 'testimonials__mini--active' : ''}`}
                  onClick={() => setCurrent(i)}
                >
                  <div className="testimonials__mini-avatar">{tm.avatar}</div>
                  <div>
                    <div className="testimonials__mini-name">{tm.name}</div>
                    <div className="testimonials__mini-company">{tm.company}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
