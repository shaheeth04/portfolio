import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I am a Computer Science student with a strong interest in backend
            development and software engineering. I enjoy building reliable
            server-side applications using Java and object-oriented principles.
          </p>

          <p>
            Alongside backend development, I also create clean and responsive
            user interfaces using React and modern JavaScript. This allows me
            to develop complete, end-to-end web applications.
          </p>

          <p>
            Currently preparing for campus placements and continuously improving
            my problem-solving skills and real-world development experience.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <h3>🎓 Education</h3>
            <p>B.E Computer Science</p>
            <p>Panimalar Engineering College</p>
          </div>

          <div className="card">
            <h3>💻 Core Skills</h3>
            <p>Java, OOPs, REST APIs</p>
          </div>

          <div className="card">
            <h3>🚀 Goal</h3>
            <p>Backend Software Engineer</p>
          </div>

          <div className="card">
            <h3>📍 Location</h3>
            <p>Chennai, India</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;