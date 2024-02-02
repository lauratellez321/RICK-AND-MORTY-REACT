import React from "react";

function Navbar({ brand }) {
  return (
    <nav className="navbar navbar-dar bg-dark">
      <div className="container justify-content-center">
        <a className="navbar-brand text-uppercase" text href="/">
          {brand}Rick and Morty APP
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
