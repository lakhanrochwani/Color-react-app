import React, { useState } from 'react';

export default function Input({ color, setColorState }) {
  const handleChange = (e) => {
    setColorState(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={color}
        onChange={handleChange}
        style={{ width: '39%', height: '20px' }}
        placeholder="Add color value"
      />
    </>
  );
}
