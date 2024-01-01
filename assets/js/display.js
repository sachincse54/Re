document.addEventListener("DOMContentLoaded", function() {
    // Load JSON data
    fetch('assets/json/info.json')
        .then(response => response.json())
        .then(data => displayWebSeries(data.webseries));
});

function displayWebSeries(webseries) {
    const episodesContainer = document.getElementById('ramayan_episodes-list');

    webseries.forEach(series => {
        const episodesList = document.createElement('div');
        episodesList.classList.add('episodes_list')
        episodesList.innerHTML = `<h3>${series.name}</h3>`;
        
        series.episodes.forEach(episode => {
            const singleEpisodeDiv = document.createElement('div');
            singleEpisodeDiv.classList.add('single_episode')
            singleEpisodeDiv.innerHTML = `
            <a href="player.html?series=${series.name}&episode=${episode.number}">
              <img src="${episode.thumbnail}" alt="${series.name} - Episode ${episode.number}">
              <p><span>रामायण </span>- Episode ${episode.number} - ${episode.title}</p>
            </a>
            `;
            episodesList.appendChild(singleEpisodeDiv);
        });

        episodesContainer.appendChild(episodesList);
    });
}
