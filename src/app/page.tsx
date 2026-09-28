"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
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
  { name: "Python", level: 80 },
  { name: "AI Tools Usage", level: 75 },
  { name: "Basic Programming", level: 78 },
  { name: "Problem Solving", level: 70 },
  { name: "Teamwork", level: 85 },
  { name: "Communication", level: 82 },
  { name: "Fast Learner", level: 90 },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [photo, setPhoto] = useState<string | null>(null);

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

        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="themeBtn" onClick={() => setDark((v) => !v)}>
          {dark ? "Light Mode" : "Dark Mode"}
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
                <span>{skill.level}%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.level}%` }} />
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
          <a
            href="https://github.com/koshik7"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>AI Study App</h3>
          <p>
            Built an AI-based study app to support learning and revision. Used
            AI tools to improve the learning experience and productivity.
          </p>
          <a
            href="https://github.com/koshik7"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>
      </RevealSection>

      <RevealSection>
        <h2>Certifications</h2>
        <ul>
          <li>NCC Certificate</li>
        </ul>
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
        <p>Email: koshikray777@gmail.com</p>
      </RevealSection>
    </main>
  );
}
