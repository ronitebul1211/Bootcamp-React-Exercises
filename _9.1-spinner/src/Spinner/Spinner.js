

import React from 'react'
import './Spinner.css'

class Spinner extends React.Component{

  //Default Spinner
  static defaultProps = {
    size: 50,
    borderWidth: 10
  };
  //Assign Spinner Size to style object
  style = {
    height: `${this.props.size}px`,
    width: `${this.props.size}px`,
    borderWidth: `${this.props.size / 5}px`
  }

  render(){
    return (
      <div className="spinner" style={this.style}></div>
    );
  }

}



export default Spinner;