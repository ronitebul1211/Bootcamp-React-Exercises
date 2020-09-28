import React from 'react';
//Components
import Q2Title from './Q2Title'
import Q2Input from './Q2Input'


const Q2 = () => {
  return (
    <div className="question">
      <Q2Title/>
      <Q2Input/>
    </div>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Q2;
