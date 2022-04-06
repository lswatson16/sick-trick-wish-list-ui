import React from 'react';
import './Tricks.css';
import TrickCard from '../TrickCard/TrickCard';

const Tricks = (props) => {
  // console.log(props)
  const skateTricks = props.tricks.map(trick => {
    // console.log(trick)
    return (
      <TrickCard 
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    ) 


  })
  
  return(
    <section>
      <h1>Tricks</h1>
      <div className='skate-tricks-container'>
        { skateTricks }
      </div>

    </section>
  )
  
}

export default Tricks;