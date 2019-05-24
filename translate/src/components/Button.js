import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // set up context type -> this is how I connect
  // my Context Object with this class
  // NOTE: MUST BE CALLED contextTypea and MUST BE static
  static contextType = LanguageContext;

  render() {
    console.log(this.context)
    return (
      <div>
        <button className="ui button orange">button</button>
      </div>
    )
  }
}


// Button.contextType = LanguageContext; -> would be good also for setting up contextType

export default Button;
