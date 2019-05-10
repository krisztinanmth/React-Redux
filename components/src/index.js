import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING</h4>
          Are you sure you want to proceed?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="Alex"
          timeOfPosting = "Yesterday 11:00 AM"
          content="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="Sam"
          timeOfPosting = "Today 2:00 AM"
          content="loved reading this one"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="Julia"
          timeOfPosting = "Today 5:00 PM"
          content="true words they are"
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
