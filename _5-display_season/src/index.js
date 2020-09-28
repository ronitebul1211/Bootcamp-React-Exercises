/**
 1. Semantic UI - added as link stylesheet to index.html (google -> semantic ui cdn, copy -> semantic.min.css)
 */
/**
 ****** Initialize State (only time direct assignment used): *****
   # Constructor:
   constructor(props){
    super(props);
    state = {latitude: null, errorMessage:''};
   }
   # As Variable
   state = {latitude: null, errorMessage:''};
 
 ****** Render *****
 get called: 1.component initialization 2. After setState() gel called
 render() get calls many time in component lifecycle, implement only the logic that needed to render UI 
 render itself+ children's
 */
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component{

  state = {latitude: null, errorMessage:''};

  componentDidMount(){
    console.log("its wird");
    //State (update) ->  cause render()
    window.navigator.geolocation.getCurrentPosition(
      //This code return in future point, after constructor return
      position => this.setState({latitude: position.coords.latitude}), //Success callback
      err => this.setState({errorMessage: err.message}) //Fail callback
    );
  }

  //Less logic as possible inside render function (because its called lot of time during runtime)
  //Sometimes it's better to wrap render logic in function -> in case we want to apply changed in enclosing div 
  
  getRenderContent(){
    if (this.state.errorMessage && !this.state.latitude){ // Error UI
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.latitude){ // Success UI
      return <SeasonDisplay latitude={this.state.latitude}/>;
    } else {                                                   // Loading UI
      return <Spinner message="Allow access"/>;
    }
  }
  render(){
     return (
       <div className="container">
         {this.getRenderContent()}
      </div>
     );
  }
}

ReactDOM.render( <App />, document.getElementById('root'));

