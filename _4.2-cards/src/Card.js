import React from 'react';

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.imgSrc}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a className="card-btn" href={props.shareLink}>SHARE</a>
      <a className="card-btn" href={props.exploreLink}>EXPLORE</a>
    </div>
  );
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Card;
