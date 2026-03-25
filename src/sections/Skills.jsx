'use client';
import Image from 'next/image';

const skillCategories = [
  {
    title: '🐍 Languages',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' }
    ],
  },
  {
    title: '🧠 AI / ML Frameworks',
    skills: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-Learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' }
    ],
  },
  {
    title: '🛠️ Tools & Platforms',
    skills: [
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
      { name: 'Google Colab', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' }
    ],
  },
  {
    title: '🤗 NLP & LLMs',
    skills: [
      { name: 'HuggingFace', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
      { name: 'NLTK', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/NLTK_Logo.png' },
      { name: 'spaCy', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Spacy_logo.svg' },
      { name: 'LangChain', icon: '🦜' }
    ],
  },
  {
    title: '📊 Data & Analytics',
    skills: [
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Seaborn', icon: '🌊' }
    ],
  },
  {
    title: '💡 Soft Skills',
    skills: [
      { name: 'Problem-Solving', icon: '🧩' },
      { name: 'Team Collaboration', icon: '🤝' },
      { name: 'Adaptability', icon: '🌱' },
      { name: 'Continuous Learning', icon: '📚' }
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="skills-container">
      <div className="code-line">
        <span className="syn-punctuation">{'{'}</span>
      </div>
      <div className="code-line">
        <span>  </span>
        <span className="syn-property">{'"name"'}</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">{'"ayush-bharti"'}</span>
        <span className="syn-punctuation">,</span>
      </div>
      <div className="code-line">
        <span>  </span>
        <span className="syn-property">{'"role"'}</span>
        <span className="syn-operator">: </span>
        <span className="syn-string">{'"AI/ML Engineer"'}</span>
        <span className="syn-punctuation">,</span>
      </div>
      <div className="code-line">
        <span>  </span>
        <span className="syn-property">{'"skills"'}</span>
        <span className="syn-operator">: </span>
        <span className="syn-punctuation">{'{'}</span>
      </div>

      <div style={{ height: '8px' }} />

      {skillCategories.map((cat, i) => (
        <div className="skills-category" key={i}>
          <div className="skills-category__title">{cat.title}</div>
          <div className="skills-grid">
            {cat.skills.map((skill, j) => (
              <div className="skill-badge" key={j}>
                {skill.icon.startsWith('http') ? (
                   <img src={skill.icon} alt={skill.name} className="skill-icon-img" width={16} height={16} />
                ) : (
                   <span className="skill-icon-emoji">{skill.icon}</span>
                )}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ height: '8px' }} />
      <div className="code-line">
        <span>  </span>
        <span className="syn-punctuation">{'}'}</span>
      </div>
      <div className="code-line">
        <span className="syn-punctuation">{'}'}</span>
      </div>
    </div>
  );
}
