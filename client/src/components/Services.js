import React, { useState } from 'react';
// 1. Import sober, professional icons from Lucide React
import { Nut, Anchor, Flame, Factory, Container, Zap } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: '01',
    title: 'Anti-Corrosion Coatings',
    iconKey: 'antiCorrosion', // Assigned keys instead of emojis
    fields: ['Petrochemicals', 'Power Plants', 'Chemical Industry'],
    desc: 'High-build epoxy and zinc-rich systems engineered to protect steel structures in C4 and C5 corrosion categories. Designed for assets requiring 20+ year performance.',
    specs: ['DFT up to 500µm', 'Salt spray >5000 hrs', 'Operating temp -40°C to 200°C'],
  },
  {
    id: '02',
    title: 'Marine Coatings',
    iconKey: 'marine',
    fields: ['Ship Hulls', 'Offshore Platforms', 'Jetties & Ports'],
    desc: 'Antifouling, splash-zone, and immersion-grade coatings for continuous seawater and tidal exposure. Approved by major classification societies.',
    specs: ['Antifouling SPC technology', 'IMO AFS compliant', 'Biocide-free options'],
  },
  {
    id: '03',
    title: 'Fire Retardant Coatings',
    iconKey: 'fire',
    fields: ['High-Rise Buildings', 'Industrial Facilities', 'LNG Terminals'],
    desc: 'Intumescent and cementitious systems providing 30-minute to 120-minute fire resistance for structural steel and concrete substrates.',
    specs: ['R30 to R120 rating', 'Hydrocarbon & cellulosic fire', 'Thin-film intumescent'],
  },
  {
    id: '04',
    title: 'Epoxy Floor Coatings',
    iconKey: 'flooring',
    fields: ['Warehouses', 'Food Processing', 'Pharmaceutical'],
    desc: 'Self-levelling epoxy and polyurethane floor systems with chemical resistance, hygiene properties, and heavy forklift traffic durability.',
    specs: ['Compressive strength >70MPa', 'Chemical resistant', 'Anti-static options'],
  },
  {
    id: '05',
    title: 'Tank Lining',
    iconKey: 'tank',
    fields: ['Water Storage', 'Chemical Tanks', 'Fuel Storage'],
    desc: 'Solvent-free and glass-flake reinforced lining systems for internal protection of storage tanks against corrosion, abrasion, and chemical attack.',
    specs: ['Holiday-tested to 5kV', 'FDA-approved options', 'Temp: up to 120°C'],
  },
  {
    id: '06',
    title: 'Thermal Spray Coatings',
    iconKey: 'thermal',
    fields: ['Power Equipment', 'Gas Turbines', 'Boiler Components'],
    desc: 'Metallizing with zinc, aluminium, and zinc-aluminium alloys providing galvanic corrosion protection for structures in severe environments.',
    specs: ['TSA / TSZ systems', 'No recoating needed', '25+ year protection'],
  },
];

// Helper function to return the correct vector icon
const getServiceIcon = (key, size = 20, className = "services__icon-svg") => {
  switch (key) {
    case 'antiCorrosion': return <Nut size={size} className={className} />;
    case 'marine': return <Anchor size={size} className={className} />;
    case 'fire': return <Flame size={size} className={className} />;
    case 'flooring': return <Factory size={size} className={className} />;
    case 'tank': return <Container size={size} className={className} />;
    case 'thermal': return <Zap size={size} className={className} />;
    default: return null;
  }
};

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__header">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Industrial <span>Coating</span> Systems</h2>
          <p className="services__sub">
            Comprehensive surface protection engineered for India's most demanding industries.
          </p>
        </div>

        <div className="services__layout">
          <div className="services__list">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`services__tab ${active === i ? 'services__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="services__tab-num">{s.id}</span>
                {/* Replaced sidebar list inline item emoji */}
                <span className="services__tab-icon">
                  {getServiceIcon(s.iconKey, 18)}
                </span>
                <span className="services__tab-title">{s.title}</span>
                <span className="services__tab-arrow">→</span>
              </button>
            ))}
          </div>

          <div className="services__detail glass-card">
            {/* Replaced large header feature emoji */}
            <div className="services__detail-icon">
              {getServiceIcon(services[active].iconKey, 36, "services__icon-large")}
            </div>
            <h3 className="services__detail-title">{services[active].title}</h3>
            <div className="services__fields">
              {services[active].fields.map(f => (
                <span className="services__field-tag" key={f}>{f}</span>
              ))}
            </div>
            <p className="services__detail-desc">{services[active].desc}</p>
            <div className="services__specs">
              <p className="services__specs-label">Technical Highlights</p>
              {services[active].specs.map(sp => (
                <div className="services__spec" key={sp}>
                  <span className="services__spec-dot" />
                  <span>{sp}</span>
                </div>
              ))}
            </div>
            <a href="#enquiry" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              Enquire for This Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
