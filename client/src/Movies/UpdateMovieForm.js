import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateMovieForm = () => {

  const initialItem = {
    title: '',
    director: '',
    metascore: '',
    
  };
  return (
    <div>
      <h2>Update Movie Info</h2>
      <form> 
        <input 
          type='text'
          name='title'
          placeholder='Movie Title'
        />
        <input 
          type='text'
          name='director'
          placeholder='Movie Director'
        />
        <input 
          type='text'
          name='metascore'
          placeholder='Movie Metascore'
        />
      </form>
    </div>
  )

}
export default UpdateMovieForm