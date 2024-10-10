const apiKey = 'd54e99153eee4bbf9375621405204c76';
const apiBaseUrl = 'https://api.themoviedb.org/3';
const posterSize = 'w500';
const mediumSize = 'w780';
const largeSize = 'original';

async function getRandomMovies() {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const url = `${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${randomPage}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.map(movie => ({
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            poster: movie.poster_path ? `https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}` : null,
            medium_image: movie.backdrop_path ? `https://image.tmdb.org/t/p/${mediumSize}${movie.backdrop_path}` : null,
            large_image: movie.backdrop_path ? `https://image.tmdb.org/t/p/${largeSize}${movie.backdrop_path}` : null
        }));
    } catch (error) {
        console.error('Error fetching random movies:', error);
        return null;
    }
}

// Function to search for a specific movie by title
async function searchMovie(query) {
    const url = `${apiBaseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const movie = data.results[0];
            const movieDetails = {
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                poster: movie.poster_path ? `https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}` : null,
                medium_image: movie.backdrop_path ? `https://image.tmdb.org/t/p/${mediumSize}${movie.backdrop_path}` : null,
                large_image: movie.backdrop_path ? `https://image.tmdb.org/t/p/${largeSize}${movie.backdrop_path}` : null
            };
            return movieDetails;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error searching for movie:', error);
        return null;
    }
}

function loadRandomMovies() {
    getRandomMovies().then(movies => {
        const randomMoviesDiv = document.getElementById('random-movies');
        randomMoviesDiv.innerHTML = ''; // Clear previous movies

        if (movies && movies.length > 0) {
            movies.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.className = 'movie';

                movieDiv.innerHTML = `
                            <img src="${movie.poster || 'https://via.placeholder.com/100x150'}" alt="${movie.title}">
                            <div>
                                <h3>${movie.title}</h3>
                                <p><strong>Release Date:</strong> ${movie.release_date}</p>
                                <p>${movie.overview}</p>
                                <p><strong>Medium Image:</strong><br> <img src="${movie.medium_image || 'https://via.placeholder.com/100x150'}" alt="Medium Image" style="width: 200px;"></p>
                                <p><strong>Large Image:</strong><br> <img src="${movie.large_image || 'https://via.placeholder.com/100x150'}" alt="Large Image" style="width: 300px;"></p>
                            </div>
                        `;

                randomMoviesDiv.appendChild(movieDiv);
            });
        } else {
            randomMoviesDiv.innerHTML = '<p>No movies found.</p>';
        }
    });
}

function searchForMovie() {
    const query = document.getElementById('search-query').value;
    searchMovie(query).then(movie => {
        const searchResultsDiv = document.getElementById('search-results');
        searchResultsDiv.innerHTML = ''; // Clear previous search result

        if (movie) {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie';

            movieDiv.innerHTML = `
                        <img src="${movie.poster || 'https://via.placeholder.com/100x150'}" alt="${movie.title}">
                        <div>
                            <h3>${movie.title}</h3>
                            <p><strong>Release Date:</strong> ${movie.release_date}</p>
                            <p>${movie.overview}</p>
                            <p><strong>Medium Image:</strong><br> <img src="${movie.medium_image || 'https://via.placeholder.com/100x150'}" alt="Medium Image" style="width: 200px;"></p>
                            <p><strong>Large Image:</strong><br> <img src="${movie.large_image || 'https://via.placeholder.com/100x150'}" alt="Large Image" style="width: 300px;"></p>
                        </div>
                    `;

            searchResultsDiv.appendChild(movieDiv);
        } else {
            searchResultsDiv.innerHTML = '<p>Movie not found.</p>';
        }
    });
}