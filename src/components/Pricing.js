import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="features" style={{ paddingTop: 12 }}>
      <h2 style={{ margin: '0 0 18px' }}>Pricing</h2>
      <div className="feature-grid">
        <article className="card" style={{ animation: `fadeIn .4s 0ms both` }}>
          <h3>Standard</h3>
          <p style={{ fontWeight: 700, color: 'var(--accent-2)', margin: '8px 0' }}>$50 / hour</p>
          <p style={{ color: 'var(--muted)' }}>We offer discounted packages for bulk hours. Reach out for a custom quote.</p>
        </article>
        <article className="card" style={{ animation: `fadeIn .4s 120ms both` }}>
          <h3>Bulk Discounts</h3>
          <p style={{ color: 'var(--muted)' }}>Discounts available for multi-session packages. Contact us for details.</p>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
