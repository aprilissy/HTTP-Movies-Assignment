import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddMovie = () => {
  const { push } = useHistory();

  const titleRef = useRef()
  const directorRef = useRef()
  const metascoreRef = useRef()
  const starsRef = useRef()

  const onSubmit = e =>{
    e.preventDefault()
    addNewMovie({
      title:titleRef.current.value,
      director:directorRef.current.value,
      metascore:parseInt(metascoreRef.current.value,10),
      stars:starsRef.current.value.split(',').map((elem)=>{return elem.trim()})
    })
  }

  const addNewMovie = (body) => {
    axios
      .post(`http://localhost:5000/api/movies`,body)
      .then(res => {
        console.log('addResponse', res);
        push(`/`)
      })
      .catch(err => {console.log('addError',err);
      })
  }

return(
  <div>
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='title'
        placeholder='Movie Title'
        ref={titleRef}
      />
      <input 
        type='text'
        name='director'
        placeholder='Movie Director'
        ref={directorRef}
      />
      <input 
        type='number'
        name='metascore'
        placeholder='Movie Metascore'
        ref={metascoreRef}
      />
      <input 
        type='text'
        name='stars'
        placeholder='Stars: Paco Bean, Mark Twain, Lady Bug'
        ref={starsRef}
      />
      <button>Add</button>
    </form>
  </div>
)
}

export default AddMovie