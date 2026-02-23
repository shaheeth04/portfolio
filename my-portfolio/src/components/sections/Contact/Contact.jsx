import React from "react";
import "./Contact.css";
// If you use Lucide or FontAwesome, you can add icons here. 
// For now, I'll use clean text labels that look like buttons.

function Contact() {
  return (
    <section className="unique-contact-section" id="contact">
      <div className="unique-contact-container">
        <h2 className="unique-contact-title">Get In Touch</h2>
        <p className="unique-contact-subtitle">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="unique-contact-content">
          {/* LEFT: INFO & SOCIALS */}
          <div className="unique-contact-info">
            <div className="unique-info-item">
              <span className="info-icon-label">Email</span>
              <p>shaheethussain@gmail.com</p>
            </div>

            <div className="unique-info-item">
              <span className="info-icon-label">Location</span>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className="unique-social-wrapper">
              <h4>Follow Me</h4>
              <div className="unique-social-links">
                <a href="#" className="social-btn">LinkedIn</a>
                <a href="#" className="social-btn">GitHub</a>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <form className="unique-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="unique-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;