import React from 'react';
import './CareerCard.css';

const CareerCard = ({career, isSelected, onSelect}) => {
  return (
    <div className={`career-card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
        <img src={career.image} alt={career.title} className='career-image'/>
        <h3>{career.title}</h3>

    </div>
  );
};

export default CareerCard