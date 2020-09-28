import React from 'react';


class Counter extends React.Component{

  constructor(){
    super();
    this.state = {counter: 0}
  }

 
  increment = () => {
    let counter = this.state.counter + 1;
    this.setState({counter});
  }



  render(){
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <h2>{this.state.counter}</h2>

      </div> 
    );
  }
} 

export default Counter;
