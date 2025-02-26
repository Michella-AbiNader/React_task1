import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-todo">Add Todo</Link></li>
        </ul>
    </div>
  )
}

export default Navbar