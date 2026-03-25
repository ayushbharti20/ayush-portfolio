'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function ReadmeSection() {
  return (
    <div className="readme-content">
      <h1>Ayush Bharti</h1>
      <p className="readme__subtitle">B.Tech CSE @ Lovely Professional University · India 🇮🇳</p>

      <div className="readme-badges">
        <span className="readme-badge readme-badge--green">● Python</span>
        <span className="readme-badge readme-badge--blue">● PyTorch</span>
        <span className="readme-badge readme-badge--yellow">⚡ TensorFlow</span>
        <span className="readme-badge readme-badge--purple">● Scikit-Learn</span>
        <span className="readme-badge readme-badge--pink">● HuggingFace</span>
      </div>

      <h2>💜 About</h2>

      <p className="readme__about-text">
        Hi, Ayush on this side! I am an aspiring AI/ML engineer pursuing B.Tech in
        Computer Science at LPU. I&apos;m curious to learn new things about life every day!
        I believe in building intelligent systems that make a real impact. Earned a 4-Star
        Python badge on HackerRank and solved 200+ DSA problems across platforms.
      </p>

      <ul className="readme__highlights">
        <li data-emoji="🛠️">Building <strong>NLP models</strong> with Transformers achieving 95% accuracy</li>
        <li data-emoji="🤖">Unsupervised <strong>anomaly detection</strong> on large-scale system logs</li>
        <li data-emoji="⚡">Certified in <strong>Generative AI</strong> and <strong>Prompt Engineering</strong></li>
        <li data-emoji="🌟">Always learning, always shipping</li>
      </ul>

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
          <img 
            src="https://leetcard.jacoblin.cool/ayushbharti20?theme=dark&font=Inter&ext=heatmap" 
            alt="LeetCode Stats" 
            className="stats-image"
          />
        </div>
        
        <div className="readme-activity-card">
          <h4>GitHub Stats</h4>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=ayushbharti20&theme=dark&hide_border=true&include_all_commits=true&show_icons=true&bg_color=11111b" 
            alt="GitHub Stats" 
            className="stats-image"
          />
        </div>
      </div>

      <h2>🏆 Achievements</h2>

      <ul className="readme__highlights">
        <li data-emoji="⭐">4-Star Python Badge on <strong>HackerRank</strong></li>
        <li data-emoji="💻">Solved <strong>200+ DSA problems</strong> on HackerRank, LeetCode, NeoColab</li>
        <li data-emoji="🎓">Generative AI Mastermind certified by <strong>Outskill</strong></li>
        <li data-emoji="☁️">Cloud Computing certified by <strong>NPTEL</strong></li>
      </ul>

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
    </div>
  );
}
