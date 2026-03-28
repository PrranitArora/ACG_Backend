import React from 'react';

const services = [
  'College selection & fit analysis',
  'Application strategy & timelines',
  'Essay brainstorming and editing',
  'Resume & activity list review',
  'Interview prep & mock interviews',
  'Scholarship search & financial aid guidance',
];

const Services = () => {
  return (
    <section id="features" className="features">
      <h2 style={{ margin: '0 0 18px' }}>Our Services</h2>
      <div className="feature-grid">
        {services.map((s, i) => (
          <article key={i} className="card" style={{ animation: `fadeIn .4s ${i * 80}ms both` }}>
            <h3>{s}</h3>
            <p>Experienced counselors provide tailored advice and actionable next steps.</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
