import React, { useState, useContext } from "react";
import AlertContext from "../../context/alerts/AlertContext";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const { name, email, password, confirmPassword } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Pleas dont be a doofus.", "danger");
    }
    if (password !== confirmPassword) {
      setAlert("Passwords do not match.", "danger");
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'> Register </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength={8}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
            required
            minLength={8}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
