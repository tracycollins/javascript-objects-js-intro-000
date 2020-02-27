var playlist = new Object();
playlist["coltrane"] = "naima"

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist);
  newPlaylist[artistName] = songTitle;
  return newPlaylist;
}
