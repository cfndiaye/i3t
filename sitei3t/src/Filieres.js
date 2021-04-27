import React from 'react';
import Breadcrumb from './Breadcrumb';
//import { useLocation } from 'react-router-dom';

function Filieres(props) {
  //let location = useLocation();
  return (
    <div>
      <div className="text-center">
        <h1 className="display-4">Filieres</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card bg-primary text-white mb-3">
              <div className="card-header">DTS INFORMATIQUE/RESEAUX</div>
              <div className="card-body">
                <h5 className="card-title">
                  Technicien supérieur en informatique et télécom
                </h5>
                <p className="card-text">
                  Vous avez un baccalauréat en S1, S2, S3 ou F
                </p>
                <a href="/Filieres" className="btn btn-warning text-white">
                  Plus d'info
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-warning text-white mb-3">
              <div className="card-header">LICENCE INFORMATIQUE</div>
              <div className="card-body">
                <h5 className="card-title">
                  Licence en informatique de gestion
                </h5>
                <p className="card-text">Admission: DTS IT ou équivalent</p>
                <a href="/Filieres" className="btn btn-info">
                  Plus d'info
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-secondary text-white mb-3">
              <div className="card-header">MASTER 1 TELECOM</div>
              <div className="card-body">
                <h5 className="card-title">
                  Ingénieur de conception en Télécom 4em année
                </h5>
                <p className="card-text">
                  Condition d'admission: Licence IT ou équivalent
                </p>
                <a href="/Filieres" className="btn btn-primary">
                  Plus d'info
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-success text-white mb-3">
              <div className="card-header">MASTER 2 TELECOM</div>
              <div className="card-body">
                <h5 className="card-title">
                  Ingénieur de conception en Télécom 5em année
                </h5>
                <p className="card-text">
                  Condition d'admission: Master 1 IT ou équivalent
                </p>
                <a href="/Filieres" className="btn btn-danger">
                  Plus d'info
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
