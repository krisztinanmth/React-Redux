import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const buttonText = {text: 'Click me!'}
  const labelText = 'enter name:'

  return (
    <div className="App">
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
