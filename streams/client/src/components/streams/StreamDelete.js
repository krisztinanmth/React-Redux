import React from 'react'
import { connect } from 'react-redux'
import history from '../../history'
import Modal from '../Modal'
import { fetchStream } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)

  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button secondary">delete</button>
        <button className="ui button">cancel</button>
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
  { fetchStream }
)(StreamDelete)
