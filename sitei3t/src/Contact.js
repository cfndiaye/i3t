import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Contact(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //let classSujet = errors.subject ? 'form-control is-invalid' : 'form-control';

  const [errorResult, setErrorResult] = useState();
  const [successResult, setSuccessResult] = useState();
  const [classPrenom, setClassPrenom] = useState('form-control');
  const [classNom, setClassNom] = useState('form-control');
  const [classSujet, setClassSujet] = useState('form-control');
  const [classEmail, setClassEmail] = useState('form-control');
  const [classMessage, setClassMessage] = useState('form-control');

  //si il ya erreur
  const onError = (err) => {
    if (err.prenom) {
      setClassPrenom('form-control is-invalid');
    } else {
      setClassPrenom('form-control is-valid');
    }
    if (err.nom) {
      setClassNom('form-control is-invalid');
    } else {
      setClassNom('form-control is-valid');
    }
    if (err.sujet) {
      setClassSujet('form-control is-invalid');
    } else {
      setClassSujet('form-control is-valid');
    }
    if (err.email) {
      setClassEmail('form-control is-invalid');
    } else {
      setClassEmail('form-control is-valid');
    }
    if (err.message) {
      setClassMessage('form-control is-invalid');
    } else {
      setClassMessage('form-control is-valid');
    }
  };
  //envoie du formulaire de contact
  const onSubmit = (data) => {
    let donnee = JSON.stringify(data);
    let url = 'services/contact.php';
    let options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: donnee,
    };
    fetch(url, options).then((response) => {
      if (!response.ok) {
        setErrorResult("Erreur quelque chose n'a pas fonctionné!!!");

        return;
      }
      setSuccessResult('Votre message est envoyer avec succès.');
    });
  };

  //on change
  const handleChange = (event) => {
    //let valeur = watch('prenom');
    // if (valeur) {
    //   setClassPrenom('form-control is-valid');
    // }
    console.log(watch('prenom'));
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="display-4">Contact</h1>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <div className="lead">
            Pour nous contacter veuiller remplir ce formulaire
          </div>
          <hr />
          {errorResult && (
            <div className="alert alert-danger">{errorResult}</div>
          )}
          {successResult && (
            <div className="alert alert-success">{successResult}</div>
          )}
          <form className="" onSubmit={handleSubmit(onSubmit, onError)}>
            <fieldset>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label>
                    Prénom<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Prénom"
                    {...register('prenom', {
                      required: true,
                      onChange: handleChange,
                    })}
                    className={classPrenom}
                  />
                  {errors.prenom && (
                    <span className="text-danger">ce champ est requis.</span>
                  )}
                </div>
                <div className="form-group col-sm-6">
                  <label>
                    Nom<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nom"
                    {...register('nom', { required: true })}
                    className={classNom}
                  />
                  {errors.nom && (
                    <span className="text-danger">ce champ est requis.</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Objet<span className="text-danger">*</span>
                </label>
                <input
                  //onChange={handleChange}

                  type="text"
                  //value={formContacts.sujet}
                  placeholder="objet de votre message"
                  {...register('sujet', { required: true })}
                  className={classSujet}
                />

                {errors.sujet && (
                  <span className="text-danger">Ce champ est requis.</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className={classEmail}
                  placeholder="email@exemple.com"
                />
                {errors.email && (
                  <span className="text-danger">Ce champ est requis.</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  className={classMessage}
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="text-danger">Ce champ est requis.</span>
                )}
              </div>
            </fieldset>
            {(successResult && (
              <button disabled className="btn btn-secondary">
                Message Envoyé
              </button>
            )) || <button className="btn btn-success">Envoyer</button>}
          </form>
        </div>
        <div className="col-sm-6">
          <div className="lead">Contact direct</div>
          <hr />
          <ul>
            <li>Tel: +221 33 827 40 88</li>
            <li>Adresse: VDN, 37 Liberte 6 Extension, Dakar</li>
            <li>Horaire: Lundi à Samedi 08H00 - 18H00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
