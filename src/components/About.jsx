import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI / ML",
    description: "Building practical intelligent solutions.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Software",
    description: "Developing end-to-end applications.",
  },
  {
    icon: Database,
    number: "03",
    title: "Data",
    description: "Working with databases and ML data pipelines.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "Full-Stack",
    description: "Connecting frontend, backend and APIs.",
  },
];

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading">
          <span className="section-eyebrow">01 — ABOUT</span>

          <h2 className="section-title">
            Turning ideas into
            <span> practical solutions.</span>
          </h2>
        </div>

        <div className="about-layout">
          {/* Main About Content */}
          <div className="about-content">
            <p className="about-lead">
              I'm Jaswanth Jasthi, a Computer Science and Engineering
              graduate focused on AI/ML and software development.
            </p>

            <p className="about-text">
              I enjoy building practical applications that combine
              intelligent systems with modern software technologies.
              My projects have given me hands-on experience across
              machine learning, natural language processing, backend
              APIs, databases, and full-stack application development.
            </p>

            <p className="about-text">
              I'm particularly interested in turning real-world
              problems into useful software solutions and continuously
              improving my skills through building, experimenting, and
              solving problems.
            </p>

            <a href="#projects" className="about-link">
              <span>Explore my projects</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="highlight-card" key={item.number}>
                  <div className="highlight-top">
                    <span className="highlight-number">
                      {item.number}
                    </span>

                    <Icon
                      className="highlight-icon"
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small Personal Statement */}
        <div className="about-bottom">
          <span className="about-bottom-label">CURRENT FOCUS</span>

          <div className="about-focus">
            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Software Development</span>
            <span>Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;