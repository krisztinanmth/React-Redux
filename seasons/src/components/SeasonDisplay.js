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

  return <div>{season === 'summer' ? 'Let\'s have some ice-cream' : 'Brrrr, it\'s chilly'}</div>;
};

export default SeasonDisplay;
