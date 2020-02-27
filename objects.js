var playlist = new Object();
playlist["coltrane"] = "naima"

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(artistName)
  console.log(songTitle)
  var newPlaylist = Object.assign({}, playlist, {artistName, songTitle});
  console.log(newPlaylist)
  return newPlaylist;
}
