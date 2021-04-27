import React from 'react';
import { useForm } from 'react-hook-form';

function Contact(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch('subject'));
  return (
    <div>
      <h1>Contact</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="lead">
            Pour nous contacter veuiller remplir ce formulaire
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Objet</label>
              <input
                type="text"
                {...register('subject', { required: true })}
                className="form-control"
              />
              {errors.subject && (
                <span className="text-danger">Ce champ est requis.</span>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
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
            <button className="btn btn-primary">Envoyer</button>
          </form>
        </div>
        <div className="col-sm-6">
          <div className="lead">Contact direct</div>
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
