import React from 'react';

const Button = (prop) => {
  return (
    <button className={prop.className}>{prop.text}</button>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Button;
