import React, { useState } from 'react';

function EditMovieForm({ movie, onSave, onCancel }) {
  const [title, setTitle] = useState(movie.title);
  const [posterPath, setPosterPath] = useState(movie.posterPath);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = { ...movie, title, posterPath };
    onSave(updatedMovie);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-movie-form">
      <div className="form-group">
        <label>Change Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-success mr-2">Save</button>
        <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditMovieForm;