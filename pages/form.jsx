import React from 'react'
import { useState, useEffect } from "react";

function Form() {
  const initialValues = { name: "", address: "", city: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name= "Name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    } 
    if (!values.city) {
      errors.city = "city is required";
    } 
    return errors;
  };
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address}</p>
          <div className="field">
            <label>ciity</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.city}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form