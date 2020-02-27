var playlist = {}
playlist["coltrane"] = "naima"

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(artistName)
  console.log(songTitle)
  newPlaylist = Object.assign(playlist, {[artistName]: songTitle});
  console.log(newPlaylist)
  return newPlaylist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  console.log(playlist)
  console.log(artistName)
  console.log(songTitle)
  var newPlaylist = {}
  newPlaylist = Object.assign(playlist, artistName, songTitle);
  console.log(newPlaylist)
  newPlaylist[artistName] = songTitle
  return newPlaylist;
}
