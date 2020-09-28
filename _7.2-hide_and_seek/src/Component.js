import React from 'react';

class Component extends React.Component {
  
  constructor(){
    super();
    this.state = {isBoxHidden: true}
  }

  showOrHideBox = () => {
    this.setState({isBoxHidden: (!this.state.isBoxHidden)});
  }
  
  render(){
    return (
      <div>
        <button onClick={this.showOrHideBox}>SHOW / HIDE</button>
        {!this.state.isBoxHidden && <div className="box"></div>}
      </div>
    );
  }
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Component;
