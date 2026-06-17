"use client";
import { useState } from "react";

const details = [
  {
    title: "Research & Project",
    body: "Implemented and extended Sieve, a middleware system that rewrites database queries using Guarded Expressions (GEs) to make fine-grained access control scalable across dynamic IoT environments. Work built upon the published paper by Pappachan et al. (VLDB 2020).",
  },
  {
    title: "Technical Work",
    body: "Built a Workload Generator simulating 36,436 real university users via MySQL. Implemented policy generation, query generation, and caching logic for Guarded Expressions. Benchmarked hit/soft-hit/miss rates across varying policy-per-query loads and analyzed caching effectiveness on query execution time.",
  },
  {
    title: "Technologies Used",
    body: "MySQL, Java, relational database internals, index-based query optimization, access control policy design, fine-grained access control systems.",
  },
  {
    title: "Recognition & Presentations",
    body: "Presented research poster at the PSU Maseeh College Research Week Open House and the PSU Annual Undergraduate Research & Mentorship Program (URMP) Poster Competition. Placed 2nd Runner-Up at the URMP Poster Competition.",
    images: ["/presentation-1.jpg", "/presentation-2.jpg"],
  },
];

function DetailCard({
  title,
  body,
  images,
}: {
  title: string;
  body: string;
  images?: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="detail-card">
      <button className="detail-trigger" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="detail-icon">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="detail-body">
          <p>{body}</p>
          {images && images.length > 0 && (
            <div className="detail-images">
              {images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Presentation photo"
                  className="detail-image"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [experienceOpen, setExperienceOpen] = useState(false);

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
          <button
            className="experience-toggle"
            onClick={() => setExperienceOpen(!experienceOpen)}
          >
            <div className="experience-header">
              <div>
                <h3 className="experience-role">Research Intern</h3>
                <p className="experience-org">
                  Database and Internet Privacy Lab [DIPr] · Portland State
                  University
                </p>
              </div>
              <div className="experience-header-right">
                <p className="experience-date">May 2024 – May 2025</p>
                <span className="detail-icon">
                  {experienceOpen ? "−" : "+"}
                </span>
              </div>
            </div>
          </button>

          {experienceOpen && (
            <>
              <div className="partition-sm" />
              <div className="experience-actions">
                <a
                  href="/poster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link view-findings"
                >
                  View Findings ↗
                </a>
              </div>
              <div className="partition-sm" />
              <div className="experience-details">
                {details.map((d) => (
                  <DetailCard
                    key={d.title}
                    title={d.title}
                    body={d.body}
                    images={d.images}
                  />
                ))}
              </div>
              <div className="partition-sm" />
              <div className="experience-links">
                <a
                  href="https://diprlab.pdx.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                >
                  DIPr Website
                </a>
                <a
                  href="https://github.com/DIPrLab/Sieve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                >
                  Sieve Github
                </a>
                <a
                  href="https://diprlab.pdx.edu/author/satvik-mudgal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                >
                  Me at DIPr
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
