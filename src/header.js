import React from "react";

function Header(){
    return(
        // Navigation Bar
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand navbar-light mx-5" href="https://google.com/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="container collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://google.com/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com/">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="https://google.com/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://google.com/">Action</a>
          <a className="dropdown-item" href="https://google.com/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="https://google.com/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com/">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Header;