import "./../../css/Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';
var Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/use-effect'>Use Effect</Link></li>
          <li><Link to='/use-ref'>UseRef</Link></li>
          <li><Link to='/use-context'>UseContext</Link></li>
          <li><Link to='/use-memo'>UseMemo</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;