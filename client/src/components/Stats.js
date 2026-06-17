import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const stats = [
  { value: 850, suffix: '+', label: 'Projects Completed', sublabel: 'Across 14 Indian states' },
  { value: 16, suffix: '+', label: 'Years of Excellence', sublabel: 'Since 2008' },
  { value: 320, suffix: '+', label: 'Satisfied Clients', sublabel: 'And growing' },
  { value: 12000, suffix: '+', label: 'MT of Coatings Applied', sublabel: 'Industrial-grade materials' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', sublabel: 'Repeat business' },
  { value: 45, suffix: '+', label: 'Certified Professionals', sublabel: 'NACE & SSPC trained' },
];

function CountUp({ end, suffix, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);
  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats" id="stats" ref={ref}>
      <div className="stats__bg-text" aria-hidden="true">SJCOATINGS</div>
      <div className="stats__inner">
        <div className="stats__header">
          <p className="section-label">By The Numbers</p>
          <h2 className="section-title">Proven <span>Track Record</span></h2>
        </div>
        <div className="stats__grid">
          {stats.map((s) => (
            <div className="stats__card glass-card" key={s.label}>
              <div className="stats__value">
                <CountUp end={s.value} suffix={s.suffix} started={started} />
              </div>
              <div className="stats__label">{s.label}</div>
              <div className="stats__sublabel">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
