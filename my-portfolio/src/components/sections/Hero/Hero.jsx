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
            I build clean, responsive, and user-friendly web applications using modern technologies like React and JavaScript, with a strong passion for creating beautiful UI and smooth user experiences. Alongside my frontend expertise, I am also a backend Java developer, where my main focus lies in designing robust server-side logic, APIs, and database interactions. This combination allows me to deliver end-to-end solutions that are both visually engaging and technically reliable.

          </p>

          <div className="hero-buttons">
            <a href="#" className="btn primary">
              Download Resume
            </a>
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