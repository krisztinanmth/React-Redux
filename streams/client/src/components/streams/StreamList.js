import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button secondary">
            edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
            delete
          </Link>
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
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreateStreamButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button secondary">
            create new stream
          </Link>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div>
        <h2>streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateStreamButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)
