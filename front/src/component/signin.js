import React, { useState } from 'react';

export const SignComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
 // Retrieve the token from localStorage
 const token = localStorage.getItem('token');
 
    fetch('http://localhost:3001/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        Email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log(localStorage);
          return data;
        } else {
          throw new Error('Invalid token');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
     
  }
  

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
        </div>
      </form>
    </div>
  );
};
