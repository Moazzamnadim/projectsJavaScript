const searchForm = document.querySelector("Form");
const movieContainer = document.querySelector(".movie_Container");
const inputBox = document.querySelector(".inputBox");


const getMovieInfo = async (movie) => {
    const myApiKey = "b86089c6";
 
    const url = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            movieContainer.innerHTML = `<p>Movie not found! Please try again.</p>`;
        } else {
            showMovieData(data);
        }
    } catch (error) {
        movieContainer.innerHTML = `<p>There was an error fetching movie data. Please try again later.</p>`;
    }
};


const showMovieData = (data) => {
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

    const movieElement = document.createElement('div');
    movieElement.innerHTML = `
        <h2>${Title}</h2>
        <img src="${Poster}" alt="${Title} Poster" />
        <p><strong>Rating:</strong> ${imdbRating}</p>
        <p><strong>Genre:</strong> ${Genre}</p>
        <p><strong>Released:</strong> ${Released}</p>
        <p><strong>Runtime:</strong> ${Runtime}</p>
        <p><strong>Actors:</strong> ${Actors}</p>
        <p><strong>Plot:</strong> ${Plot}</p>
    `;

    
    const movieContainer = document.querySelector(".movie_container");  
    movieContainer.innerHTML = ""; 
    movieContainer.appendChild(movieElement);  
};





searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const movieName = inputBox.value.trim();
    if (movieName !== ''){
        getMovieInfo(movieName)
    }
    
});



