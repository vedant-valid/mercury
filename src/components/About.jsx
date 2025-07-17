// src/components/About.jsx
export default function About() {
  return (
    <div
      style={{
        padding: "2rem",
        color: "0f0c29",
        minHeight: "80vh",
        backgroundColor: "#0f0c29",
      }}
    >
      <button
  style={{
    fontSize: "1.5rem",
    fontWeight: "600",
    backgroundColor: "#1e40af", // Blue-800
    color: "white",
    border: "2px solid #3b82f6", // Blue-500
    padding: "0.75rem 1.5rem",
    borderRadius: "0.75rem",
    cursor: "default",
    boxShadow: "0 0 12px rgba(59, 130, 246, 0.5)", // Soft blue glow
    marginBottom: "2rem",
    // textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}
      >
        Why Mercury ?
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/vedant.jpeg"
          alt="Developer"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 15px rgba(255,255,255,0.2)",
          }}
        />

        <div style={{ flex: 1  }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Hi, I'm <strong>Vedant Madne</strong>, the developer behind Mercury.
            This project is built for learners, developers, and curious minds.
            The idea is to make learning competitive, visual, and fun.
          </p>
          <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
            Built with React, Tailwind, and passion for building amazing web
            experiences 🚀
          </p>
        </div>
      </div>
      <a
  href="https://github.com/vedant-valid"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginTop: "1.5rem",
    marginRight: "1rem", // 👈 Adds space between buttons
    display: "inline-block",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#facc15",
    borderRadius: "0.5rem",
    color: "#0f0c29",
    fontWeight: "bold",
    textDecoration: "none",
  }}
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/vedantmadne"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginTop: "1.5rem",
    display: "inline-block",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#facc15",
    borderRadius: "0.5rem",
    color: "#0f0c29",
    fontWeight: "bold",
    textDecoration: "none",
  }}
>
  Linkedin
</a>

    </div>
  );
}
