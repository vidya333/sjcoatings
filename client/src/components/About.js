import React from 'react';
// 1. Import sober, professional icons from Lucide React
import { Shield, FlaskConical, ClipboardCheck } from 'lucide-react';
import './About.css';

const milestones = [
  { year: '2008', text: 'Founded in Pune, Maharashtra with a vision for industrial excellence' },
  { year: '2012', text: 'Expanded into oil & gas sector; first major ONGC project delivered' },
  { year: '2016', text: 'ISO 9001:2015 certified; introduced marine-grade coating systems' },
  { year: '2020', text: 'Crossed 500+ projects milestone across 12 Indian states' },
  { year: '2024', text: 'Launched fire-retardant coating division for infrastructure projects' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__left">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">India's Trusted <span>Industrial</span> Coating Partner</h2>
          <p className="about__body">
            Since 2008, SJ Coatings has engineered surface protection solutions that stand up to India's harshest industrial environments — from coastal marine exposure to extreme-heat refineries. We don't just apply coatings; we engineer lifespans.
          </p>
          <p className="about__body">
            Our team of certified coating inspectors and applicators brings NACE-qualified expertise to every project, ensuring surface preparation, application, and inspection meet international standards every time.
          </p>
          
          <div className="about__pillars">
            {[
              { 
                icon: <Shield size={24} className="about__pillar-svg" />, 
                label: 'Surface Excellence', 
                desc: 'SSPC-compliant surface preparation on every job' 
              },
              { 
                icon: <FlaskConical size={24} className="about__pillar-svg" />, 
                label: 'Material Mastery', 
                desc: 'Epoxy, polyurethane, zinc-rich, and intumescent systems' 
              },
              { 
                icon: <ClipboardCheck size={24} className="about__pillar-svg" />, 
                label: 'Quality Assurance', 
                desc: 'NACE-certified inspectors on-site throughout' 
              },
            ].map(p => (
              <div className="about__pillar glass-card" key={p.label}>
                {/* Rendered as a React component instead of a text emoji */}
                <span className="about__pillar-icon">{p.icon}</span>
                <div>
                  <strong>{p.label}</strong>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__right">
          <p className="section-label">Our Journey</p>
          <div className="about__timeline">
            {milestones.map((m, i) => (
              <div className="about__milestone" key={m.year}>
                <div className="about__milestone-year">{m.year}</div>
                <div className="about__milestone-line">
                  <div className="about__milestone-dot" />
                  {i < milestones.length - 1 && <div className="about__milestone-track" />}
                </div>
                <div className="about__milestone-text">{m.text}</div>
              </div>
            ))}
          </div>

          <div className="about__cert-row">
            {['ISO 9001:2015', 'NACE Certified', 'SSPC Member', 'MoEF Compliant'].map(c => (
              <div className="about__cert glass-card" key={c}>
                <span className="about__cert-check">✓</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
