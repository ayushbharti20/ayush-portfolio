'use client';

const training = [
  {
    role: 'Cyber Security Training',
    company: 'CipherSchools',
    period: "Jun '25 – Jul '25",
    points: [
      'Executed simulated brute-force and dictionary attacks using password recovery tools to identify weak credential patterns',
      'Applied core cybersecurity principles including CIA Triad and OWASP Top 10 to analyze application vulnerabilities',
      'Analyzed hashing algorithms (MD5, SHA-256) and salting techniques for robust authentication and MFA',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div>
      <div className="code-line">
        <span className="syn-keyword">interface </span>
        <span className="syn-type">Experience </span>
        <span className="syn-punctuation">{'{'}</span>
      </div>
      <div className="code-line">
        <span>{'  '}</span><span className="syn-property">training</span>
        <span className="syn-operator">: </span><span className="syn-type">Training[]</span>
        <span className="syn-punctuation">;</span>
      </div>
      <div className="code-line">
        <span className="syn-punctuation">{'}'}</span>
      </div>

      <div style={{ height: '20px' }} />

      {/* ===== TRAINING ===== */}
      <div className="exp-section-label">
        <span className="syn-comment">{'// Training & Hands-on Experience'}</span>
      </div>
      <div className="experience-list">
        {training.map((exp, i) => (
          <div className="experience-card" key={i}>
            <div className="experience-card__header">
              <div>
                <div className="experience-card__role">{exp.role}</div>
                <div className="experience-card__company">{exp.company}</div>
              </div>
              <span className="experience-card__period">{exp.period}</span>
            </div>
            <ul className="experience-card__points">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ height: '20px' }} />
    </div>
  );
}
