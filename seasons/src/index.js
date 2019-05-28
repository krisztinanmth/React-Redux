import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatitude(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
    // empty array is given as second argument, because i only want to run this piece of code one time when the component renders
    // `componentDidMount`
  }, []);

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (latitude) {
    content = <SeasonDisplay lat={latitude} />;
  } else {
    content = <Spinner message="please accept location request" />;
  }

  return <div className="App">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
