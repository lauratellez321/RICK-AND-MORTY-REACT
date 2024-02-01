import React from "react";

function Navbar({ brand }) {
  return (
    <nav className="navbar navbar-dar bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" text href="/">
          {brand}Rick and Morty
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
