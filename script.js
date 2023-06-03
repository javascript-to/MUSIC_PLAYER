// Get the audio player element
const audioPlayer = document.getElementById('audio-player');

// Get the playlist element
const playlist = document.getElementById('playlist');

// Get all the songs in the playlist
const songs = playlist.getElementsByTagName('li');

// Play the selected song when clicked
for (let i = 0; i < songs.length; i++) {
    songs[i].addEventListener('click', function() {
        const songUrl = this.getAttribute('data-src');
        audioPlayer.src = songUrl;
        audioPlayer.play();
    });
}
