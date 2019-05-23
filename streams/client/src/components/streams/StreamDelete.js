import React from 'react'
import Modal from '../Modal'

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button secondary">delete</button>
      <button className="ui button">cancel</button>
    </>
  )

  return (
    <div>
      Delete Stream
      <Modal
        header="delete stream"
        content="are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  )
}

export default StreamDelete
