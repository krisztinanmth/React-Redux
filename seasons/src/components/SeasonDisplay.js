import React from "react";

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
  <div>
    <i className={`${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`${iconName} icon`} />
  </div>
  );
};

export default SeasonDisplay;
