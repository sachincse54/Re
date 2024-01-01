document.addEventListener("DOMContentLoaded", function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const seriesName = urlParams.get('series');
    const episodeNumber = urlParams.get('episode');

    // Load JSON data
    fetch('assets/json/info.json')
        .then(response => response.json())
        .then(data => displayEpisodeInfo(data.webseries, seriesName, episodeNumber));
});

function displayEpisodeInfo(webseries, seriesName, episodeNumber) {
    const episodeInfo = document.getElementById('episodeInfo');
    
    const series = webseries.find(series => series.name === seriesName);
    if (series) {
        const episode = series.episodes.find(ep => ep.number == episodeNumber);
        if (episode) {
             // Basic video player
             
             episodeInfo.innerHTML = `
             <div class="current_eytiframe">
             <iframe id="myVideo" src="https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
             </div>
             <div class="current_einfo">
             <h2><span>${seriesName}</span> - Episode ${episodeNumber}</h2>
             <p class="current_etitle"> ${episode.title}</p>
             <p class="current_eduration"><i class="uil uil-clock"></i> ${episode.duration}</p>
             <p class="current_equote">Quote: <q> ${episode.quote} </q></p>
             </div>`;

             

           
        } else {
            episodeInfo.innerHTML = '<p>Episode not found.</p>';
        }
    } else {
        episodeInfo.innerHTML = '<p>Series not found.</p>';
    }
}
