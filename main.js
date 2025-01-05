// TMDb API Key
const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16';

// Movie Suggestions
function getMovieSuggestions() {
    const movieName = document.getElementById('movieName').value.trim();
    const movieSuggestionsList = document.getElementById('movieSuggestions');

    if (!movieName) {
        clearMovieSuggestions();
        return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`)
        .then(response => response.json())
        .then(data => {
            movieSuggestionsList.innerHTML = '';

            if (data.results && data.results.length > 0) {
                data.results.slice(0, 5).forEach(result => {
                    const listItem = document.createElement('li');
                    listItem.textContent = result.title;
                    listItem.onclick = function () {
                        document.getElementById('movieName').value = result.title;
                        clearMovieSuggestions();
                    };
                    movieSuggestionsList.appendChild(listItem);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching movie suggestions:', error);
            clearMovieSuggestions();
        });
}

function clearMovieSuggestions() {
    document.getElementById('movieSuggestions').innerHTML = '';
}

// Movie Search
async function searchMovie() {
    const movieName = document.getElementById('movieName').value.trim();
    const movieResultElement = document.getElementById('movieResult');
    const movieCopyButton = document.getElementById('movieCopyButton');

    if (!movieName) {
        alert('Please enter a movie name!');
        return;
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const movie = data.results[0];
            const movieTmdbId = movie.id;

            const firstMovieUrl = `https://vidsrc.in/embed/movie/${movieTmdbId}`;
            const secondMovieUrl = `https://vidsrc.to/embed/movie/${movieTmdbId}`;

            movieResultElement.innerHTML = `
                <a href="${firstMovieUrl}" target="_blank">Generated URL 1: ${firstMovieUrl}</a>
                <iframe src="${firstMovieUrl}" allowfullscreen></iframe>
                <br>
                <a href="${secondMovieUrl}" target="_blank">Generated URL 2: ${secondMovieUrl}</a>
                <iframe src="${secondMovieUrl}" allowfullscreen></iframe>
            `;

            movieCopyButton.disabled = false;
            window.generatedFirstMovieUrl = firstMovieUrl;
            window.generatedSecondMovieUrl = secondMovieUrl;
        } else {
            movieResultElement.innerHTML = 'Movie not found.';
            movieCopyButton.disabled = true;
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
        movieResultElement.innerHTML = 'Error fetching movie data.';
        movieCopyButton.disabled = true;
    }
}

function copyMovieToClipboard() {
    const firstMovieUrl = window.generatedFirstMovieUrl;
    const secondMovieUrl = window.generatedSecondMovieUrl;

    if (!firstMovieUrl || !secondMovieUrl) {
        alert('No movie URLs to copy!');
        return;
    }

    const urls = `First URL: ${firstMovieUrl}\nSecond URL: ${secondMovieUrl}`;
    const textarea = document.createElement('textarea');
    textarea.value = urls;

    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        alert('Movie URLs copied to clipboard!');
    } catch (error) {
        console.error('Error copying URLs to clipboard:', error);
    } finally {
        document.body.removeChild(textarea);
    }
}

// Series Suggestions
function getSeriesSuggestions() {
    const seriesName = document.getElementById('seriesName').value.trim();
    const seriesSuggestionsList = document.getElementById('seriesSuggestions');

    if (!seriesName) {
        clearSeriesSuggestions();
        return;
    }

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)
        .then(response => response.json())
        .then(data => {
            seriesSuggestionsList.innerHTML = '';

            if (data.results && data.results.length > 0) {
                data.results.slice(0, 5).forEach(result => {
                    const listItem = document.createElement('li');
                    listItem.textContent = result.name;
                    listItem.onclick = function () {
                        document.getElementById('seriesName').value = result.name;
                        clearSeriesSuggestions();
                    };
                    seriesSuggestionsList.appendChild(listItem);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching series suggestions:', error);
            clearSeriesSuggestions();
        });
}

function clearSeriesSuggestions() {
    document.getElementById('seriesSuggestions').innerHTML = '';
}

// Series Search
async function searchSeries() {
    const seriesName = document.getElementById('seriesName').value.trim();
    const seriesResultElement = document.getElementById('seriesResult');
    const seriesCopyButton = document.getElementById('seriesCopyButton');

    if (!seriesName) {
        alert('Please enter a series name!');
        return;
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const series = data.results[0];
            const seriesTmdbId = series.id;

            const firstSeriesUrl = `https://vidsrc.in/embed/tv/${seriesTmdbId}`;
            const secondSeriesUrl = `https://vidsrc.to/embed/tv/${seriesTmdbId}`;

            seriesResultElement.innerHTML = `
                <a href="${firstSeriesUrl}" target="_blank">Generated URL 1: ${firstSeriesUrl}</a>
                <iframe src="${firstSeriesUrl}" allowfullscreen></iframe>
                <br>
                <a href="${secondSeriesUrl}" target="_blank">Generated URL 2: ${secondSeriesUrl}</a>
                <iframe src="${secondSeriesUrl}" allowfullscreen></iframe>
            `;

            seriesCopyButton.disabled = false;
            window.generatedFirstSeriesUrl = firstSeriesUrl;
            window.generatedSecondSeriesUrl = secondSeriesUrl;
        } else {
            seriesResultElement.innerHTML = 'Series not found.';
            seriesCopyButton.disabled = true;
        }
    } catch (error) {
        console.error('Error fetching series data:', error);
        seriesResultElement.innerHTML = 'Error fetching series data.';
        seriesCopyButton.disabled = true;
    }
}

function copySeriesToClipboard() {
    const firstSeriesUrl = window.generatedFirstSeriesUrl;
    const secondSeriesUrl = window.generatedSecondSeriesUrl;

    if (!firstSeriesUrl || !secondSeriesUrl) {
        alert('No series URLs to copy!');
        return;
    }

    const urls = `First URL: ${firstSeriesUrl}\nSecond URL: ${secondSeriesUrl}`;
    const textarea = document.createElement('textarea');
    textarea.value = urls;

    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        alert('Series URLs copied to clipboard!');
    } catch (error) {
        console.error('Error copying URLs to clipboard:', error);
    } finally {
        document.body.removeChild(textarea);
    }
}
