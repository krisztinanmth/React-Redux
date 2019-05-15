import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Come as you are', duration: '5:45' },
    { title: 'Barbie girl', duration: '3:15' },
    { title: 'Teenage dirtbag', duration: '3:52' },
    { title: 'Best of me', duration: '4:11' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
