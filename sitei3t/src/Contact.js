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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Objet</label>
              <input
                type="text"
                {...register('subject', { required: true })}
                className="form-control"
              />
              {errors.subject && <span className="text-danger"></span>}
            </div>
          </form>
        </div>
        <div className="col-sm-6">
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
