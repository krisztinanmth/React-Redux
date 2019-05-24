import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // set up context type -> this is how I connect
  // my Context Object with this class
  // NOTE: MUST BE CALLED contextTypea and MUST BE static
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

    return (
      <div>
        <button className="ui button orange">{text}</button>
      </div>
    )
  }
}


// Button.contextType = LanguageContext; -> would be good also for setting up contextType

export default Button;
