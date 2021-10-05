var libraryEl = document.getElementById('library')
var library = ["MONTERO (Call Me By Your Name)", "DEAD RIGHT NOW", "INDUSTRY BABY"]
var songControls = document.getElementById('songControls')
for (var i=0; i < library.length; i++) {
    var newSong = document.createElement("div")
    newSong.className = "library-song"
    newSong.id = "library-song-" + (i + 1);
    newSong.style.cursor = "pointer"
    newSong.innerHTML = "<a>" + library[i] + "</a>"
    /*newSong.onclick = function() {
        alert('you are playing ' + library[k])
    }*/
    newSong.setAttribute("onclick", "playSong('" + library[i] + "');")
    var k = i
    
    libraryEl.appendChild(newSong)
}

function playSong(songName) {
    var song = new Audio(songName + '.mp3')
    song.play()
}
