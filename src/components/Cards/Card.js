import React from 'react';
import './Card.css';


export const Card = (props) => {

    return (
        
        <div className="card">  
            <h3>{props.title}</h3>
            <div>{props.price}</div>
            <div>{props.description}</div>
        </div>
    )
  };