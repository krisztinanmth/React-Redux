import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

  render() {
    return (
      <div className="ui container" style={{ marginTop: '2em' }}>
      <SearchBar />
    </div>
    );
  };
}

export default App;
