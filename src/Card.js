import React from 'react';
import "./Card.css";
const Card = (prop) => {
    console.log(prop.name);
  
  return (
  <>
 
    <div className="card">
    <img src={prop.imag} alt="Avatar" style={{width:"100%"}}/>
    <div className="container">
      <h4>{prop.name}</h4> 
      <p>Architect & Engineer</p> 
    
    </div>
    {prop.children}
  </div>
  </>
  )
}

export default Card