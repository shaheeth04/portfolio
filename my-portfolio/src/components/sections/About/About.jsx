import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I am a passionate Computer Science student interested in software
            development and problem solving.
          </p>

          <p>
            I focus on Java, OOP concepts and frontend development using React.
            I enjoy building responsive and user-friendly applications.
          </p>

          <p>
            Currently preparing for campus placements and aiming to grow as a
            skilled Software Engineer.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <h3>🎓 Education</h3>
            <p>B.E CSE</p>
            <p>Panimalar Engineering College</p>
          </div>

          <div className="card">
            <h3>💻 Skills</h3>
            <p>Java, OOPs, React, JavaScript</p>
          </div>

          <div className="card">
            <h3>🚀 Goal</h3>
            <p>To become a Software Engineer</p>
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