import React from 'react';
import { Link } from 'react-router-dom';

//import BackButton from './BackButton';

const NavBar = props => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to="/user/:id">Itineraries</Link>
    </div>
  )
}

export default NavBar;
