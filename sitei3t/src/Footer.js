import React from 'react';

function Footer(props) {
  return (
    <>
      <div className="text-center">
        <img src="partenaire.png" alt="partemaires" />
      </div>
      <footer className="footer bg-dark ">
        <div className="container-fluid">
          <img alt="logo" src="logo192.png" height="32" width="32" />
          <span className="text-muted">
            {' '}
            Institut des Ingénieurs en Informatique
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
