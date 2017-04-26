

function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    var list = document.getElementById("list")
    console.log(songList);
    // This is where you task begins
    var template = ""
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `
      <div class = "row">
          <div class = "col-sm-1">
            <img src="${song.albumArt}" class = "myPhoto">
          </div>
          <div class = "col-sm-4">
            <audio controls class="controls">
              <source id="myAudio" src="${song.preview}">
          </audio>
          </div>
          <div class = "col-sm-2">
            <h4>${song.artist}</h4>
          </div>
          <div class = "col-sm-2">
            <h4>${song.title}</h4>
          </div>
          <div class = "col-sm-3"> 
            <h4>${song.collection}</h4>
            <h5>Cost: $${song.price}</h5>
          </div>
      </div>
      <br>
        `
    }
    list.innerHTML = template;
  }

  //onclick flagg
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);

}



var itunesCtrl = new ItunesController()
