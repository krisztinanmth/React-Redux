import React from 'react'
import SongList from './SongList'

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: '1em'}}>
      <div className="ui row">
        <div className="column six wide">
          <SongList />
        </div>
      </div>
    </div>
  )
}

export default App
