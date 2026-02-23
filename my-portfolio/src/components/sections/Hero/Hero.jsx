import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Shaheeth Hussain</h1>
          <h2>Software Developer</h2>

          <p>
I am a backend-focused developer with strong skills in Java, APIs, and database-driven systems. I enjoy building reliable server-side logic and scalable backend solutions. Alongside backend development, I also create clean and responsive user interfaces using React and JavaScript. This combination helps me build complete, end-to-end web applications with both strong functionality and great user experience.
          </p>

          <div className="hero-buttons">
            
            <a href="/Resume.pdf" download className="btn primary"> Download Resume </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/profile.png" alt="Shaheeth profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;