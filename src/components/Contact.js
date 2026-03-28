import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="features" style={{ paddingTop: 12 }}>
      <h2 style={{ margin: '0 0 18px' }}>Contact Us</h2>
      <div className="feature-grid">
        <article className="card">
          <h3>Get in touch</h3>
          <p style={{ color: 'var(--muted)' }}>Phone: <a href="tel:2675365375">(267) 536-5375</a></p>
          <p style={{ color: 'var(--muted)' }}>Email: <a href="mailto:apexcollegeguidance@gmail.com">apexcollegeguidance@gmail.com</a></p>
        </article>
        <article className="card">
          <h3>Office</h3>
          <p style={{ color: 'var(--muted)' }}>We offer remote and in-person sessions by appointment.</p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
