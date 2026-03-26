'use client';

import Image from 'next/image';

export default function HomeSection() {
  return (
    <div className="hero">
      <div className="hero__comment">
        {'// hello world !! Welcome to my portfolio'}
      </div>

      <div className="hero__top">
        {/* Left: name + badges + text + buttons */}
        <div className="hero__left">
          <h1 className="hero__name">Ayush Bharti</h1>

          <div className="hero__roles">
            <span className="hero__role hero__role--1">● AI/ML Engineer</span>
            <span className="hero__role hero__role--2">● Deep Learning</span>
            <span className="hero__role hero__role--3">● NLP</span>
            <span className="hero__role hero__role--4">● Computer Vision</span>
          </div>

          <p className="hero__tagline">Building intelligent systems that learn, adapt, and scale</p>

          <p className="hero__desc">
            I live at the crossroads of <strong>deep learning</strong>,{' '}
            <strong>NLP</strong>, and <strong>AI/ML</strong>.{' '}
            I build systems that are genuinely <strong>intelligent and scalable</strong>.
          </p>

          <div className="hero__buttons">
            <button className="hero__btn hero__btn--primary" onClick={() => {
              const el = document.querySelector('[data-file="projects.js"]');
              if (el) el.click();
            }}>
              📂 Projects
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => {
              const el = document.querySelector('[data-file="about.html"]');
              if (el) el.click();
            }}>
              👤 About Me
            </button>
            <button className="hero__btn hero__btn--tertiary" onClick={() => {
              const el = document.querySelector('[data-file="contact.css"]');
              if (el) el.click();
            }}>
              ✉️ Contact
            </button>
            <a
              href="/ayush_final_cv4.pdf"
              download="Ayush_Bharti_CV.pdf"
              className="hero__btn hero__btn--download"
            >
              ⬇ Resume
            </a>
          </div>
        </div>

        {/* Right: profile photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-ring">
            <Image
              src="/Ayush-1-no-background.png"
              alt="Ayush Bharti"
              fill
              sizes="220px"
              style={{ objectFit: 'cover', borderRadius: '50%' }}
              priority
            />
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <div className="hero__stat-value">2.5+</div>
          <div className="hero__stat-label">Years</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-value">10+</div>
          <div className="hero__stat-label">Certificates</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-value">200+</div>
          <div className="hero__stat-label">DSA Problems</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-value">↑</div>
          <div className="hero__stat-label">Always Learning</div>
        </div>
      </div>
    </div>
  );
}
