export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(99,102,241,0.15)",
        padding: "32px 24px",
        textAlign: "center",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "-0.02em",
          }}
          className="gradient-text"
        >
          AB
        </span>
        <p style={{ color: "#475569", fontSize: "0.85rem" }}>
          Built with Next.js &amp; Tailwind CSS
        </p>
        <p style={{ color: "#334155", fontSize: "0.82rem" }}>
          © {year} Ayush Bharti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
