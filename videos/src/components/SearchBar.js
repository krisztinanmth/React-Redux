import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value })
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.state.searchTerm);

    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>video search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
