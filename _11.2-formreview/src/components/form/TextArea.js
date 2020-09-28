import React from 'react';

/**
 Instantiate - Pass IN : label(UI), name(identifier), value
 State - controlled by his parent form
*/

const TextArea = (props) => {

  const updateFormOnChange = event => {
    props.inputChange(event);
  }
    
  return (
      <div>
        <label>{props.label}</label>
        <textarea 
          type="text" 
          rows="2"
          name={props.name} 
          value={props.value} 
          onChange={updateFormOnChange}/>
      </div> 
    )
  }

export default TextArea; 