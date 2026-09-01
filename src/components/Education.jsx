import {
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Trophy,
} from "lucide-react";

const education = {
  degree: "B.Tech — Computer Science & Engineering",
  institution: "Kalasalingam Academy of Research and Education",
  duration: "2022 — 2026",
  cgpa: "7.39",
};

const achievements = [
  {
    number: "01",
    icon: Award,
    title: "SQL Certification",
    description:
      "Completed SQL-focused certification demonstrating practical database and query knowledge.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Design & Analysis of Algorithms",
    description:
      "Completed a CodeChef certification focused on algorithmic problem solving and core DSA concepts.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Hackathon Participation",
    description:
      "Participated in a hackathon and worked on a PDF Summarizer project.",
  },
];

function Education() {
  return (
    <section className="education-section section" id="education">
      <div className="section-container">
        {/* Header */}
        <div className="section-heading">
          <span className="section-eyebrow">04 — EDUCATION</span>

          <h2 className="section-title">
            Learning, building,
            <span> growing.</span>
          </h2>

          <p className="section-description">
            My academic foundation in computer science, supported by
            certifications, practical projects, and hands-on learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-main-card">
          <div className="education-icon">
            <GraduationCap size={30} strokeWidth={1.4} />
          </div>

          <div className="education-main-content">
            <div className="education-top-row">
              <span className="education-label">
                BACHELOR'S DEGREE
              </span>

              <span className="education-status">
                <span></span>
                IN PROGRESS
              </span>
            </div>

            <h3>{education.degree}</h3>

            <p className="education-institution">
              {education.institution}
            </p>

            <div className="education-details">
              <div className="education-detail">
                <CalendarDays size={15} />
                <span>{education.duration}</span>
              </div>

              <div className="education-detail">
                <span className="cgpa-label">CGPA</span>
                <strong>{education.cgpa}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="education-subheading">
          <span className="section-eyebrow">
            CERTIFICATIONS & ACHIEVEMENTS
          </span>

          <div className="education-line"></div>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <article
                className="achievement-card"
                key={achievement.number}
              >
                <div className="achievement-header">
                  <div className="achievement-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <span className="achievement-number">
                    {achievement.number}
                  </span>
                </div>

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>
              </article>
            );
          })}
        </div>

        {/* Learning Statement */}
        <div className="education-footer">
          <div className="education-footer-mark">+</div>

          <p>
            I continue to strengthen my fundamentals through practical
            projects, problem solving, and building software that applies
            what I learn.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;