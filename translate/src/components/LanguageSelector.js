import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        select a language:
        <i
          className="flag gb"
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
