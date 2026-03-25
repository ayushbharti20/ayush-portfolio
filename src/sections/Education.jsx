'use client';

const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: "Aug '23 – Present",
    grade: 'CGPA: 7.23',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (XII)',
    school: 'Kendriya Vidyalaya ITBP',
    location: 'Dehradun, Uttarakhand',
    period: "Apr '21 – Mar '22",
    grade: 'Percentage: 75%',
    icon: '📚',
  },
  {
    degree: 'Matriculation (X)',
    school: 'Army Public School',
    location: 'Dehradun, Uttarakhand',
    period: "Apr '19 – Mar '20",
    grade: 'Percentage: 77%',
    icon: '🏫',
  },
];

export default function EducationSection() {
  return (
    <div>
      <div className="code-line">
        <span className="syn-keyword">const </span>
        <span className="syn-variable">education </span>
        <span className="syn-operator">= </span>
        <span className="syn-punctuation">[...]</span>
      </div>

      <div style={{ height: '24px' }} />

      <div className="exp-section-label">
        <span className="syn-comment">{'// Education History'}</span>
      </div>
      <div className="experience-list">
        {education.map((edu, i) => (
          <div className="experience-card" key={i}>
            <div className="experience-card__header">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '22px', marginTop: '2px' }}>{edu.icon}</span>
                <div>
                  <div className="experience-card__role">{edu.degree}</div>
                  <div className="experience-card__company">{edu.school} · {edu.location}</div>
                </div>
              </div>
              <span className="experience-card__period">{edu.period}</span>
            </div>
            <ul className="experience-card__points">
              <li>{edu.grade}</li>
            </ul>
          </div>
        ))}
      </div>

      <div style={{ height: '20px' }} />
    </div>
  );
}
