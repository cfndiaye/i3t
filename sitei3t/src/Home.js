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
        <div className="d-inline-flex p-2 bg-primary text-white rounded">
          <strong>Présentation</strong>
        </div>
        <div className="row">
          <div className="col-sm-6 ">
            L'institut des Ingénieurs en Informatique et Télécommunications se
            veut un cadre d'études qui donne à l'étudiant l'envie d'apprendre.
            L'étudiant pourra assimiler les enseignements vite et bien en
            suivant le cours magistral, en faisant ses travaux dirigés et ses
            travaux pratiques. L'étudiant de I³T doit pouvoir travailler sous
            pression. Au fil des semestres, son degré de responsabilité augmente
            de même que son niveau de savoir et de savoir-faire.
          </div>
          <div className="col-sm-6">
            <div className="shadow">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                width="100%"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Responsive image"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#6c757d"></rect>
                <text x="40%" y="50%" fill="#dee2e6" dy=".3em">
                  Responsive image
                </text>
              </svg>
            </div>
            {/* <img className="img-fluid" src="" alt="Telecom" /> */}
          </div>
        </div>
        <hr className="my-4" />
        <div className="d-flex flex-row-reverse">
          <div className="p-2 bg-success text-white rounded">
            <strong>Notre vision</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="shadow">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                width="100%"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Responsive image"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#6c757d"></rect>
                <text x="40%" y="50%" fill="#dee2e6" dy=".3em">
                  Responsive image
                </text>
              </svg>
            </div>
            {/* <img className="img-fluid" src="" alt="Telecom" /> */}
          </div>
          <div className="col-sm-6 ">
            En adéquation avec l’orientation de la politique du gouvernement du
            Sénégal en matière d’enseignement supérieur qui cible
            particulièrement les filières STEM, pour le développement et
            l’émergence, I³T est une offre spécialisée de qualité et de rigueur
            pour former des ressources humaines dans le domaine des nouvelles
            technologies de l’information et des communications, axée sur les
            Sciences, la Technologie, l’Ingénierie et les Mathématiques
            Appliquées.
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <h5>Professionalisme & Rigueur</h5>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>
              Titulaires d’un BAC, en formation initiale, vous pouvez intégrer
              notre cycle <strong>LICENCE (Info - Télécoms)</strong> et devenez:
              <ul>
                <li>Développeur d’applications</li>
                <li>Analyste programmeur</li>
                <li>Administrateur réseaux</li>
              </ul>
            </p>
          </div>
          <div className="col-sm-6">
            Vous pouvez vous spécialiser en{' '}
            <strong>Licence Informatique</strong> (Système d’Information, Bases
            de Données et Développement) ou <strong>Télécoms</strong>
            (Techniques et Réseaux de Télécoms et Hautes Fréquences) pour
            devenir :
            <ul>
              <li>Chef de projets Télécommunications</li>
              <li>Chercheur en Télécommunications</li>
              <li>Administrateur Web</li>
              <li>Manager de groupe</li>
              <li>Administrateur de bases de données</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
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
