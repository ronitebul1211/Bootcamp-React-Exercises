
import React from 'react';

class Box extends React.Component {

  state = {isDisplay: false}

  componentDidMount(){
    this.firstTimer = setTimeout(() => { 
      this.setState({isDisplay: true})
    }, 1000);
    this.secondTimer = setTimeout(() => { 
      this.setState({isDisplay: false})
    }, 5000);
  }

  render(){
    return (
      this.state.isDisplay && <div className="box" style={{height: this.props.size, width: this.props.size }}></div>
    );
  }
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Box;
