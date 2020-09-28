import React from 'react';

class Form extends React.Component{
  constructor(){
    super()
    this.textAreaRef = React.createRef();
  }

  copyToClipboard = (event) => {
    event.preventDefault()
    this.textAreaRef.current.select();
    document.execCommand('copy');
  }

  render(){
    return(
      <form onSubmit={this.copyToClipboard}>
        <h2>What is the meaning of that Exercise ?</h2>
        <div>
          <textarea ref={this.textAreaRef} type="text"></textarea>
        </div>
        <button type="submit">COPY</button>
      </form>
    );
  }
}
export default Form;