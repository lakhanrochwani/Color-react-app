import React from 'react';
import './style.css';

export default function Square({ colorValue }) {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <h1>{colorValue || 'Empty- Value'}</h1>
    </section>
  );
}
