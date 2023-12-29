



function getMovieSuggestions() {

    const movieName = document.getElementById('movieName').value;

    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; // Replace with your TMDb API key



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

    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; // Replace with your TMDb API key



    // Make a request to TMDb API for movie details

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`)

        .then(response => response.json())

        .then(data => {

            const movieResultElement = document.getElementById('movieResult');

            const movieCopyButton = document.getElementById('movieCopyButton');



            if (data.results && data.results.length > 0) {

                const movieTmdbId = data.results[0].id;



                // Generate the URL for the movie

                const movieUrl = `https://vidsrc.xyz/embed/movie/${movieTmdbId}`;



                // Display the generated URL for the movie on the page

                movieResultElement.innerHTML = `Generated URL: <a href="${movieUrl}" target="_blank">${movieUrl}</a>`;



                // Enable the copy button for the movie

                movieCopyButton.disabled = false;



                // Store the URL for the movie in a global variable for copying

                window.generatedMovieUrl = movieUrl;

            } else {

                movieResultElement.innerHTML = 'Movie not found';

                // Disable the copy button for the movie if no movie is found

                movieCopyButton.disabled = true;

            }

        })

        .catch(error => {

            console.error('Error fetching movie data:', error);

            document.getElementById('movieResult').innerHTML = 'Error fetching movie data';

            // Disable the copy button for the movie in case of an error

            document.getElementById('movieCopyButton').disabled = true;

        });

}



function copyMovieToClipboard() {

    // Create a temporary input element

    const input = document.createElement('input');

    // Set its value to the generated URL for the movie

    input.value = window.generatedMovieUrl;

    // Append it to the body

    document.body.appendChild(input);

    // Select the input's content

    input.select();

    // Copy to clipboard

    document.execCommand('copy');

    // Remove the temporary input

    document.body.removeChild(input);

}



function clearMovieSuggestions() {

    document.getElementById('movieSuggestions').innerHTML = '';

}



// Series Section

function getSeriesSuggestions() {

    const seriesName = document.getElementById('seriesName').value;

    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; // Replace with your TMDb API key



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

    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; // Replace with your TMDb API key



    // Make a request to TMDb API for series details

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)

        .then(response => response.json())

        .then(data => {

            const seriesResultElement = document.getElementById('seriesResult');

            const seriesCopyButton = document.getElementById('seriesCopyButton');



            if (data.results && data.results.length > 0) {

                const seriesTmdbId = data.results[0].id;



                // Generate the URL for the series

                const seriesUrl = `https://vidsrc.xyz/embed/tv/${seriesTmdbId}`;



                // Display the generated URL for the series on the page

                seriesResultElement.innerHTML = `Generated URL: <a href="${seriesUrl}" target="_blank">${seriesUrl}</a>`;



                // Enable the copy button for the series

                seriesCopyButton.disabled = false;



                // Store the URL for the series in a global variable for copying

                window.generatedSeriesUrl = seriesUrl;

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

    // Create a temporary input element

    const input = document.createElement('input');

    // Set its value to the generated URL for the series

    input.value = window.generatedSeriesUrl;

    // Append it to the body

    document.body.appendChild(input);

    // Select the input's content

    input.select();

    // Copy to clipboard

    document.execCommand('copy');

    // Remove the temporary input

    document.body.removeChild(input);

}



function clearSeriesSuggestions() {

    document.getElementById('seriesSuggestions').innerHTML = '';

}

