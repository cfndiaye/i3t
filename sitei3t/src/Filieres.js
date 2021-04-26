import React from 'react';
import Breadcrumb from './Breadcrumb';
import { useLocation } from 'react-router-dom';

function Filieres(props) {
  let location = useLocation();
  return (
    <div>
      <Breadcrumb lien={location.pathname.substring(1)} />
      <h1>Filieres</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card bg-primary text-white mb-3">
              <div className="card-header">Génie logiciel</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/Filieres" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-warning text-white mb-3">
              <div className="card-header">Réseaux</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/Filieres" className="btn btn-warning">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-secondary text-white mb-3">
              <div className="card-header">Réseaux</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/Filieres" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-success text-white mb-3">
              <div className="card-header">Réseaux</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/Filieres" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filieres;
