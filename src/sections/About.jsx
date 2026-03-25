'use client';

export default function AboutSection() {
  return (
    <div className="about-content">
      <div className="code-line">
        <span className="syn-tag">{'<'}</span>
        <span className="syn-tag">{'!DOCTYPE '}</span>
        <span className="syn-attribute">html</span>
        <span className="syn-tag">{'>'}</span>
      </div>
      <div className="code-line">
        <span className="syn-tag">{'<'}</span>
        <span className="syn-tag">section </span>
        <span className="syn-attribute">class</span>
        <span className="syn-operator">=</span>
        <span className="syn-string">{'"about-me"'}</span>
        <span className="syn-tag">{'>'}</span>
      </div>
      <div style={{ height: '12px' }} />

      <p>
        I&apos;m <span className="syn-keyword">Ayush Bharti</span>, a B.Tech Computer Science 
        student at <span className="syn-function">Lovely Professional University</span> with a 
        passion for <span className="syn-type">Artificial Intelligence</span> and{' '}
        <span className="syn-type">Machine Learning</span>. I specialize in building intelligent 
        systems using deep learning, NLP, and data-driven approaches.
      </p>

      <p>
        My journey in AI began with a deep fascination for how machines can learn patterns 
        from data. I&apos;ve worked on projects ranging from{' '}
        <span className="syn-string">POS tagging using Transformers</span> to{' '}
        <span className="syn-string">large-scale log anomaly detection</span> systems. 
        I believe in <span className="syn-keyword">continuous learning</span> and pushing 
        the boundaries of what&apos;s possible with AI.
      </p>

      <p>
        When I&apos;m not training models, you&apos;ll find me solving DSA problems on 
        HackerRank and LeetCode (200+ problems solved!), exploring cybersecurity concepts, 
        or diving into the latest research on LLMs and generative AI.
      </p>

      <div className="about-info-grid">
        <div className="about-info-item">
          <span className="about-info-item__icon">🎓</span>
          <div>
            <div className="about-info-item__label">Education</div>
            <div className="about-info-item__value">B.Tech CSE @ LPU (CGPA: 7.23)</div>
          </div>
        </div>
        <div className="about-info-item">
          <span className="about-info-item__icon">📍</span>
          <div>
            <div className="about-info-item__label">Location</div>
            <div className="about-info-item__value">Phagwara, Punjab, India</div>
          </div>
        </div>
        <div className="about-info-item">
          <span className="about-info-item__icon">🔬</span>
          <div>
            <div className="about-info-item__label">Research Interest</div>
            <div className="about-info-item__value">NLP, Deep Learning, Generative AI</div>
          </div>
        </div>
        <div className="about-info-item">
          <span className="about-info-item__icon">⭐</span>
          <div>
            <div className="about-info-item__label">HackerRank</div>
            <div className="about-info-item__value">4-Star Python Badge</div>
          </div>
        </div>
      </div>

      <div style={{ height: '12px' }} />
      <div className="code-line">
        <span className="syn-tag">{'</'}</span>
        <span className="syn-tag">section</span>
        <span className="syn-tag">{'>'}</span>
      </div>
    </div>
  );
}
