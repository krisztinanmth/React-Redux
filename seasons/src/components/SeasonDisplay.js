import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s have some ice-cream',
    iconName: 'sun outline'
  },
  winter: {
    text: 'Brrrr, it\'s chilly',
    iconName: 'snowflake outline'
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // {text, iconName} - destructured

  return (
  <div className={`season-display ${season}`} >
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>
  );
};

export default SeasonDisplay;
