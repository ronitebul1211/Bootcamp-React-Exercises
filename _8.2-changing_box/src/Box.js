import React from 'react';

class Box extends React.Component {

  state = {hueBgColor: 200, isDisplayed: true, borderRadius: 0}
  
  colorsCounter = 1;
  
  componentDidMount(){
    this.colorInterval = setInterval(() => {
      this.setState({hueBgColor: Math.floor(Math.random() * 359) + 1});
      this.colorsCounter++;
      this.colorsCounter === 5 && this.setState({borderRadius: 50});
      if(this.colorsCounter > 10){
        clearInterval(this.colorInterval);
        this.setState({isDisplayed: false});
      }
    }, 500);
  }

  render(){
    const style = {
      backgroundColor:`hsl(${this.state.hueBgColor}, 100%, 50%)`,
      borderRadius: `${this.state.borderRadius}%`
    } 
    return (
      this.state.isDisplayed && <div className="box" style={style}></div>
    );
  }
}

  


// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Box;
