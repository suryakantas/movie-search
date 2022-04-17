import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?apikey=76e470d3';

// const movie1 = {
//   "Title" : "Amezing Spiderman Syndrome",
//   "Year" : "2012",
//   "imdbID" : "tt2586634",
//   "Type" : "movie",
//   "Poster" : "N/A"
// }

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    var i = 0;
    setMovies(data.Search);
    // console.log(data.Search);
    // return false;
  }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt="search" 
        onClick={() => searchMovies(searchTerm)}/>
      </div>
      {
        movies?.length > 0 ?
        (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
