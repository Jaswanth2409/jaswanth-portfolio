import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Sparkles,
  Terminal,
  Database,
  Cpu,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const expertise = [
  "Python",
  "Machine Learning",
  "NLP",
  "Full-Stack",
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="grid-background"></div>
      </div>

      <div className="hero-container">
        {/* =========================================
            HERO CONTENT
        ========================================= */}
        <div className="hero-content">
          <div className="availability-badge">
            <span className="availability-dot"></span>
            <span>Available for opportunities</span>
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-title">
            Jaswanth
            <span>Jasthi</span>
          </h1>

          <h2 className="hero-role">
            Aspiring <span>AI/ML</span> & Software Developer
          </h2>

          <p className="hero-description">
            I build practical software solutions by combining
            artificial intelligence, machine learning, and modern
            web technologies to solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              <span>View My Work</span>
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>

          {/* Expertise */}
          <div className="hero-expertise">
            {expertise.map((item, index) => (
              <div className="expertise-item" key={item}>
                <span className="expertise-number">
                  0{index + 1}
                </span>

                <span className="expertise-name">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="social-label">Find me on</span>

            <div className="social-divider"></div>

            <a
              href="https://github.com/Jaswanth2409"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://linkedin.com/in/jaswanth-jasthi-840b28313"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="https://leetcode.com/u/jaswanth_jasthi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode size={19} />
            </a>
          </div>
        </div>

        {/* =========================================
            AI VISUAL
        ========================================= */}
        <div className="hero-visual">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="ai-core">
            <div className="core-ring core-ring-one"></div>
            <div className="core-ring core-ring-two"></div>

            <div className="core-center">
              <BrainCircuit size={54} strokeWidth={1.4} />
            </div>

            <div className="floating-icon icon-python">
              <Terminal size={20} />
            </div>

            <div className="floating-icon icon-ml">
              <Cpu size={20} />
            </div>

            <div className="floating-icon icon-data">
              <Database size={20} />
            </div>

            <div className="floating-icon icon-ai">
              <Sparkles size={20} />
            </div>
          </div>

          {/* Top Code Card */}
          <div className="code-card code-card-top">
            <span className="code-dot"></span>

            <span className="code-text">
              model.predict(data)
            </span>
          </div>

          {/* Bottom Code Card */}
          <div className="code-card code-card-bottom">
            <span className="code-symbol">&gt;</span>

            <span className="code-text">
              building intelligent solutions...
            </span>

            <span className="cursor"></span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;