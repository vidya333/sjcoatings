import React from 'react';
// 1. Import sober, professional icons from Lucide React
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import './Footer.css';

const footerServices = [
  'Anti-Corrosion Coatings',
  'Marine Coatings',
  'Fire Retardant Coatings',
  'Epoxy Floor Coatings',
  'Tank Lining',
  'Thermal Spray Coatings',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Project Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Business Partners', href: '#partners' },
  { label: 'Get a Quote', href: '#enquiry' },
];

const industries = [
  'Oil & Gas', 'Marine & Offshore', 'Power Generation',
  'Chemical & Petrochemical', 'Infrastructure', 'Pharmaceuticals',
  'Food Processing', 'Water Treatment',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top CTA band */}
      <div className="footer__cta-band">
        <div className="footer__cta-inner">
          <div>
            <h3 className="footer__cta-title">Ready to Protect Your Assets?</h3>
            <p className="footer__cta-sub">Get a free site inspection and no-obligation quote from our experts.</p>
          </div>
          <a href="#enquiry" className="btn-primary">Request Free Quote</a>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer__body">
        <div className="footer__inner">

          {/* Column 1 – Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <span className="footer__logo-sj">SJ</span>
              <div className="footer__logo-divider" />
              <div>
                <span className="footer__logo-coatings">COATINGS</span>
                <span className="footer__logo-tagline">Industrial Solutions</span>
              </div>
            </div>
            <p className="footer__about-text">
              Pune-based industrial coating specialists with 16+ years of protecting critical
              infrastructure across India. ISO certified. NACE qualified.
            </p>
            <div className="footer__socials">
              {[
                { label: 'LI', href: '#', title: 'LinkedIn' },
                { label: 'YT', href: '#', title: 'YouTube' },
                { label: 'WA', href: '#', title: 'WhatsApp' },
                { label: 'FB', href: '#', title: 'Facebook' },
              ].map(s => (
                <a key={s.label} href={s.href} className="footer__social" title={s.title}>{s.label}</a>
              ))}
            </div>
            <div className="footer__badges">
              {['ISO 9001:2015', 'NACE', 'SSPC'].map(b => (
                <span key={b} className="footer__badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__list">
              {footerServices.map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Industries & Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Industries Served</h4>
            <ul className="footer__list footer__list--industries">
              {industries.map(i => (
                <li key={i}>
                  {/* Replaced '▸' text bullet with an SVG chevron */}
                  <ChevronRight size={14} className="footer__bullet-svg" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <h4 className="footer__col-title" style={{ marginTop: '2rem' }}>Contact</h4>
            <ul className="footer__contact-list">
              {/* Replaced contact emojis with matching SVGs */}
              <li>
                <Phone size={16} className="footer__contact-svg" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail size={16} className="footer__contact-svg" />
                <a href="mailto:info@sjcoatings.com">info@sjcoatings.com</a>
              </li>
              <li>
                <MapPin size={16} className="footer__contact-svg" />
                <span>Pimpri-Chinchwad, Pune – 411018, MH</span>
              </li>
              <li>
                <Clock size={16} className="footer__contact-svg" />
                <span>Mon–Sat: 9:00 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Legal bottom bar */}
      <div className="footer__legal">
        <div className="footer__legal-inner">
          <div className="footer__legal-left">
            <span>© {currentYear} SJ Coatings. All Rights Reserved.</span>
            <span className="footer__legal-sep">·</span>
            <span>CIN: U45200MH2008PTC012345</span>
            <span className="footer__legal-sep">·</span>
            <span>GSTIN: 27AABCS1234F1Z5</span>
          </div>
          <div className="footer__legal-right">
            <a href="#">Privacy Policy</a>
            <span className="footer__legal-sep">·</span>
            <a href="#">Terms of Service</a>
            <span className="footer__legal-sep">·</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
        <div className="footer__legal-reg">
          Registered Office: Plot No. 42, Phase II, MIDC, Pimpri-Chinchwad, Pune – 411018, Maharashtra, India.
          Company Registration No.: MH-2008-12345 | Registered under the Companies Act, 2013.
        </div>
      </div>
    </footer>
  );
}
