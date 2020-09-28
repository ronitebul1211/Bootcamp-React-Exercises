import React from 'react';

/**
  In earlier version of React (React 16.3) you should use callback refs.
  1. constructor -> this.textInput = null
  2. Jsx element -> <input ref={elem => (this.textInput = elem)} />;
  3. componentDidMount ->  this.textInput.focus();
 */
class Form extends React.Component{
  
  constructor(){
    super()
    
    this.textInput = React.createRef(); // current = null
  }

  componentDidMount(){
    this.textInput.current.focus();
  }

  render(){
    return(
      <div>
        <label>First Name:</label>
        <input ref={this.textInput} type="text"></input>
      </div>
    );
  }
}
export default Form;