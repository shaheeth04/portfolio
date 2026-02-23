import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Helmet Detection using YOLOv8",
    desc: "Developed a computer vision model to detect helmet usage in real-time using YOLOv8. Trained on a custom dataset and deployed using Google Colab.",
    tech: "Python, YOLOv8, OpenCV, Google Colab",
    type: "Academic Project",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Modern responsive portfolio built using React with smooth animations and responsive UI.",
    tech: "React, CSS, Vite",
    type: "Personal Project",
  },
  {
    title: "Landing Page Website",
    desc: "Fully responsive landing page built using HTML and CSS with clean UI design.",
    tech: "HTML, CSS",
    type: "Practice Project",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="badge">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span className="tech">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;