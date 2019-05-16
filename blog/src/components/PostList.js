import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
    console.log(this.props.fetchPosts().type)
  }

  render() {
    return (
      <div>
        hello post list
      </div>
    )
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostList)
