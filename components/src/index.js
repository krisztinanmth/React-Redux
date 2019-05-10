import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetail'

const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetails
        author="Alex"
        text="Nice blog post!"
      />
      <CommentDetails
        author="Sam"
        text="loved reading this one"
      />
      <CommentDetails
        author="Julia"
        text="true words they are"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
