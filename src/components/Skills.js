"use client";

const skillGroups = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "C++", "C", "Bash"],
  },
  {
    category: "ML Frameworks",
    icon: "🤖",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face Transformers"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Jupyter Notebook", "Google Colab", "GitHub", "Git", "VS Code", "Linux"],
  },
  {
    category: "Data & Viz",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Soft Skills",
    icon: "🌟",
    skills: [
      "Problem-Solving",
      "Team Collaboration",
      "Adaptability",
      "Continuous Learning",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p
            style={{
              color: "#64748b",
              marginTop: "12px",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "12px auto 0",
              lineHeight: 1.7,
            }}
          >
            A curated set of tools and technologies I&apos;ve worked with across
            ML, systems, and development.
          </p>
        </div>

        {/* Skill Groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card"
              style={{ padding: "28px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(99,102,241,0.1)",
                    borderRadius: "10px",
                  }}
                >
                  {group.icon}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#e2e8f0",
                    letterSpacing: "0.02em",
                  }}
                >
                  {group.category}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
