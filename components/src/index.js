import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetail'
import faker from 'faker'

const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetails
        avatar={faker.image.avatar()}
        author="Alex"
        timeOfPosting = "Yesterday 11:00 AM"
        text="Nice blog post!"
      />
      <CommentDetails
        avatar={faker.image.avatar()}
        author="Sam"
        timeOfPosting = "Today 2:00 AM"
        text="loved reading this one"
      />
      <CommentDetails
        avatar={faker.image.avatar()}
        author="Julia"
        timeOfPosting = "Today 5:00 PM"
        text="true words they are"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
