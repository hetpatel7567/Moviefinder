function getMovieSuggestions() {

    const movieName = document.getElementById('movieName').value;

    const apiKey = 'your-tmdb-api-key'; // Replace with your TMDb API key



    if (movieName.trim() === '') {

        clearMovieSuggestions();

        return;

    }



    // Make a request to TMDb API for movie suggestions

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`)

        .then(response => response.json())

        .then(data => {

            const movieSuggestionsList = document.getElementById('movieSuggestions');

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



function searchMovie() {
    const movieName = document.getElementById('movieName').value;
    const apiKey = 'your-tmdb-api-key'; // Replace with your TMDb API key

    // Make a request to TMDb API for movie details
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`)
        .then(response => response.json())
        .then(data => {
            const movieResultElement = document.getElementById('movieResult');
            const movieCopyButton = document.getElementById('movieCopyButton');

            if (data.results && data.results.length > 0) {
                const movieTmdbId = data.results[0].id;

                // Construct the URL for embedding the first movie
                const firstMovieUrl = `https://vidsrc.xyz/embed/movie/${movieTmdbId}`;
                // Construct the URL for embedding the second movie
                const secondMovieUrl = `https://vidsrc.to/embed/movie/${movieTmdbId}`;

                // Create the first iframe element
                const firstIframe = document.createElement('iframe');
                firstIframe.src = firstMovieUrl; 
                firstIframe.allowfullscreen = true;

                // Create the second iframe element
                const secondIframe = document.createElement('iframe');
                secondIframe.src = secondMovieUrl; 
                secondIframe.allowfullscreen = true;

                // Clear previous content
                movieResultElement.innerHTML = '';

                // Display the generated URLs as clickable links
                const firstLinkElement = document.createElement('a');
                firstLinkElement.href = firstMovieUrl;
                firstLinkElement.target = '_blank';
                firstLinkElement.textContent = "Generated URL 1: " + firstMovieUrl;

                const secondLinkElement = document.createElement('a');
                secondLinkElement.href = secondMovieUrl;
                secondLinkElement.target = '_blank';
                secondLinkElement.textContent = "Generated URL 2: " + secondMovieUrl;

                // Append the links and iframes to the result element
                movieResultElement.appendChild(firstLinkElement);
                movieResultElement.appendChild(firstIframe);
                movieResultElement.appendChild(document.createElement('br')); // Add a line break
                movieResultElement.appendChild(secondLinkElement);
                movieResultElement.appendChild(secondIframe);

                // Enable the copy button for the movies
                movieCopyButton.disabled = false;

                // Store the URLs for the movies in global variables for copying
                window.generatedFirstMovieUrl = firstMovieUrl;
                window.generatedSecondMovieUrl = secondMovieUrl;
            } else {
                movieResultElement.innerHTML = 'Movie not found';
                // Disable the copy button for the movies if no movie is found
                movieCopyButton.disabled = true;
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            document.getElementById('movieResult').innerHTML = 'Error fetching movie data';
            // Disable the copy button for the movies in case of an error
            document.getElementById('movieCopyButton').disabled = true;
        });
}





function copyMovieToClipboard() {
    const generatedMovieUrl = window.generatedMovieUrl;

    if (!generatedMovieUrl) {
        console.error('No generated movie URL to copy.');
        return;
    }

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = generatedMovieUrl;

    // Append it to the body
    document.body.appendChild(textarea);

    // Select the text
    textarea.select();

    try {
        // Use the Clipboard API to copy the text to the clipboard
        document.execCommand('copy');
        console.log('URL copied to clipboard:', generatedMovieUrl);
    } catch (error) {
        console.error('Error copying to clipboard:', error);
    } finally {
        // Remove the temporary textarea
        document.body.removeChild(textarea);
    }
}




function clearMovieSuggestions() {

    document.getElementById('movieSuggestions').innerHTML = '';

}



// Series Section

