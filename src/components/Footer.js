import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Apex College Guidance</div>
      <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
        <div style={{ color: 'var(--muted)' }}>Contact: <a href="tel:2675365375">(267) 536-5375</a></div>
        <div style={{ color: 'var(--muted)' }}><a href="mailto:apexcollegeguidance@gmail.com">apexcollegeguidance@gmail.com</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;
