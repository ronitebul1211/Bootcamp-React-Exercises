import React from 'react';
//Components
import Q1Title from './Q1Title'
import Q1Input from './Q1Input'


const Q1 = () => {
  return (
    <div className="question">
      <Q1Title/>
      <Q1Input/>
    </div>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Q1;
