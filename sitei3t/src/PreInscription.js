import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function PreInscription(props) {
  //const [result, setResult] = useState();
  const [errorResult, setErrorResult] = useState();
  const [messageSuccess, setMessageSuccess] = useState();
  const [desabled, setDesabled] = useState();
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let donnee = JSON.stringify(data);
    let options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: donnee,
      //body: new URLSearchParams(new FormData(donnee)),
    };
    let url = 'services/preinscription.php';

    fetch(url, options)
      .then((response) => {
        //setResult(response.status);
        if (!response.ok) {
          setErrorResult("erreur: quelque chose n'a pas fonctionné!");

          return;
        }
        setMessageSuccess('Email envoyé avec succés. ');
        setDesabled(true);
        //TODO: A enlever console.log('some result: ->' + result);
      })

      .catch((error) => {
        setErrorResult(error);
      });
  };

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
            <label>
              Civilité<span>*</span>
            </label>
            <select
              className="form-control form-control-lg"
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
            <label>
              Prénom<span>*</span>
            </label>
            <input
              {...register('prenom', { required: true })}
              type="text"
              className="form-control form-control-lg required"
              placeholder="Prenom"
            />
            {errors.prenom && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-3">
            <label>
              Nom<span>*</span>
            </label>
            <input
              {...register('nom', { required: true })}
              type="text"
              className="form-control form-control-lg"
              placeholder="nom"
            />
            {errors.nom && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-3">
            <label>
              Date Naissance<span>*</span>
            </label>
            <input
              {...register('datenaissance', { required: true })}
              type="date"
              value="2000-01-14"
              className="form-control form-control-lg"
            />
            {errors.datenaissance && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label>
              Email<span>*</span>
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="form-control form-control-lg"
              placeholder="monemail@exemple.com"
            />
            {errors.email && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>
              Téléphone<span>*</span>
            </label>
            <input
              {...register('telephone', { required: true })}
              type="tel"
              className="form-control form-control-lg"
              placeholder="Téléphone"
            />
            {errors.telephone && (
              <span className="text-danger">Ce champ est requis</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label>
              Formation<span>*</span>
            </label>
            <select
              {...register('formation', { required: true })}
              className="form-control form-control-lg"
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
            <label>
              Niveau<span>*</span>
            </label>
            <select
              {...register('niveau', { required: true })}
              className="form-control form-control-lg"
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
        <div>
          {(desabled && (
            <button disabled className="btn btn-secondary btn-lg ">
              Envoyer
            </button>
          )) || <button className="btn btn-primary btn-lg ">Envoyer</button>}
        </div>
      </form>
      <br />
      <div>
        {(messageSuccess && (
          <div className="alert alert-success text-center">
            {messageSuccess}
          </div>
        )) ||
          (errorResult && (
            <div className="alert alert-danger text-center">{errorResult}</div>
          ))}
      </div>
    </div>
  );
}

export default PreInscription;
