import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h2>Shaheeth Hussain</h2>
          <p>
            Frontend Developer passionate about building clean and responsive
            web experiences.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="footer-social">
          <h4>Connect</h4>
          <a href="https://linkedin.com/in/shaheeth-hussain/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/SHAHEEETH" target="_blank">
            GitHub
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shaheethhussain@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
   Email Me
</a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shaheeth Hussain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
