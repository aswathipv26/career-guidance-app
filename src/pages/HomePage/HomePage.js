import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home'>
        <header className='header'>
            <h1>Find your Dream College</h1>
            <p>Explore top universities and courses tailored for you. </p>
            <Link to='/career' className='start-btn'>Get Started</Link>
        </header>
    </div>
  );
};

export default HomePage;
