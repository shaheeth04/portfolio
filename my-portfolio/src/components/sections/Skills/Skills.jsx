import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React (Basic)</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend Technologies</h3>
          <ul>
            <li>java</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Other */}
        <div className="skill-card">
          <h3>Other Skills</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Responsive Design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;