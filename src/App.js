import React, { useState } from 'react';
import Square from './Square.js';
import Input from './Input.js';
import './style.css';

export default function App() {
  const [color, setColor] = useState('');
  return (
    <div>
      <Square colorValue={color} />
      <br />
      <Input setColorState={setColor} />
    </div>
  );
}
