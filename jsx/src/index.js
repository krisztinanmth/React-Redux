import React from 'react'
import ReactDOM from 'react-dom'

const getButtonText = () => {
  return 'Click on me'
}

const App = () => {
  // const buttonText = 'Click me!'

  return (
    <div className="App">
      <label className="label" htmlFor="name">
        enter name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
