import React, { useState } from 'react';

const AnimatedList = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="alist">
      {items.map((it, i) => (
        <div
          key={i}
          className={`alist-item`}
          style={{ animationDelay: `${i * 70}ms` }}
        >
          <button
            className="alist-question"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{it.q}</span>
            <span className={`alist-chevron ${openIndex === i ? 'open' : ''}`}>▸</span>
          </button>
          <div
            className="alist-answer"
            style={{
              maxHeight: openIndex === i ? '1000px' : '0px',
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <div className="alist-answer-inner">{it.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;
