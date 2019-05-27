import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => language === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <div>
        <ColorContext.Consumer>
          {color => this.renderButton(color)}
        </ColorContext.Consumer>
      </div>
    )
  }
}

export default Button;
