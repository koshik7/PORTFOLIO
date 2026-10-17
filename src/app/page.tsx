"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

function RevealSection({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="card reveal">
      {children}
    </section>
  );
}

const skills = [
  { name: "Python" },
  { name: "AI Tools Usage" },
  { name: "Basic Programming" },
  { name: "Problem Solving" },
  { name: "Teamwork" },
  { name: "Communication" },
  { name: "Fast Learner" },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [photo, setPhoto] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <main className="page">
      <header className="navbar">
        <div className="brand">
          <div className="logo">KR</div>
          <span>Koshik Ray</span>
        </div>

        <button
          className="menuToggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <button className="themeBtn" onClick={() => setDark((v) => !v)}>
          <span className="toggleTrack">
            <span className={dark ? "toggleThumb dark" : "toggleThumb"} />
          </span>
          <span>{dark ? "Dark" : "Light"}</span>
        </button>
      </header>

      <section className="hero fade-in">
        <div className="photoWrap">
          <label className="photoUploader">
            {photo ? (
              <img src={photo} alt="Profile" className="profilePhoto" />
            ) : (
              <div className="avatar">KR</div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setPhoto(url);
                }
              }}
            />
          </label>
        </div>

        <h1>Koshik Ray</h1>
        <p>IIIT Kalyani | B.Tech CSE Core | 1st Year</p>

        <div className="socials">
          <a href="mailto:koshikray777@gmail.com">
            <FaEnvelope /> Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/koshik-ray-929656436"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/koshik7" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="/resume.pdf" download className="btn">
            <FaDownload /> Download Resume
          </a>
        </div>
      </section>

      <RevealSection id="about">
        <h2>Objective</h2>
        <p>
          First-year B.Tech CSE Core student at IIIT Kalyani with a strong
          interest in programming, AI tools, and building useful applications.
          Familiar with Python based on the Class 12 CBSE syllabus and
          experienced in developing beginner-level projects. Looking for
          opportunities to learn, contribute, and grow in a technical
          environment.
        </p>
      </RevealSection>

      <RevealSection id="education">
        <h2>Education Timeline</h2>
        <div className="timeline">
          <div className="timelineItem">
            <span className="dot" />
            <div>
              <h3>Indian Institute of Information Technology, Kalyani</h3>
              <p>B.Tech in Computer Science and Engineering (Core) | 1st Year</p>
            </div>
          </div>
          <div className="timelineItem">
            <span className="dot" />
            <div>
              <h3>PM SHRI Kendriya Vidyalaya Berhampore</h3>
              <p>Previous School</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="skills">
        <h2>Skills</h2>
        <div className="skillList">
          {skills.map((skill) => (
            <div key={skill.name} className="skillItem">
              <div className="skillTop">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Personal Expense Tracker</h3>
          <p>
            Developed a personal expense tracker to help users manage income and
            expenses. Built a simple and user-friendly interface for recording
            and tracking transactions.
          </p>
          <div className="projectLinks">
            <a
              href="https://personal-expense-tracker-007.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaExternalLinkAlt /> Project Link
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>AI Study Assistant</h3>
          <p>
            Built an AI-based study app to support learning and revision. Used
            AI tools to improve the learning experience and productivity.
          </p>
          <div className="projectLinks">
            <a
              href="https://studyassistantai.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaExternalLinkAlt /> Project Link
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <h2>Interests</h2>
        <div className="tags">
          <span>Gaming</span>
          <span>Technology</span>
          <span>AI Tools</span>
          <span>Learning New Skills</span>
        </div>
      </RevealSection>

      <RevealSection id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:koshikray777@gmail.com">koshikray777@gmail.com</a>
        </p>
      </RevealSection>
    </main>
  );
}
