import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

class App extends React.Component {

  state = {selectedColor: ''}

  handleBtnClick = (selectedColor) => this.setState({selectedColor});

  generateColorsBtn = () => {
    const colors =  ['blue','red','yellow'];
    return colors.map((color, index) => <Button key={index} color={color} sendClick={this.handleBtnClick}/>)
  }

  render(){
    return (
      <div>
        {this.generateColorsBtn()}
        <h1>The color Selected is {this.state.selectedColor}</h1>
      </div>
    );  
  } 
}
export default App;