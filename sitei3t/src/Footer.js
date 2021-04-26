import React from 'react';

function Footer(props) {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div className="container-fluid">
        <img alt="logo" src="logo192.png" height="32" width="32" /> I3T
        <span className="text-muted">
          {' '}
          Institut des Ingénieurs en Informatique
        </span>
      </div>
    </footer>
  );
}

export default Footer;
