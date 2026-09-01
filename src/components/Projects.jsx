import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: "01",
    type: "AI / FULL-STACK",
    title: "AI Resume Analyzer",
    description:
      "A full-stack AI-powered platform that analyzes resumes, extracts relevant skills, experience, and qualifications, and evaluates resume content against job requirements.",
    longDescription:
      "The system combines NLP and Gemini AI with a modern full-stack architecture to provide resume analysis, job matching, actionable recommendations, secure authentication, resume processing, and automated report generation.",
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "NLP",
      "Gemini AI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
    ],
    features: [
      "Resume skill and qualification extraction",
      "AI-based resume evaluation",
      "Job requirement matching",
      "Actionable resume improvement insights",
      "Secure user authentication",
      "Automated report generation",
    ],
    icon: BrainCircuit,
    accent: "purple",
    year: "2025 — 2026",
  },
  {
    id: "02",
    type: "MACHINE LEARNING",
    title: "Fake News Detection System",
    description:
      "A machine-learning-based classification system that analyzes news titles and article content and predicts whether the submitted news is Fake or Real.",
    longDescription:
      "The system uses NLP preprocessing and TF-IDF vectorization to transform news text into machine-learning features. A Logistic Regression classifier was trained and evaluated for binary classification, then integrated with a Flask API and web interface.",
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "NLP",
      "TF-IDF",
      "Logistic Regression",
      "Pandas",
      "NumPy",
      "JavaScript",
    ],
    features: [
      "News text preprocessing",
      "TF-IDF feature extraction",
      "Binary Fake / Real classification",
      "Logistic Regression model",
      "Flask prediction API",
      "Confidence score output",
    ],
    icon: ShieldCheck,
    accent: "blue",
    year: "2025 — 2026",
    metrics: [
      {
        value: "98.97%",
        label: "Accuracy",
      },
      {
        value: "0.99",
        label: "F1 Score",
      },
    ],
  },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className={`project-visual project-visual-${project.accent}`}>
      <div className="project-visual-grid"></div>

      <div className="project-visual-glow"></div>

      <div className="project-visual-center">
        <div className="project-icon-ring">
          <Icon size={42} strokeWidth={1.3} />
        </div>

        <span>{project.type}</span>
      </div>

      <div className="project-floating-card project-floating-card-one">
        <CheckCircle2 size={15} />
        <span>Model ready</span>
      </div>

      <div className="project-floating-card project-floating-card-two">
        <Sparkles size={15} />
        <span>AI powered</span>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />

      <div className="project-content">
        <div className="project-meta">
          <span>{project.id}</span>
          <span>{project.year}</span>
        </div>

        <div className="project-heading-row">
          <div>
            <span className="project-type">{project.type}</span>

            <h3>{project.title}</h3>
          </div>

          <div className="project-arrow">
            <ArrowUpRight size={21} />
          </div>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <p className="project-long-description">
          {project.longDescription}
        </p>

        {project.metrics && (
          <div className="project-metrics">
            {project.metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="project-features">
          {project.features.map((feature) => (
            <div className="project-feature" key={feature}>
              <CheckCircle2 size={15} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href="https://github.com/Jaswanth2409"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <span>View on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects-section section" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading projects-heading">
          <span className="section-eyebrow">03 — PROJECTS</span>

          <h2 className="section-title">
            Things I've
            <span> built.</span>
          </h2>

          <p className="section-description">
            Selected projects demonstrating my work across AI/ML,
            NLP, backend APIs, databases, and full-stack development.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {/* Project Closing */}
        <div className="projects-closing">
          <div className="projects-closing-icon">
            <Sparkles size={20} />
          </div>

          <div>
            <span>MORE ON GITHUB</span>

            <p>
              Explore my code, experiments, and future projects.
            </p>
          </div>

          <a
            href="https://github.com/Jaswanth2409"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;