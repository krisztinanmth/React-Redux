import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../history'
import Modal from '../Modal'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)

  }

  renderActions() {
    const { id } = this.props.match.params

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button secondary"
        >
          delete
        </button>
        <Link to="/" className="ui button">
          cancel
        </Link>
      </React.Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'are you sure you want to delete this stream?'
    }
    return `are you sure you want to delete the stream with title: ${this.props.stream.title}`
  }

  render() {
    return (
      <Modal
        header="delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete)
