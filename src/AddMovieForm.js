import { useState } from "react";

const AddMovieForm = ({ addMovie }) => {
  // States, id is incrementing for each movie that is added and is used to delete correct movie
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [id, setId] = useState(0);

  const handleAddMovie = (e) => {
    e.preventDefault();

    if (title.length === 0 || grade === 0) {
      alert("Var snäll och fyll i både fält för title och betyg");
      return;
    }

    // Increment the id
    setId(id + 1);
    addMovie({ title, grade, id });

    // Restore title and grade fields
    setTitle("");
    setGrade("0");
  };

  return (
    <div className="add-movie-form">
      <form id="add-movie" onSubmit={(e) => handleAddMovie(e)}>
        <fieldset>
          <input
            placeholder="Ange en titel..."
            autoComplete="off"
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            type="text"
            id="rating"
            className="form-control"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button className="btn btn-success mt-3">Spara film</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddMovieForm;
