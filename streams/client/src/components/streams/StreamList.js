import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button secondary">
            edit
          </button>
          <button className="ui button negative">
            delete
          </button>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)
