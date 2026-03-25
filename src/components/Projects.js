"use client";

const projects = [
  {
    title: "POS Tagging of Social Media Text",
    date: "Oct 2025",
    description:
      "Trained models to perform Part-Of-Speech (POS) tagging on noisy and unstructured social media text — tweets, captions, comments with emojis and slang.",
    bullets: [
      "Loaded and processed the Tweebank-V2 dataset, maintaining correct word-tag alignment during preprocessing.",
      "Implemented and evaluated multiple models: HMM (~81%), CRF (~88%), BiLSTM (~82%), and Transformer (~95%) accuracy.",
    ],
    tech: ["Python", "PyTorch", "Scikit-Learn", "Hugging Face Transformers", "Pandas"],
    github: "https://github.com/ayushbharti20",
    highlight: "95% accuracy",
    highlightColor: "#22c55e",
  },
  {
    title: "Large-Scale Log Anomaly Detection",
    date: "Oct 2025",
    description:
      "Developed an unsupervised anomaly detection system for large-scale system logs, improving automated fault detection capabilities.",
    bullets: [
      "Parsed raw system logs into structured templates using Drain3 log parsing with session-level sequence grouping.",
      "Applied unsupervised models: Autoencoder, Isolation Forest, and Transformer-based reconstruction methods.",
    ],
    tech: ["Python", "PyTorch", "Scikit-Learn", "Pandas", "Seaborn", "Drain3"],
    github: "https://github.com/ayushbharti20",
    highlight: "Unsupervised AI",
    highlightColor: "#6366f1",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label">What I Built</p>
          <h2 className="section-title">Projects</h2>
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
            Real-world ML systems built from scratch — focused on NLP and anomaly detection.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent top line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6, #38bdf8)",
                }}
              />

              {/* Highlight badge + date */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    background: `rgba(99,102,241,0.1)`,
                    border: `1px solid rgba(99,102,241,0.3)`,
                    borderRadius: "6px",
                    padding: "4px 12px",
                    fontSize: "0.78rem",
                    color: p.highlightColor,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.highlight}
                </span>
                <span
                  style={{
                    color: "#475569",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                  }}
                >
                  {p.date}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#e2e8f0",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                }}
              >
                {p.description}
              </p>

              {/* Bullets */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  paddingLeft: "0",
                  listStyle: "none",
                }}
              >
                {p.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      color: "#94a3b8",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: "#6366f1",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(15, 25, 35, 0.8)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      fontSize: "0.78rem",
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#6366f1",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "gap 0.2s ease",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
