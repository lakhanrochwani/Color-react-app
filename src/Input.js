import React, { useState } from 'react';

export default function Input({ setColorState }) {
  // const [color, setColor] = useState();
  const handleChange = (e) => {
    setColorState(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        // value={color}
        onChange={handleChange}
        style={{ width: '40%', height: '20px' }}
      />
    </>
  );
}
