import React, { useState } from 'react';
import { Image, MapPin, X, Info } from 'lucide-react';
import './Gallery.css';

// 1. Import your exact PNG files from the assets directory
import bridgeImg from '../assets/bridge.png';
import chemicalImg from '../assets/chemical.png';
import epoxyImg from '../assets/epoxy.png';
import marineImg from '../assets/marine.png';
import offshoreImg from '../assets/offshore.png';
import powerplantImg from '../assets/powerplant.png';
import refineryImg from '../assets/refinery.png';
import steelImg from '../assets/steel.png';

const photos = [
  { id: 1, name: 'Refinery Anti-Corrosion Project', location: 'Jamnagar, Gujarat', category: 'Anti-Corrosion', image: refineryImg },
  { id: 2, name: 'Marine Jetty Coating', location: 'Mumbai Port, Maharashtra', category: 'Marine', image: marineImg },
  { id: 3, name: 'Steel Structure Fire Protection', location: 'Pune, Maharashtra', category: 'Fire Retardant', image: steelImg },
  { id: 4, name: 'Epoxy Floor System – Warehouse', location: 'Nashik, Maharashtra', category: 'Epoxy Flooring', image: epoxyImg },
  { id: 5, name: 'Offshore Platform Coating', location: 'Kakinada, Andhra Pradesh', category: 'Marine', image: offshoreImg },
  { id: 6, name: 'Chemical Tank Lining', location: 'Vadodara, Gujarat', category: 'Tank Lining', image: chemicalImg },
  { id: 7, name: 'Bridge Infrastructure Protection', location: 'Navi Mumbai, Maharashtra', category: 'Anti-Corrosion', image: bridgeImg },
  { id: 8, name: 'Power Plant Thermal Spray', location: 'Nagpur, Maharashtra', category: 'Thermal Spray', image: powerplantImg },
];

const categories = ['All', 'Anti-Corrosion', 'Marine', 'Fire Retardant', 'Epoxy Flooring', 'Tank Lining', 'Thermal Spray'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <div className="gallery__header">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Project <span>Gallery</span></h2>
          <p className="gallery__sub">Real projects. Real protection. Proven results across India's industries.</p>
        </div>

        <div className="gallery__filters">
          {categories.map(c => (
            <button
              key={c}
              className={`gallery__filter-btn ${filter === c ? 'gallery__filter-btn--active' : ''}`}
              onClick={() => setFilter(c)}
            >{c}</button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map(photo => (
            <div
              key={photo.id}
              className="gallery__item glass-card"
              onClick={() => setLightbox(photo)}
              style={{ cursor: 'pointer' }}
            >
              {/* 2. Replaced gradient placeholder with real image element */}
              <div className="gallery__img-container">
                <img 
                  src={photo.image} 
                  alt={photo.name} 
                  className="gallery__grid-img"
                  loading="lazy"
                />
                <div className="gallery__img-overlay">
                  <span>View Details →</span>
                </div>
              </div>
              <div className="gallery__item-info">
                <span className="gallery__item-cat">{photo.category}</span>
                <h4 className="gallery__item-name">{photo.name}</h4>
                <p className="gallery__item-loc">
                  <MapPin size={14} className="gallery__loc-svg" />
                  <span>{photo.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery__lightbox-card glass-card" onClick={e => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setLightbox(null)}>
              <X size={20} />
            </button>
            {/* 3. Replaced lightbox gradient placeholder with real image */}
            <div className="gallery__lightbox-img-wrap">
              <img 
                src={lightbox.image} 
                alt={lightbox.name} 
                className="gallery__lightbox-img" 
              />
            </div>
            <div className="gallery__lightbox-info">
              <span className="gallery__item-cat">{lightbox.category}</span>
              <h3>{lightbox.name}</h3>
              <p className="gallery__lightbox-loc">
                <MapPin size={14} className="gallery__loc-svg" />
                <span>{lightbox.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
