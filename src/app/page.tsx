export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>My Portfolio</h1>
        <p style={{ fontSize: "20px", color: "#555" }}>
          Hello, I build websites and apps.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>About Me</h2>
        <p>I am a beginner developer learning Next.js and building cool projects.</p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Projects</h2>
        <ul>
          <li>Project One</li>
          <li>Project Two</li>
          <li>Project Three</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>
    </main>
  );
}
