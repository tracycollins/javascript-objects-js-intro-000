var playlist = {}
playlist["coltrane"] = "naima"

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist, {artistName: songTitle})
  return newPlaylist
}
