import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button className={"bold"} text="Important"/>
      <Button text="NOT Important"/>
    </div>
  );
}


ReactDOM.render( <App />, document.getElementById('root'));

