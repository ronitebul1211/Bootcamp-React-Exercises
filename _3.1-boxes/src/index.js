import React from 'react';
import ReactDOM from 'react-dom';
//Css - for background
import './index.css';
//Box components 
import Box1 from './Box1';




const App = () => {
  return (
    <div className="box-container">
      <Box1/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


