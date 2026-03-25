"use client";

const contactInfo = [
  {
    label: "Email",
    value: "ayushbharti2022005@gmail.com",
    href: "mailto:ayushbharti2022005@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/ayushbharti20",
    href: "https://github.com/ayushbharti20",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayushbharti20",
    href: "https://linkedin.com/in/ayushbharti20/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91-7668401426",
    href: "tel:+917668401426",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
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
            Open to internships, collaborations, and interesting project ideas.
            Let&apos;s build something together!
          </p>
        </div>

        {/* Contact Box */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {/* Big CTA */}
          <div
            className="card"
            style={{
              padding: "40px",
              textAlign: "center",
              marginBottom: "28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>👋</div>
            <h3
              style={{
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "#e2e8f0",
                marginBottom: "10px",
              }}
            >
              Let&apos;s Work Together
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "400px",
                margin: "0 auto 28px",
              }}
            >
              Whether you have a project idea, an internship opportunity, or
              just want to chat about ML — my inbox is always open.
            </p>
            <a
              href="mailto:ayushbharti2022005@gmail.com"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "14px 36px" }}
            >
              Send Me an Email
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Contact Info Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" && c.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card"
                style={{
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                }}
              >
                <span
                  style={{
                    color: "#6366f1",
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(99,102,241,0.1)",
                    borderRadius: "8px",
                  }}
                >
                  {c.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#6366f1",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}
                  >
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
