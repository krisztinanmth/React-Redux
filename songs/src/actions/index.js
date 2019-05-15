// Action creator
export const selectSong = song => {
  // returns an action -> plain JS object
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
