export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            B.S. Computer Science · Portland State University
          </p>
          <h1 className="hero-name">Satvik Mudgal</h1>
          <p className="hero-tagline">Databases & Artificial Intelligence</p>
          <div className="hero-links">
            <a href="mailto:satvik.mudgal@gmail.com">Email</a>
            <a
              href="https://github.com/satvikmudgal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satvikmudgal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>

      <div className="partition" />

      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-role">Research Intern</h3>
              <p className="experience-org">
                Database and Internet Privacy Lab · Portland, OR
              </p>
            </div>
            <p className="experience-date">May 2024 – September 2024</p>
          </div>
          <div className="experience-details">
            {["Detail One", "Detail Two", "Detail Three"].map((item) => (
              <div key={item} className="detail-card">
                <button className="detail-trigger">
                  <span>{item}</span>
                  <span className="detail-icon">+</span>
                </button>
                <div className="detail-body">
                  <p>Details about {item} go here.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
