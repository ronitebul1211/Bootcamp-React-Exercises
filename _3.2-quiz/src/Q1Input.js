import React from 'react';
//Components

const Q1Input = () => {
  const handle = (event) => {
    console.log(event.currentTarget.value);
  }
  return (
    <input className="question-input" type="range" min="1" max="100" value={50} onChange={handle}/>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Q1Input;
