import React, { useRef } from 'react'

const AddMovie = () => {

  const titleRef = useRef()
  const directorRef = useRef()
  const metascoreRef = useRef()
  const starsRef = useRef()

return(
  <div>
    <form>
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
        type='text'
        name='metascore'
        placeholder='Movie Metascore'
        ref={metascoreRef}
      />
      <input 
        type='text'
        name='stars'
        placeholder='Movie Stars eg. Paco Bean, Mark Twain, Lady Bug'
        ref={starsRef}
      />
    </form>
  </div>
)
}

export default AddMovie