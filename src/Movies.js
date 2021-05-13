import Movie from "./Movie";

// Gets the movies array and the function removeMovie as props,
// iterates the movies to create a moviecomponents for each element
// passes the removeMovie function to Movie components
const Movies = ({ movies, removeMovie }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <Movie movie={movie} key={Math.random()} removeMovie={removeMovie} />
        );
      })}
    </div>
  );
};

export default Movies;
