import React from 'react';
import './filterEl.css'

class FilterEl extends React.Component {

  state = {currentInput: ''}

  onInputChange = (event) => {
    const currentInput = event.target.value;
    this.setState({currentInput});
    this.props.sendInputUpdate(currentInput);
  }

  render(){
    console.log("fILTER render");
    return(
      <div className="filter-container">
        <input 
          className="filter-input"
          placeholder="Filter By Name ..."
          type="text"
          value={this.state.currentInput}
          onChange={this.onInputChange}
          />
      </div>
      );
    }
}
export default FilterEl;