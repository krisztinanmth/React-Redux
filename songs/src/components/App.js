import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: '1em'}}>
      <div className="ui row">
        <div className="column six wide">
          <SongList />
        </div>
        <div className="column ten wide" style={{ textAlign: 'center' }}>
          <SongDetail />
        </div>
      </div>
    </div>
  )
}

export default App
