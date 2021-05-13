// Gets a movie and the removeMovie function, uses the movie to create a template for the movie
// and the removeMovie to be called if the user presses the X
const Movie = ({ movie, removeMovie }) => {
  // Creates the correct number of stars based on the grade
  const createStars = () => {
    var stars = [];
    for (var i = 0; i < movie.grade; i++) {
      stars.push(
        <img src="images/star.png" alt="Star" key={Math.random()}></img>
      );
    }
    return stars;
  };

  return (
    <div id="movie">
      <h2 id="title">{movie.title}</h2>

      <div className="images">
        {createStars()}
        <img
          src="images/delete.png"
          alt="Delete movie"
          className="delete-movie"
          onClick={() => removeMovie(movie.id)}
        ></img>
      </div>
    </div>
  );
};

export default Movie;
