document.addEventListener("DOMContentLoaded", function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const songName = urlParams.get('song');
    const songNumber = urlParams.get('number');

    // Load JSON data
    fetch('assets/json/song.json')
        .then(response => response.json())
        .then(data => displaySongInfo(data.song, songName, songNumber));
});

function displaySongInfo(songData, songName, songNumber) {
    const songInfo = document.getElementById('songInfo');

    const song = songData.find(song => song.name === songName);
    if (song) {
        const songItem = song.songs.find(item => item.number == songNumber);
        if (songItem) {

             songInfo.innerHTML = `

             <div class="current_sytiframe">
               <iframe id="myVideo" src="https://www.youtube.com/embed/${songItem.youtubeId}?autoplay=1&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
             </div>
             <div class="current_sinfo">
             <p class="current_stitle"><span>रामायण - </span> ${songItem.title}</p>
             <p class="current_sduration"><i class="uil uil-clock"></i> ${songItem.duration}</p>
             </div>`;

           
        } else {
            songInfo.innerHTML = '<p>Song not found.</p>';
        }
    } else {
        songInfo.innerHTML = '<p>Song not found.</p>';
    }
}
