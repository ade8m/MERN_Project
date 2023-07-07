import React, { useState } from 'react';
import { login } from '../service/authTokn';

export const SignComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Login user
    const loginUser = {
      email: email,
      password: password,
    };
    console.log('Login user:', loginUser); //

    login(loginUser)
      .then((data) => {
        console.log('Login response:', data);
        if (data.token) {
          alert('Login successful');
        } else {
          setErrorMessage('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        setErrorMessage('Login failed.');
        console.error('Error:', error);
      });
  };

  return (
    <div className="center-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" id="btn">
            Sign In
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};
