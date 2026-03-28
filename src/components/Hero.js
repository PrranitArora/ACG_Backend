import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="grid-shapes" aria-hidden>
        <div className="shape s1" />
        <div className="shape s2" />
        <div className="shape s3" />
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="glow" style={{ marginBottom: 32, textAlign: 'center' }}>Your Path to Top Universities</h1>

          <h2 style={{ marginTop: 20, marginBottom: 16 }}>Get Into Your Dream College With Guidance From Mentors Who’ve Been There</h2>

          

          <p style={{ marginBottom: 18 }}>
            At Apex College Guidance, we pair motivated students with Ivy League and top-university mentors who guide them through every step of the college admissions process. From building a compelling profile to crafting standout essays, we provide comprehensive, affordable, and personalized support.
          </p>

          

          <div style={{ marginTop: 6 }}>
            <strong>What sets us apart:</strong>
            <ul style={{ marginTop: 10, paddingLeft: 20 }}>
              <li>Ivy League & Top University Mentors</li>
              <li>Affordable, Flexible Pricing</li>
              <li>Comprehensive End-to-End Support</li>
              <li>1-on-1 Personalized Mentorship</li>
              <li>Proven, Modern Admissions Strategies</li>
            </ul>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="hero-side-wrapper">
            

            
          </div>
          <svg width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="120" rx="12" fill="rgba(74,163,255,0.06)" />
            <rect x="210" y="40" width="200" height="160" rx="12" fill="rgba(11,102,255,0.06)" />
            <circle cx="330" cy="60" r="18" fill="rgba(255,255,255,0.04)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
