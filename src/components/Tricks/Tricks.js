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
    <div className='skate-tricks-container'>
      { skateTricks }
    </div>
  )
  
}

export default Tricks;