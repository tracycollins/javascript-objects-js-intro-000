var playlist = {}
playlist["coltrane"] = "naima"

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(artistName)
  console.log(songTitle)
  var newPlaylist = Object.assign({}, playlist);
  console.log(newPlaylist)
  newPlaylist[artistName] = songTitle
  return newPlaylist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  console.log(artistName)
  console.log(songTitle)
  var newPlaylist = Object.assign({}, playlist);
  console.log(newPlaylist)
  newPlaylist[artistName] = songTitle
  return newPlaylist;
}
