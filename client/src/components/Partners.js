import React from 'react';
import './Partners.css';

const partners = [
  { name: 'Jotun India', type: 'Paint Supplier', abbr: 'JTN', desc: 'Premium marine & protective coatings' },
  { name: 'Berger Paints', type: 'Paint Supplier', abbr: 'BPL', desc: 'Industrial & decorative coating systems' },
  { name: 'Hempel India', type: 'Paint Supplier', abbr: 'HMP', desc: 'High-performance protective solutions' },
  { name: 'Sika India', type: 'Flooring Systems', abbr: 'SKA', desc: 'Epoxy & polyurethane floor systems' },
  { name: 'ONGC', type: 'Client Partner', abbr: 'ONGC', desc: 'Oil & Natural Gas Corporation projects' },
  { name: 'L&T Construction', type: 'EPC Partner', abbr: 'L&T', desc: 'Large-scale infrastructure projects' },
  { name: 'Bureau Veritas', type: 'Inspection', abbr: 'BV', desc: 'Third-party quality inspections' },
  { name: 'Graco India', type: 'Equipment', abbr: 'GRC', desc: 'Plural-component spray equipment' },
];

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners__inner">
        <div className="partners__header">
          <p className="section-label">Our Ecosystem</p>
          <h2 className="section-title">Business <span>Partners</span></h2>
          <p className="partners__sub">
            We collaborate with world-class material suppliers, inspection agencies, and EPC contractors
            to deliver projects that meet the highest international standards.
          </p>
        </div>

        <div className="partners__grid">
          {partners.map(p => (
            <div className="partners__card glass-card" key={p.name}>
              <div className="partners__logo-block">
                <span className="partners__abbr">{p.abbr}</span>
              </div>
              <div className="partners__card-info">
                <span className="partners__type">{p.type}</span>
                <h4 className="partners__name">{p.name}</h4>
                <p className="partners__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="partners__marquee-wrapper" aria-hidden="true">
          <div className="partners__marquee">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="partners__marquee-item">{p.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
