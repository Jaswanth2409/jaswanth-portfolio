function Contact() {
  const email = "jasthijaswanth87@gmail.com";

  const gmailComposeUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section className="contact-section section" id="contact">
      <div className="section-container">

        <div className="contact-wrapper">

          {/* CONTACT HEADER */}
          <div className="contact-heading">

            <span className="section-eyebrow">
              05 — CONTACT
            </span>

            <h2 className="contact-title">
              Let's build
              <span> something useful.</span>
            </h2>

            <p className="contact-description">
              I'm open to opportunities in AI/ML, software development,
              and full-stack engineering. If you have an opportunity,
              project, or idea worth discussing, feel free to reach out.
            </p>

          </div>


          {/* CONTACT CARDS */}
          <div className="contact-grid">

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              className="contact-card contact-card-main"
            >

              <div className="contact-card-icon">
                @
              </div>

              <div className="contact-card-content">

                <span>
                  EMAIL
                </span>

                <strong>
                  {email}
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/jaswanth-jasthi-840b28313/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-card-icon">
                in
              </div>

              <div className="contact-card-content">

                <span>
                  LINKEDIN
                </span>

                <strong>
                  Connect with me
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/Jaswanth2409"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-card-icon">
                &lt;/&gt;
              </div>

              <div className="contact-card-content">

                <span>
                  GITHUB
                </span>

                <strong>
                  View my repositories
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* LEETCODE */}
            <a
              href="https://leetcode.com/u/jaswanth_jasthi/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-card-icon">
                #
              </div>

              <div className="contact-card-content">

                <span>
                  LEETCODE
                </span>

                <strong>
                  View my problem solving
                </strong>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>


          {/* ACTION BUTTONS */}
          <div className="contact-actions">

            {/* GMAIL GET IN TOUCH */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >

              <span>
                →
              </span>

              <span>
                Get in touch
              </span>

            </a>


            {/* RESUME */}
            <a
              href="/Jaswanth_Jasthi_Resume.pdf"
              download
              className="secondary-button"
            >

              <span>
                ↓
              </span>

              <span>
                Download Resume
              </span>

            </a>

          </div>


          {/* LOCATION / AVAILABILITY */}
          <div className="contact-location">

            <span className="location-symbol">
              ●
            </span>

            <span>
              India
            </span>

            <div></div>

            <span>
              Open to opportunities
            </span>

          </div>

        </div>


        {/* FOOTER */}
        <footer className="site-footer">

          <div className="footer-left">

            <a
              href="#home"
              className="footer-logo"
            >

              <span className="logo-bracket">
                [
              </span>

              JJ

              <span className="logo-bracket">
                ]
              </span>

            </a>

            <span>
              Jaswanth Jasthi
            </span>

          </div>


          <p>
            Designed & built with curiosity, code,
            and continuous learning.
          </p>


          <div className="footer-right">

            <span>
              © 2026
            </span>

            <span className="footer-dot">
              •
            </span>

            <span>
              All rights reserved.
            </span>

          </div>

        </footer>

      </div>
    </section>
  );
}

export default Contact;