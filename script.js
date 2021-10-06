var libraryEl = document.getElementById('library')
var library = ["MONTERO (Call Me By Your Name)", "DEAD RIGHT NOW", "INDUSTRY BABY", "THATS WHAT I WANT", "SCOOP", "LOST IN THE CITADEL", "DOLLA SIGN SLIME", "TALES OF DOMINICA", "SUN GOES DOWN", "VOID"]
var songControls = document.getElementById('songControls')
var song;
var currentSong = ".";
var volume = 1;
var k;
for (var i=0; i < library.length; i++) {
    var newSong = document.createElement("div")
    newSong.className = "library-song"
    newSong.id = "library-song-" + (i + 1);
    newSong.style.cursor = "pointer"
    newSong.innerHTML = "<a>" + library[i] + "</a>"
    /*newSong.onclick = function() {
        alert('you are playing ' + library[k])
    }*/
    newSong.setAttribute("onclick", "playSong('" + library[i] + "', " + i + ");")
    k = i
    libraryEl.appendChild(newSong)
}

function playSong(songName, id) {
    if (!song) {
        song = new Audio('library/' + songName + '.mp3')
        currentSong = songName
        song.controls = true;
        song.play()
        song.addEventListener('ended', function() {
            var nextSong = library[id+2]
            alert(id)
            song = newAudio('library/' + nextSong + '.mp3')
            currentSong = songName
            song.controls = true;
            song.play()
        })
        songControls.innerHTML = "";
        songControls.appendChild(song)
        return;
    }

    song.pause();
    if (currentSong == songName) {
        song.controls = true;
        song.play();
        songControls.innerHTML = "";
        songControls.appendChild(song)
        return;
    }

    volume = song.volume
    song = new Audio('library/' + songName + '.mp3')
    currentSong = songName
    song.volume = volume;
    song.controls = true;
    songControls.innerHTML = "";
    songControls.appendChild(song)
    song.play()
    song.addEventListener('ended', function() {
        var nextSong = library[id+2]
        alert(id)
        song = newAudio('library/' + nextSong + '.mp3')
        currentSong = songName
        song.controls = true;
        song.play()
    })
    
}
