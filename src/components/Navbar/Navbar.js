import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className='navbar'>
    <div className='logo'>
        <Link to='/'>Career Guidance</Link>
    </div>
    <ul className='nav-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/career'>Careers</Link></li>
        <li><Link to='/college'>Colleges</Link></li>
        <li><Link to='/eligibility'>Eligibility</Link></li>
        <li><Link to='/aptitude'>Aptitude Test</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </ul>
  </nav>
  );
};

export default Navbar;