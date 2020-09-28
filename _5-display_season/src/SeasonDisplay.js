import './SeasonDisplay.css'
import React from 'react';

//Helper function
const getSeason = (latitude, month) => {
  if(month > 2 && month < 9){
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

//Config Object
const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  },
}

// Component function
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]; // Get current season object, destructure object properties


  
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h2>{text}</h2>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div> 
  )
}

// Export Component -> make it available for other files in app
// Use in other file -> import Component from './Component'
export default SeasonDisplay;
