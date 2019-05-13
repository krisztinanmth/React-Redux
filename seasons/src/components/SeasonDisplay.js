import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'summer' ? 'Let\'s have some ice-cream' : 'Brrrr, it\'s chilly';
  const icon = season === 'summer' ? 'sun outline' : 'snowflake outline';

  return (
  <div>
    <i className={`${icon} icon`} />
    <h1>{text}</h1>
    <i className={`${icon} icon`} />
  </div>
  );
};

export default SeasonDisplay;
