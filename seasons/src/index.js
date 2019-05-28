import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [latitude, errorMessage] = useLocation();

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
