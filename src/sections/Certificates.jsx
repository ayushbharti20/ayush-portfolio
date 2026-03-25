'use client';

import Image from 'next/image';

const certificates = [
  {
    name: 'Generative AI Mastermind',
    org: 'Outskill',
    date: "Oct '25",
    pdf: '/Ayush_Bharti_Outskill.pdf',
    image: '/outskill.png',
    color: '#6366f1',
    icon: '🤖',
  },
  {
    name: 'ChatGPT Prompt Engineering: ChatGPT, Generative AI & LLM',
    org: 'Infosys',
    date: "Aug '25",
    pdf: '/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf',
    image: '/chatgpt_prompt.png',
    color: '#8b5cf6',
    icon: '💬',
  },
  {
    name: 'Build Generative AI Apps with No-Code Tools',
    org: 'Infosys',
    date: "Aug '25",
    pdf: '/Build Generative AI Apps and Solutions with No-Code Tools.pdf',
    image: '/build_generative_ai.png',
    color: '#38bdf8',
    icon: '⚡',
  },
  {
    name: 'Cybersecurity',
    org: 'Cipher Schools',
    date: "Jul '25",
    pdf: '/Ayush_Bharti_cybersecurity.pdf',
    image: '/Cybersecurity.png',
    color: '#22c55e',
    icon: '🔐',
  },
  {
    name: 'Master Generative AI and Generative AI Tools',
    org: 'Outskill',
    date: "Oct '25",
    pdf: '/Master Generative AI and Genrative Ai tools.pdf',
    image: '/Master_Generative_AI.png',
    color: '#dcdcaa',
    icon: '✨',
  },
  {
    name: 'Cloud Computing',
    org: 'NPTEL',
    date: "Apr '25",
    pdf: '/Cloud Computing.pdf',
    image: '/nptel.png',
    color: '#f59e0b',
    icon: '☁️',
  },
];

export default function CertificatesSection() {
  return (
    <div>
      <div className="code-line">
        <span className="syn-keyword">const </span>
        <span className="syn-variable">certificates </span>
        <span className="syn-operator">= </span>
        <span className="syn-punctuation">[...]</span>
      </div>

      <div style={{ height: '24px' }} />

      <div className="exp-section-label">
        <span className="syn-comment">{'// Verified Credentials & Certifications'}</span>
      </div>

      <div className="cert-grid-new">
        {certificates.map((c, i) => (
          <div key={i} className="cert-card-new">
            <div className="cert-card-new__accent" style={{ background: c.color }} />
            
            {/* Image Preview */}
            <div style={{ position: 'relative', width: '100%', height: '140px', marginBottom: '12px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
              <Image 
                src={c.image} 
                alt={c.name} 
                fill 
                sizes="(max-width: 600px) 100vw, 280px"
                style={{ objectFit: 'cover' }} 
              />
            </div>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span className="cert-card-new__icon" style={{ fontSize: '20px', marginTop: '2px' }}>{c.icon}</span>
              <div className="cert-card-new__content">
                <h3 className="cert-card-new__title">{c.name}</h3>
                <p className="cert-card-new__org">{c.org}</p>
              </div>
            </div>

            <div className="cert-card-new__footer">
              <div className="cert-card-new__date">📅 {c.date}</div>
              {c.pdf && (
                <a href={c.pdf} target="_blank" rel="noopener noreferrer" className="cert-card-new__btn" style={{ color: c.color, border: `1px solid ${c.color}40` }}>
                  View PDF ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '20px' }} />
    </div>
  );
}
