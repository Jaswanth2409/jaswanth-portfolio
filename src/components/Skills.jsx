import {
  Braces,
  BrainCircuit,
  Database,
  GitBranch,
  Globe,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    icon: Braces,
    number: "01",
    title: "Languages & Programming",
    description: "Languages I use to build software and solve problems.",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    icon: Globe,
    number: "02",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: ["React.js", "HTML", "CSS"],
  },
  {
    icon: Server,
    number: "03",
    title: "Backend",
    description: "Developing APIs and application-side functionality.",
    skills: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    icon: BrainCircuit,
    number: "04",
    title: "AI / Machine Learning",
    description: "Applying ML and NLP techniques to practical problems.",
    skills: [
      "Machine Learning",
      "NLP",
      "Gemini AI",
      "Scikit-learn",
      "TF-IDF",
    ],
  },
  {
    icon: Database,
    number: "05",
    title: "Databases",
    description: "Working with relational databases for applications.",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    icon: GitBranch,
    number: "06",
    title: "Tools & Concepts",
    description: "Development tools and core computer science concepts.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "OOP",
      "DSA",
      "DBMS",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading skills-heading">
          <span className="section-eyebrow">02 — SKILLS</span>

          <h2 className="section-title">
            Technologies I use to
            <span> build.</span>
          </h2>

          <p className="section-description">
            A practical toolkit spanning programming, web development,
            backend systems, databases, and AI/ML.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <span className="skill-number">
                    {group.number}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills">
          <div className="soft-skills-label">
            <span>ALSO</span>
            <div></div>
          </div>

          <div className="soft-skills-list">
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Team Collaboration</span>
            <span>Leadership</span>
            <span>Time Management</span>
            <span>Adaptability</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;