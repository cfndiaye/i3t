import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Contact(props) {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();
  //let classSujet = errors.subject ? 'form-control is-invalid' : 'form-control';
  const [classSujet, setClassSujet] = useState('form-control');
  const [errorResult, setErrorResult] = useState();
  const [successResult, setSuccessResult] = useState();
  const [formContacts, setFormContacts] = useState({
    sujet: '123',
    email: '',
    message: '',
  });

  //handleChange
  const handleChange = (event) => {
    // if (errors.sujet) {
    //   setClassSujet('form-control is-invalid');
    // } else {
    //   setClassSujet('form-control');
    // }
    setFormContacts({ ...formContacts, sujet: event.target.value });
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
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="form-label">Objet</label>
              <input
                onChange={handleChange}
                type="text"
                value={formContacts.sujet}
                placeholder="objet de votre message"
                {...register('sujet', { required: true })}
                className={classSujet}
              />

              {errors.sujet && (
                <span className="text-danger">Ce champ est requis.</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type=""
                {...register('email', { required: true })}
                className="form-control"
                placeholder="email@exemple.com"
              />
              {errors.email && (
                <span className="text-danger">Ce champ est requis.</span>
              )}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                {...register('message', { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-danger">Ce champ est requis.</span>
              )}
            </div>
            {(successResult && (
              <button disabled className="btn btn-secondary">
                Message Envoyé
              </button>
            )) || <button className="btn btn-primary">Envoyer</button>}
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
