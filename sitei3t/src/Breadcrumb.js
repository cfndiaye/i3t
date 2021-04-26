import React from 'react';

function Breadcrumb(props) {
  return (
    <div className="">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Accueil</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.lien}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
