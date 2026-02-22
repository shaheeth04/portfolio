import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Feel free to reach out for internships, collaborations or opportunities.
        </p>

        <div className="contact-content">

          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-card">
              <h4>Email</h4>
              <p>shaheethussain@gmail.com</p>
            </div>

            <div className="info-card">
              <h4>Phone</h4>
              <p>+91  8438937700</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;