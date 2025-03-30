import React from 'react';
import './CollegeCard.css';

const CollegeCard = ({college}) =>{

  return (
    <div className='college-card'>
        <img src={college.image} alt='' className='college-image'/>
        <div className='college-details'>
            <h3>{college.name}</h3>
            <p><strong>Location:</strong>{college.location}</p>
            <p><strong>Ranking:</strong>{college.ranking}</p>

        </div>

    </div>
  )
}

export default CollegeCard