'use client';

const tagColors = ['tag--purple', 'tag--blue', 'tag--green', 'tag--yellow', 'tag--peach', 'tag--teal', 'tag--pink', 'tag--red'];

const projects = [
  {
    icon: '🏷️',
    title: 'POS Tagging of Social Media Text',
    desc: 'Trained models to perform Part-Of-Speech tagging on noisy, unstructured social media text (tweets, captions, emojis, slang). Implemented HMM (~81%), CRF (~88%), BiLSTM (~82%), and Transformer (~95%) for POS sequence labeling.',
    tags: ['Python', 'PyTorch', 'Scikit-Learn', 'HuggingFace', 'Pandas'],
    github: 'https://github.com/ayushbharti20',
    date: "Oct '25",
  },
  {
    icon: '📊',
    title: 'Large-Scale Log Anomaly Detection',
    desc: 'Developed an unsupervised anomaly detection system for large-scale system logs. Parsed raw logs into structured templates using Drain3, applied Autoencoder, Isolation Forest, and Transformer-based reconstruction methods.',
    tags: ['Python', 'PyTorch', 'Scikit-Learn', 'Drain3', 'Seaborn'],
    github: 'https://github.com/ayushbharti20',
    date: "Oct '25",
  },
];

export default function ProjectsSection() {
  return (
    <div>
      <div className="code-line">
        <span className="syn-comment">{'// AI/ML Projects Portfolio'}</span>
      </div>
      <div className="code-line">
        <span className="syn-keyword">const </span>
        <span className="syn-variable">projects </span>
        <span className="syn-operator">= </span>
        <span className="syn-function">loadProjects</span>
        <span className="syn-punctuation">(</span>
        <span className="syn-string">{'"./ai-ml"'}</span>
        <span className="syn-punctuation">);</span>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-card__header">
              <span className="project-card__icon">{project.icon}</span>
              <span className="project-card__title">{project.title}</span>
            </div>
            <p className="project-card__desc">{project.desc}</p>
            <div className="project-card__tags">
              {project.tags.map((tag, j) => (
                <span className={`project-card__tag ${tagColors[j % tagColors.length]}`} key={j}>{tag}</span>
              ))}
            </div>
            <div className="project-card__links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                ⚡ GitHub
              </a>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
