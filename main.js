


// var frames = document.getElementsByTagName('iframe');
// for (var frame of frames) {
//     frame.setAttribute("sandbox", "allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-forms");
// }

// window.onload = function(){
//     var button = document.getElementsByName("sandbox")[0]
//     var iframe = document.getElementsByName("framez")[0]
//     button.addEventListener('click',sndbx,false);

//     function sndbx(){
//     var nibba = document.getElementById("framez").src;
//     if(iframe.sandbox == 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation'){
//     document.getElementById("framez").removeAttribute("sandbox"); 
//     }
//     frames['framez'].location.href=nibba;
//     iframe.sandbox = 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation';
//     }
// } 

function getMovieSuggestions() {

    const movieName = document.getElementById('movieName').value;

    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; // Replace with your TMDb API key



    if (movieName.trim() === '') {

        clearMovieSuggestions();

        return;

    }




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
    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`)
        .then(response => response.json())
        .then(data => {
            const movieResultElement = document.getElementById('movieResult');
            const movieCopyButton = document.getElementById('movieCopyButton');

            if (data.results && data.results.length > 0) {
                const movieTmdbId = data.results[0].id;

                const firstMovieUrl = `https://vidsrc.xyz/embed/movie/${movieTmdbId}`;
                const secondMovieUrl = `https://vidsrc.to/embed/movie/${movieTmdbId}`;

                const firstIframe = document.createElement('iframe');
                firstIframe.src = firstMovieUrl; 
                firstIframe.allowfullscreen = true;

                const secondIframe = document.createElement('iframe');
                secondIframe.src = secondMovieUrl; 
                secondIframe.allowfullscreen = true;

                movieResultElement.innerHTML = '';

                const firstLinkElement = document.createElement('a');
                firstLinkElement.href = firstMovieUrl;
                firstLinkElement.target = '_blank';
                firstLinkElement.textContent = "Generated URL 1: " + firstMovieUrl;

                const secondLinkElement = document.createElement('a');
                secondLinkElement.href = secondMovieUrl;
                secondLinkElement.target = '_blank';
                secondLinkElement.textContent = "Generated URL 2: " + secondMovieUrl;

                movieResultElement.appendChild(firstLinkElement);
                movieResultElement.appendChild(firstIframe);
                movieResultElement.appendChild(document.createElement('br')); // Add a line break
                movieResultElement.appendChild(secondLinkElement);
                movieResultElement.appendChild(secondIframe);

                movieCopyButton.disabled = false;

                window.generatedFirstMovieUrl = firstMovieUrl;
                window.generatedSecondMovieUrl = secondMovieUrl;
            } else {
                movieResultElement.innerHTML = 'Movie not found';
                movieCopyButton.disabled = true;
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            document.getElementById('movieResult').innerHTML = 'Error fetching movie data';
            document.getElementById('movieCopyButton').disabled = true;
        });
}





function copyMovieToClipboard() {
    const generatedMovieUrl = window.generatedMovieUrl;

    if (!generatedMovieUrl) {
        console.error('No generated movie URL to copy.');
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = generatedMovieUrl;

    document.body.appendChild(textarea);

    textarea.select();

    try {
        document.execCommand('copy');
        console.log('URL copied to clipboard:', generatedMovieUrl);
    } catch (error) {
        console.error('Error copying to clipboard:', error);
    } finally {
        document.body.removeChild(textarea);
    }
}




function clearMovieSuggestions() {

    document.getElementById('movieSuggestions').innerHTML = '';

}




function getSeriesSuggestions() {

    const seriesName = document.getElementById('seriesName').value;

    const apiKey = '69a6237ce6938d2fb74092f8ff3a8f16'; // Replace with your TMDb API key



    if (seriesName.trim() === '') {

        clearSeriesSuggestions();

        return;

    }




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

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(seriesName)}`)
        .then(response => response.json())
        .then(data => {
            const seriesResultElement = document.getElementById('seriesResult');
            const seriesCopyButton = document.getElementById('seriesCopyButton');

            if (data.results && data.results.length > 0) {
                const seriesTmdbId = data.results[0].id;

                const firstSeriesUrl = `https://vidsrc.xyz/embed/tv/${seriesTmdbId}`;
                const secondSeriesUrl = `https://vidsrc.to/embed/tv/${seriesTmdbId}`;

                const firstIframe = document.createElement('iframe');
                firstIframe.src = firstSeriesUrl;
                firstIframe.allowfullscreen = true;

                const secondIframe = document.createElement('iframe');
                secondIframe.src = secondSeriesUrl;
                secondIframe.allowfullscreen = true;

                seriesResultElement.innerHTML = '';

                const firstLinkElement = document.createElement('a');
                firstLinkElement.href = firstSeriesUrl;
                firstLinkElement.target = '_blank';
                firstLinkElement.textContent = 'Generated URL 1: ' + firstSeriesUrl;

                const secondLinkElement = document.createElement('a');
                secondLinkElement.href = secondSeriesUrl;
                secondLinkElement.target = '_blank';
                secondLinkElement.textContent = 'Generated URL 2: ' + secondSeriesUrl;

               
                seriesResultElement.appendChild(firstLinkElement);
                seriesResultElement.appendChild(firstIframe);
                seriesResultElement.appendChild(document.createElement('br')); // Add a line break
                seriesResultElement.appendChild(secondLinkElement);
                seriesResultElement.appendChild(secondIframe);

                
                seriesCopyButton.disabled = false;

             
                window.generatedFirstSeriesUrl = firstSeriesUrl;
                window.generatedSecondSeriesUrl = secondSeriesUrl;
            } else {
                seriesResultElement.innerHTML = 'Series not found';
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


const API_KEY = '69a6237ce6938d2fb74092f8ff3a8f16';

async function searchMovie() {
    const movieName = document.getElementById('movieName').value;
    const movieIdInput = document.getElementById('movieId');
    const resultDisplay = document.getElementById('resultDisplay');

    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&api_key=${API_KEY}`;

    try {
        const response = await fetch(searchUrl);
        const searchResults = await response.json();

        if (searchResults.results && searchResults.results.length > 0) {
            const firstMovie = searchResults.results[0];
            const movieId = firstMovie.id;
            const movieTitle = firstMovie.title;

            movieIdInput.value = movieId;
            resultDisplay.textContent = `Movie found: ${movieTitle} (ID: ${movieId})`;
        } else {
            resultDisplay.textContent = `No results found for '${movieName}'`;
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}