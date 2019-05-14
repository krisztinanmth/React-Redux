import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID d4d8262c47566d0f2a04583e3c4d25b561c57d83153872bff79561f3f563a1d1'
      }
    });
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '2em' }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      found {this.state.images.length} images
    </div>
    );
  }
}

export default App;
