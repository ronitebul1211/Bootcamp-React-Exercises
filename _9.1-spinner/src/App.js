import React from 'react';
import Spinner from './Spinner/Spinner';

class App extends React.Component {
  
  state = {isDisplayed: true};

  componentDidMount(){
    setTimeout(() => {
      this.setState({isDisplayed: false});
    }, 5000);
  }

  render(){
    return (
      <div>
        {this.state.isDisplayed &&  <Spinner size={50}/>}
      </div>
    );
  }
}


export default App;