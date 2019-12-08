import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <li>
      <Link to='/'> Home page </Link>
      </li>
      <li>
      <Link to='/eventcreate'> Please create new event </Link>
      </li>
     </nav>
  )
}

export default Navigation;
