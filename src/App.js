import "./App.css";
import { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Movies from "./Movies";

function App() {
  // An array that holds the movies, each movie is an object with a title, grade and id
  const [movies, setMovies] = useState([]);

  // Adds a movie to the movies array
  const addMovie = (movie) => {
    setMovies((movies) => [...movies, movie]);
  };

  // Removes the movie with the given id
  const removeMovie = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

  // Sort the movies alphabethically
  const sortWithTitle = () => {
    const copy = movies.slice();
    copy.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });

    setMovies(copy);
  };

  // Sort the movies from best grade to worst
  const sortByGrade = () => {
    const copy = movies.slice();
    copy.sort((a, b) => {
      return b.grade - a.grade;
    });

    setMovies(copy);
  };

  return (
    <div className="App container">
      <h1>Min filmlista</h1>

      <AddMovieForm addMovie={addMovie} />
      <button className="btn btn-primary mt-3" onClick={sortWithTitle}>
        Alfabetisk ordning
      </button>
      <button className="btn btn-primary mt-3" onClick={sortByGrade}>
        Betygsordning
      </button>
      <h2>Inlagda Filmer</h2>
      <hr />
      <Movies movies={movies} removeMovie={removeMovie} />
    </div>
  );
}

export default App;
