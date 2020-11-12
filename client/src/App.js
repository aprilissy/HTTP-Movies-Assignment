import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from './Movies/UpdateMovieForm'
import AddMovie from './Movies/AddMovie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const { push } = useHistory();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />

      <button className='add-button button' onClick={() => {push(`/add-movie`)}} >Add A Movie</button>
      <Route exact path="/">
        <MovieList />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
      <Route path="/update-movie/:id" >
        <UpdateMovieForm />
      </Route>  
      <Route path="/add-movie" >
        <AddMovie />
      </Route>  
    </>
  );
};

export default App;
