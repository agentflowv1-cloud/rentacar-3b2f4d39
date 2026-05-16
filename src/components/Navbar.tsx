import React from 'react';

function Navbar() {
  return (
    <nav className="navbar bg-base-100 flex justify-between"> 
      <div className=" px-2 mx-2">Home Page</div>
      <div className="hidden md:flex"> 
        <ul className="menu menu-horizontal p-0"> 
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;