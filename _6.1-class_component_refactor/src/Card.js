import React from 'react';

class Card extends React.Component{
  render(){
    return (
      <div className="card-container">
        <img src={this.props.imgSrc}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <a className="card-btn" href={this.props.shareLink}>SHARE</a>
        <a className="card-btn" href={this.props.exploreLink}>EXPLORE</a>
      </div>
    );
  }
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default Card;
