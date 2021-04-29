import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function PreInscription(props) {
  const [result, setResult] = useState();
  const { errorResult, setErrorResult } = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let options = { method: 'POST', body: data };
    let url = 'services/preinscription.php';

    fetch(url, options)
      .then((response) => {
        setResult(response.status);
        console.log('some result' + response.status);
      })
      .catch((error) => {
        setErrorResult(error.message);
        console.log('some error:' + error.message);
      });
    console.log('DEBUD_ERROR: ' + errorResult);
    console.log('DEBUG_RESULT: ' + result);
  };
  console.log(watch('datenaissance')); //watch input value by passing the name of it

  return (
    <div className="container-fluid clearfix">
      <div className="display-4 text-center">{props.Title}</div>
      <hr className="my-4" />
      <div className="">
        <h4>Pour faire une demande veuiller remplir ce formulaire</h4>
        <br />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group col-sm-3">
            <label>Civilité</label>
            <select
              className="form-control"
              {...register('civilite', { required: true })}
            >
              <option></option>
              <option value="Mr">Mr</option>
              <option value="Mlle">Mlle</option>
              <option value="Mme">Mme</option>
            </select>
            {errors.civilite && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-3">
            <label>Prénom</label>
            <input
              {...register('prenom', { required: true })}
              type="text"
              className="form-control"
              placeholder="Prenom"
            />
            {errors.prenom && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-3">
            <label>Nom</label>
            <input
              {...register('nom', { required: true })}
              type="text"
              className="form-control"
              placeholder="nom"
            />
            {errors.nom && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-3">
            <label>Date Naissance</label>
            <input
              {...register('datenaissance', { required: true })}
              type="date"
              className="form-control"
            />
            {errors.datenaissance && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label>Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="form-control"
              placeholder="monemail@exemple.com"
            />
            {errors.email && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>Téléphone</label>
            <input
              {...register('telephone', { required: true })}
              type="tel"
              className="form-control"
              placeholder="Téléphone"
            />
            {errors.telephone && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label>Formation</label>
            <select
              {...register('formation', { required: true })}
              className="form-control"
            >
              <option></option>
              <option>Formation 1</option>
              <option>Formation 2</option>
              <option>Formation 3</option>
            </select>
            {errors.formation && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>Niveau</label>
            <select
              {...register('niveau', { required: true })}
              className="form-control"
            >
              <option></option>
              <option value="BTS">BTS</option>
              <option value="LICENCE">LICENCE</option>
              <option value="MASTER">MASTER</option>
            </select>
            {errors.niveau && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
        </div>

        <button className="btn btn-primary btn-lg">Envoyer</button>
      </form>
    </div>
  );
}

export default PreInscription;
