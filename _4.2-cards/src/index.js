import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'

const App = () => {
  return (
    <div>
      <Card
      imgSrc="http://lorempixel.com/200/200/sports/1"
      title="Title 1"
      description="lorem1 lorem1 lorem1 lorem1"
      shareLink="#"
      exploreLink="#"/>   
      
      <Card
      imgSrc="http://lorempixel.com/200/200/sports/2"
      title="Title 2"
      description="lorem2 lorem2 lorem2 lorem2"
      shareLink="#"
      exploreLink="#"/>   

      <Card
      imgSrc="http://lorempixel.com/200/200/sports/3"
      title="Title 3"
      description="lorem3 lorem3 lorem3 lorem3"
      shareLink="#"
      exploreLink="#"/>   
    </div>
  );
}


ReactDOM.render( <App />, document.getElementById('root'));

