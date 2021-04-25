import React from 'react';

function Nav(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-success fixed-top">
        <a className="navbar-brand" href="home">
          <img
            src="logo192.png"
            alt="logo"
            class="logo-nav"
            height="32"
            width="32"
          />
          I3T
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="home">
                Accueil <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="filieres">
                Filières
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="preinscription">
                Préinscription
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Recherche"
            />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Recherche
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
