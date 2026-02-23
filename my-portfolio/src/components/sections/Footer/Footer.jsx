import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="unique-footer">
      <div className="unique-footer-container">
        {/* LEFT */}
        <div className="unique-footer-left">
          <h2>Shaheeth Hussain</h2>
         <p>
            <strong>Java Backend Developer</strong> specialized in building robust 
            server-side applications, with a strong foundation in modern 
            Frontend technologies.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="unique-footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="unique-footer-social">
          <h4>Connect</h4>
          <a href="https://linkedin.com/in/shaheeth-hussain/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/SHAHEEETH" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:shaheethhussain@gmail.com">
            Email Me
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="unique-footer-bottom">
        <p>
          © {new Date().getFullYear()} Shaheeth Hussain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;