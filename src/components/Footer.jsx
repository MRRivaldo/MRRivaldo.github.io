import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Let's connect and make something great together
        </p>
        <p className="footer-subscription-text">
          Feel free to contact me anytime
        </p>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a className="social-logo">
              <i class="fa-solid fa-heart"></i>
            </a>
          </div>
          <small className="website-rights">MR Rivaldo &copy; 2022</small>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/mr-rivaldo/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="Linked in"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/__rivaldo__/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/mrrivaldo"
              className="social-icon-link github"
              target="_blank"
              aria-label="Github"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
