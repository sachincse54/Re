document.addEventListener("DOMContentLoaded", function() {
    // Load JSON data
    fetch('assets/json/song.json')
        .then(response => response.json())
        .then(data => displaySongs(data.song));
});

function displaySongs(songData) {
    const songContainer = document.getElementById('song_container');

    songData.forEach(song  => {
        const songList = document.createElement('div');
        songList.classList.add('song_list')
        songList.innerHTML = `<h3>${song.name}</h3>`;
        
        song.songs.forEach(songItem => {
            const singleSongDiv = document.createElement('div');
            singleSongDiv.classList.add('single_song')
            singleSongDiv.innerHTML = `
            <div class="song_info">
              <img src="${songItem.thumbnail}" alt="${song.name} - Episode ${songItem.number}">
              <p><span>रामायण </span>- ${songItem.title}</p>
              <a href="splayer.html?song=${song.name}&number=${songItem.number}"><i class="uil uil-play-circle"></i></a>
            </div> 
            `;
            songList.appendChild(singleSongDiv);
        });

        songContainer.appendChild(songList);
    });


}