function getSeriesSuggestions() {

    const seriesName = document.getElementById('seriesName').value;

    const apiKey = 'your-tmdb-api-key'; // Replace with your TMDb API key



    if (seriesName.trim() === '') {

        clearSeriesSuggestions();

        return;

    }



    // Make a request to TMDb API for series suggestions

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)

        .then(response => response.json())

        .then(data => {

            const seriesSuggestionsList = document.getElementById('seriesSuggestions');

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





function searchSeries() {
    const seriesName = document.getElementById('seriesName').value;
    const apiKey = 'your-tmdb-api-key'; // Replace with your TMDb API key

    // Make a request to TMDb API for series details
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)
        .then(response => response.json())
        .then(data => {
            const seriesResultElement = document.getElementById('seriesResult');
            const seriesCopyButton = document.getElementById('seriesCopyButton');

            if (data.results && data.results.length > 0) {
                const seriesTmdbId = data.results[0].id;

                // Construct the URL for embedding the first series
                const firstSeriesUrl = `https://vidsrc.xyz/embed/tv/${seriesTmdbId}`;
                // Construct the URL for embedding the second series
                const secondSeriesUrl = `https://vidsrc.to/embed/tv/${seriesTmdbId}`;

                // Create the first iframe element
                const firstIframe = document.createElement('iframe');
                firstIframe.src = firstSeriesUrl;
                firstIframe.allowfullscreen = true;

                // Create the second iframe element
                const secondIframe = document.createElement('iframe');
                secondIframe.src = secondSeriesUrl;
                secondIframe.allowfullscreen = true;

                // Clear previous content
                seriesResultElement.innerHTML = '';

                // Display the generated URLs as clickable links
                const firstLinkElement = document.createElement('a');
                firstLinkElement.href = firstSeriesUrl;
                firstLinkElement.target = '_blank';
                firstLinkElement.textContent = 'Generated URL 1: ' + firstSeriesUrl;

                const secondLinkElement = document.createElement('a');
                secondLinkElement.href = secondSeriesUrl;
                secondLinkElement.target = '_blank';
                secondLinkElement.textContent = 'Generated URL 2: ' + secondSeriesUrl;

                // Append the links and iframes to the result element
                seriesResultElement.appendChild(firstLinkElement);
                seriesResultElement.appendChild(firstIframe);
                seriesResultElement.appendChild(document.createElement('br')); // Add a line break
                seriesResultElement.appendChild(secondLinkElement);
                seriesResultElement.appendChild(secondIframe);

                // Enable the copy button for the series
                seriesCopyButton.disabled = false;

                // Store the URLs for the series in global variables for copying
                window.generatedFirstSeriesUrl = firstSeriesUrl;
                window.generatedSecondSeriesUrl = secondSeriesUrl;
            } else {
                seriesResultElement.innerHTML = 'Series not found';
                // Disable the copy button for the series if no series is found
                seriesCopyButton.disabled = true;
            }
        })
        .catch(error => {
            console.error('Error fetching series data:', error);
            document.getElementById('seriesResult').innerHTML = 'Error fetching series data';
            // Disable the copy button for the series in case of an error
            document.getElementById('seriesCopyButton').disabled = true;
        });
}







function copySeriesToClipboard() {
    const generatedSeriesUrl = window.generatedSeriesUrl;

    if (!generatedSeriesUrl) {
        console.error('No generated series URL to copy.');
        return;
    }

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = generatedSeriesUrl;

    // Append it to the body
    document.body.appendChild(textarea);

    // Select the text
    textarea.select();

    try {
        // Use the Clipboard API to copy the text to the clipboard
        document.execCommand('copy');
        console.log('URL copied to clipboard:', generatedSeriesUrl);
    } catch (error) {
        console.error('Error copying to clipboard:', error);
    } finally {
        // Remove the temporary textarea
        document.body.removeChild(textarea);
    }
}



function clearSeriesSuggestions() {

    document.getElementById('seriesSuggestions').innerHTML = '';

}
