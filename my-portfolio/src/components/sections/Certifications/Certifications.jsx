import React from "react";
import "./Certifications.css";

function Certification() {
  const certifications = [
    { 
      title: "Back End Developer(java)", 
      issuer: "Qspiders", 
      year: "2026", 
      type: "Course" 
    },
    { 
      title: "Introduction to Machine Learning", 
      issuer: "NPTEL (IIT Madras)", 
      year: "2025", 
      type: "NPTEL" 
    },
    { 
      title: "Front End Development(HTML, CSS, JS)", 
      issuer: "INFOSYS Springboard", 
      year: "2025", 
      type: "Course" 
    },
    { 
      title: "Front End Web Development", 
      issuer: "Codsoft", 
      year: "2025", 
      type: "Internship" 
    },
    { 
      title: "YOLO Helmet Detection Project", 
      issuer: "Academic Project", 
      year: "2025", 
      type: "Academic" 
    }
  ];

  return (
    <section className="unique-cert-section" id="certifications">
      <h2 className="unique-cert-title">Certifications</h2>
      <div className="unique-cert-container">
        {certifications.map((cert, index) => (
          <div className="unique-cert-card" key={index}>
            <span className="unique-cert-badge">{cert.type}</span>
            <h3>{cert.title}</h3>
            <p className="unique-cert-issuer">{cert.issuer}</p>
            <span className="unique-cert-year">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;