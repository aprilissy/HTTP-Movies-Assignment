import React, { useState, useEffect, useRef,  } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateMovieForm = () => {
  
  const initialForm = {
    title: '',
    director: '',
    metascore: '',
  };

  const { push } = useHistory();
  const [form, setForm] = useState(initialForm);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        setForm(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    }, []);

  const changeHandler = ev => {
    let value = ev.target.value;
   
    setForm({
      ...form,
      [ev.target.name]: value
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios
      .put(`http://localhost:5000/api/movies/${id}`,form)
      .then(res=>{
        console.log('edit res',res);
        push(`/`)
      })
      .catch(err=>{console.log('edit err',err);
      })
  }

  return (
    <div>
      <h2>Update Movie Info</h2>
      <form onSubmit={handleSubmit}> 
        <input 
          type='text'
          name='title'
          placeholder='Movie Title'
          onChange={changeHandler}
          value={form.title}
          />
        <input 
          type='text'
          name='director'
          placeholder='Movie Director'
          onChange={changeHandler}
          value={form.director}
          />
        <input 
          type='text'
          name='metascore'
          placeholder='Movie Metascore'
          onChange={changeHandler}
          value={form.metascore}
          />
        <button>Update</button>
      </form>
    </div>
  )

}
export default UpdateMovieForm