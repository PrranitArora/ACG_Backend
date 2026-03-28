import React from 'react';

const features = [];

const Features = () => {
  if (!features.length) return null;
  return (
    <section id="features" className="features">
      <div className="feature-grid">
        {features.map((f, i) => (
          <article key={i} className="card" style={{ animation: `fadeIn .5s ${i * 120}ms both` }}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
