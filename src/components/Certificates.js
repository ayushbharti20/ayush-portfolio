"use client";

const certs = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Oct 2025",
    icon: "🤖",
    color: "#6366f1",
  },
  {
    title: "ChatGPT Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys",
    date: "Aug 2025",
    icon: "💬",
    color: "#8b5cf6",
  },
  {
    title: "Build Generative AI Apps with No-Code Tools",
    issuer: "Infosys",
    date: "Aug 2025",
    icon: "⚡",
    color: "#38bdf8",
  },
  {
    title: "Cybersecurity",
    issuer: "Cipher Schools",
    date: "Jul 2025",
    icon: "🔐",
    color: "#22c55e",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr 2025",
    icon: "☁️",
    color: "#f59e0b",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p
            style={{
              color: "#64748b",
              marginTop: "12px",
              fontSize: "1rem",
              maxWidth: "440px",
              margin: "12px auto 0",
              lineHeight: 1.7,
            }}
          >
            Verified credentials from industry-leading platforms.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {certs.map((c, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background: c.color,
                  borderRadius: "3px 0 0 3px",
                }}
              />

              <span
                style={{
                  fontSize: "1.8rem",
                }}
              >
                {c.icon}
              </span>

              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: "#e2e8f0",
                    lineHeight: 1.4,
                    marginBottom: "6px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                  }}
                >
                  {c.issuer}
                </p>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontSize: "0.78rem",
                  color: "#6366f1",
                  fontWeight: 600,
                  width: "fit-content",
                }}
              >
                📅 {c.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
