import React from "react";
import './TrickCard.css'

const TrickCard = (props) => {
  const { stance, name, obstacle, tutorial } = props
  return (
    <div className='card-container'>
      <h2>{ name }</h2>
      <p>{ obstacle }</p>
      <p>{ stance }</p>
      <p>{ tutorial }</p>
    </div>
  ) 
}

export default TrickCard;