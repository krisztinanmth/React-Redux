import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      }
    );
  }

  componentDidMount() {
    console.log('component was rendered to the screen')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component was updated')
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>latitude: {this.state.latitude}</div>;
    }

    return <div>loading ...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
