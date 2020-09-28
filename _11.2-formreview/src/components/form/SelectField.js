import React from 'react';

/**
 Because menu render each time form state change,
 options elements created once, then store in component state
 */
class SelectField extends React.Component {
  
  state = {menuElements: []};

  componentDidMount(){
    const menuElements = this.props.options.map((option, index) => <option key={index} value={option}>{option}</option>);
    this.setState({menuElements})
  }

  updateFormOnChange = event => {
    this.props.inputChange(event);
  }

  render(){
    return (
      <div>
        <label>{this.props.label}</label>
        <select name={this.props.name} value={this.props.value} onChange={this.updateFormOnChange}>
          {this.state.menuElements}
        </select>
    </div>
    );
  }
}

export default SelectField;

// <option value="0-15">0-15</option>
// <option value="16-30">16-30</option>
// <option value="31-40">31-40</option>
// <option value="Over 40">Over 40</option>