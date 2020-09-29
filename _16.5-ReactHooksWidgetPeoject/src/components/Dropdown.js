import React, {useState, useRef, useEffect} from 'react';

const Dropdown = ({label, options, selected, onSelectedChangeCallback}) => {

  
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //Invoked once
  useEffect(() => {

    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)){
        return; //inside component
      }
      setOpen(false) // outside component
    };

    document.body.addEventListener('click', onBodyClick)
    
    //cleanup
    return document.body.removeEventListener('click', onBodyClick)
  }, []);


  const renderedOptions = options.map(option => {
    if (option.value === selected.value){
      return null;
    }
    return(
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChangeCallback(option)}
        >
          {option.label}
      </div>
    );
  });
  

  return(
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label> {/** Outer label */}
        <div 
          onClick={() => {setOpen(!open)}} 
          className={`ui selection dropdown ${ open ? 'visible active' : ''}`}
        >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div> {/** Current selected item */}
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;