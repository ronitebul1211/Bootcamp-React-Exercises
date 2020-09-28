import React from 'react';

const Button = (props) => {
  const {color, sendClick} = props;

  function onBtnClick(){
    sendClick(color);
  }
  return (
    <button 
      onClick={onBtnClick}
      style={{backgroundColor: color}}>
      {color}
    </button>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Button;
