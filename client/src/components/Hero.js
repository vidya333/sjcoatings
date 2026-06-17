import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

// 1. Import your exact PNG files from the assets directory
import bridgeImg from '../assets/bridge.png';
import marineImg from '../assets/marine.png';
import offshoreImg from '../assets/offshore.png';
import powerplantImg from '../assets/powerplant.png';
import refineryImg from '../assets/refinery.png';
import steelImg from '../assets/steel.png';

// 2. Put imported assets in an array for the slide cycle
const backgroundImages = [
  refineryImg,
  marineImg,
  offshoreImg,
  bridgeImg,
  steelImg,
  powerplantImg
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow interval timer
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(slideTimer);
  }, []);

  // Canvas particle grid effect setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const particles = [];
    const cols = Math.floor(W / 60);
    const rows = Math.floor(H / 60);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: (i / cols) * W + 30,
          y: (j / rows) * H + 30,
          ox: (i / cols) * W + 30,
          oy: (j / rows) * H + 30,
          size: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.3 + 0.05,
          speed: Math.random() * 0.008 + 0.002,
          offset: Math.random() * Math.PI * 2,
        });
      }
    }

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.5;
      particles.forEach(p => {
        p.x = p.ox + Math.sin(t * p.speed + p.offset) * 8;
        p.y = p.oy + Math.cos(t * p.speed * 0.7 + p.offset) * 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192,17,26,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* 3. Render all background slide images layered on top of each other */}
      <div className="hero__slideshow">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>Est. 2008 · ISO Certified</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-main">SJ</span>
          <span className="hero__title-sub">COATINGS</span>
        </h1>

        <div className="hero__rule" />

        <p className="hero__tagline">
          Industrial Surface Protection<br />
          <span>Built to Outlast the Elements</span>
        </p>

        <p className="hero__desc">
          Trusted by infrastructure giants, oil & gas leaders, and marine engineers across India
          for high-performance industrial coatings that protect, preserve, and perform.
        </p>

        <div className="hero__actions">
          <a href="#enquiry" className="btn-primary">Request a Quote</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>

        <div className="hero__chips">
          {['Anti-Corrosion', 'Fire Retardant', 'Marine Grade', 'Epoxy Systems', 'Thermal Spray'].map(tag => (
            <span className="hero__chip" key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="hero__scroll-cue">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__overlay" />
    </section>
  );
}
