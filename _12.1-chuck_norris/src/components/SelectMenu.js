
import React from 'react';
import axios from 'axios';

class SelectMenu extends React.Component{

  state = {catOptionsEl: []}

  async componentDidMount(){
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');
    const catOptionsEl = response.data.map((option, index) => <option key={index} value={option}>{option}</option>)
    this.setState({catOptionsEl: catOptionsEl});
  }

  onItemSelected = (e) => {
    this.props.updateForm(e.target.value)
  }

  render(){
    return (
      <select value={this.props.selectedItem} onChange={this.onItemSelected}>
        <option key="label" value="label" hidden>Joke Category</option>
        {this.state.catOptionsEl}
      </select>
    );
  }
}

export default SelectMenu;

