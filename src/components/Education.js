"use client";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    minor: "Minor in Machine Learning & DevOps",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug 2023 – Present",
    grade: "CGPA: 7.23",
    icon: "🎓",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Kendriya Vidyalaya ITBP",
    location: "Dehradun, Uttarakhand",
    period: "Apr 2021 – Mar 2022",
    grade: "75%",
    icon: "📚",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Army Public School",
    location: "Dehradun, Uttarakhand",
    period: "Apr 2019 – Mar 2020",
    grade: "77%",
    icon: "🏫",
  },
];

const training = [
  {
    title: "Cyber Security",
    organization: "CipherSchools",
    period: "Jun 2025 – Jul 2025",
    description:
      "Completed modules in Ethical Hacking, Cryptography, Network Security, and Application Security. Studied OWASP Top 10, Secure Coding Practices, IAM, and Vulnerability Assessment.",
    icon: "🔐",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Education &amp; Training</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Education Column */}
          <div>
            <h3
              style={{
                color: "#6366f1",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Education
            </h3>
            <div
              style={{
                position: "relative",
                paddingLeft: "28px",
                borderLeft: "2px solid rgba(99,102,241,0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {education.map((e, i) => (
                <div key={i} style={{ position: "relative" }}>
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot"
                    style={{
                      position: "absolute",
                      left: "-34px",
                      top: "4px",
                    }}
                  />
                  <div className="card" style={{ padding: "22px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>{e.icon}</span>
                      <span
                        style={{
                          background: "rgba(99,102,241,0.1)",
                          border: "1px solid rgba(99,102,241,0.25)",
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "0.78rem",
                          color: "#6366f1",
                          fontWeight: 700,
                        }}
                      >
                        {e.grade}
                      </span>
                    </div>
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#e2e8f0",
                        lineHeight: 1.4,
                      }}
                    >
                      {e.degree}
                    </h4>
                    {e.minor && (
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "#a78bfa",
                          marginTop: "4px",
                          fontWeight: 600,
                        }}
                      >
                        {e.minor}
                      </p>
                    )}
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "0.85rem",
                        marginTop: "6px",
                      }}
                    >
                      {e.institution} · {e.location}
                    </p>
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "0.8rem",
                        marginTop: "4px",
                        fontWeight: 500,
                      }}
                    >
                      {e.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Column */}
          <div>
            <h3
              style={{
                color: "#6366f1",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Training
            </h3>
            {training.map((t, i) => (
              <div key={i} className="card" style={{ padding: "26px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.4rem",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(99,102,241,0.1)",
                      borderRadius: "12px",
                    }}
                  >
                    {t.icon}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#e2e8f0",
                      }}
                    >
                      {t.title}
                    </h4>
                    <p style={{ color: "#6366f1", fontSize: "0.83rem", fontWeight: 600 }}>
                      {t.organization}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: "10px",
                  }}
                >
                  {t.description}
                </p>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  📅 {t.period}
                </p>
              </div>
            ))}

            {/* Achievements inline */}
            <div style={{ marginTop: "28px" }}>
              <h3
                style={{
                  color: "#6366f1",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Achievements
              </h3>
              {[
                {
                  icon: "⭐",
                  text: "4-Star Python Badge on HackerRank — demonstrating strong problem-solving skills.",
                },
                {
                  icon: "🧠",
                  text: "Solved 200+ DSA problems on HackerRank, LeetCode & NeoColab, sharpening algorithmic thinking.",
                },
              ].map((a, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.2rem",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {a.icon}
                  </span>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {a.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
