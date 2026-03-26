'use client';

import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false, loading: () => <p>Loading activity...</p> }
);

export default function AboutSection() {
  return (
    <div className="about-content readme-content">
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

      <div style={{ height: '32px' }} />
      <h2>🛠️ Stack</h2>

      <div className="readme-stack-grid">
        <div className="readme-stack-card">
          <h4>🐍 Languages</h4>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>C</li>
            <li>Bash</li>
          </ul>
        </div>
        <div className="readme-stack-card">
          <h4>🧠 AI / ML</h4>
          <ul>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Scikit-Learn</li>
            <li>HuggingFace</li>
          </ul>
        </div>
        <div className="readme-stack-card">
          <h4>🛠️ Tools</h4>
          <ul>
            <li>Jupyter Notebook</li>
            <li>Google Colab</li>
            <li>Git & GitHub</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="readme-stack-card">
          <h4>📊 Data</h4>
          <ul>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
          </ul>
        </div>
      </div>

      <div style={{ height: '32px' }} />
      <h2>📊 Coding Activity</h2>

      <div className="readme-activity-grid">
        <div className="readme-activity-card readme-activity-card--full">
          <h4>GitHub Contributions</h4>
          <div className="heatmap-container">
             <GitHubCalendar 
               username="ayushbharti20" 
               colorScheme="dark" 
               blockSize={13} 
               blockMargin={4} 
               fontSize={12}
             />
          </div>
        </div>

        <div className="readme-activity-card">
          <h4>LeetCode Stats</h4>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://leetcard.jacoblin.cool/ayushbharti20?theme=dark&font=Inter&ext=heatmap" 
            alt="LeetCode Stats" 
            className="stats-image"
          />
        </div>
        
        <div className="readme-activity-card">
          <h4>GitHub Stats</h4>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://github-readme-stats.vercel.app/api?username=ayushbharti20&theme=dark&hide_border=true&include_all_commits=true&show_icons=true&bg_color=11111b" 
            alt="GitHub Stats" 
            className="stats-image"
          />
        </div>
      </div>

      <div style={{ height: '32px' }} />
      <h2>🏆 Achievements</h2>

      <ul className="readme__highlights">
        <li data-emoji="⭐">4-Star Python Badge on <strong>HackerRank</strong></li>
        <li data-emoji="💻">Solved <strong>200+ DSA problems</strong> on HackerRank, LeetCode, NeoColab</li>
        <li data-emoji="🎓">Generative AI Mastermind certified by <strong>Outskill</strong></li>
        <li data-emoji="☁️">Cloud Computing certified by <strong>NPTEL</strong></li>
      </ul>

      <div style={{ height: '32px' }} />
      <h2>📬 Connect</h2>

      <div className="readme-badges">
        <a href="https://github.com/ayushbharti20" target="_blank" rel="noopener noreferrer">
          <span className="readme-badge readme-badge--purple">🐙 GitHub</span>
        </a>
        <a href="https://linkedin.com/in/ayushbharti20/" target="_blank" rel="noopener noreferrer">
          <span className="readme-badge readme-badge--blue">💼 LinkedIn</span>
        </a>
        <a href="mailto:ayushbharti2022005@gmail.com">
          <span className="readme-badge readme-badge--peach">📧 Email</span>
        </a>
      </div>

      <div style={{ height: '24px' }} />
      <div className="code-line">
        <span className="syn-tag">{'</'}</span>
        <span className="syn-tag">section</span>
        <span className="syn-tag">{'>'}</span>
      </div>
    </div>
  );
}
