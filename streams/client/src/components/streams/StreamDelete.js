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

  render() {
    return (
      <div>
        Delete Stream
        <Modal
          header="delete stream"
          content="are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

export default connect(
  null,
  { fetchStream }
)(StreamDelete)
