import React from 'react';
function Home(props) {
  return (
    <div>
      <section className="jumbotron bg-white">
        <div className="text-center">
          <h1 className="display-4">I3T</h1>
          <p className="lead">
            Institut des Ingénieurs en Informatique et Telecommunication
          </p>
        </div>
        <hr className="my-4" />
        <p>Le site web est encours de construction</p>
        <div className="lead">
          <ul>
            <li>Tel: +221 33 827 40 88</li>
            <li>Adresse: VDN, 37 Liberte 6 Extension, Dakar</li>
            <li>Horaire: Lundi à Samedi 08H00 - 18H00</li>
          </ul>
          <a className="btn btn-success btn-lg" href="/Contact">
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
