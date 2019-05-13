import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  render() {
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>image search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBar;
