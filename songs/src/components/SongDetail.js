import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {

  if (!song) {
    return <div>please, select a song</div>
  }
  return (
    <div>
      <h3 className="ui header">Details for:</h3>
      <p>title: {song.title}</p>
      <p>duration: {song.duration}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
