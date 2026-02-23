import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container">
        {/* Backend */}
        <div className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>Java</li>
            <li>Object-Oriented Programming</li>
            <li>REST API Basics</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React (Basic)</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Responsive Design</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}