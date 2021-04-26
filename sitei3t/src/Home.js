import React from 'react';
function Home(props) {
  return (
    <div>
      <h1>Accueil</h1>

      <section className="jumbotron text-center">
        <h1 className="display-4">I3T</h1>
        <p className="lead">
          Institut des Ingénieurs en Informatique et Telecommunication
        </p>
        <hr className="my-4" />
        <p>Le site web est encours de construction</p>
        <p className="lead">
          <a className="btn btn-success btn-lg" href="/Contact">
            Nous contacter
          </a>
        </p>
      </section>
    </div>
  );
}

export default Home;
