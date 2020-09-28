import React from 'react';

class Checkbox extends React.Component {

  state = {isChecked: this.props.isChecked}

  onCheckboxChange(){
    this.setState({isChecked: !this.state.isChecked});
  }

  render(){
    console.log(this.state.isChecked);
    return (
      <div> 
        <input 
          type="checkbox" 
          checked={this.state.isChecked}
          onChange= {() => this.onCheckboxChange()}/> 
        <label>{this.props.text}</label>
      </div>
    );
  }
}




// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Checkbox;
