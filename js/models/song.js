const Song = (function createSong(){
  var id = 0;
  return class {
    constructor(name, album, spotify_url, preview_url, artist_name){
      this.name = name
      this.album = album
      this.spotify_url = spotify_url
      this.preview_url = preview_url
      this.artist_name = artist_name
      //et cetera
      this.id = ++id
      store().songs.push(this)
    }
  }
}())
