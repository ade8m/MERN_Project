import React, { useState } from 'react';
import { showAlert } from '../service/alert';
import { useNavigate } from 'react-router-dom';


export const SignComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/societe');
 // Retrieve the token from localStorage
 /*const token = localStorage.getItem('token');
 
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
          onLogin();
          return data;
        } else {
          showAlert('User not found,verify Email && pwd', 'error');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });*/
     
  }
  

  return (
   <div className="full_container">
         <div className="container">
            <div className="center verticle_center full_height">
               <div className="login_section" style={{ marginTop: '50px' }}>
                  <div className="logo_login">
                     <div className="center">
                        <img width="210" src="images/login.jpeg" alt="#" />
                     </div>
                  </div>
                  <div className="login_form">
                     <form>
                        <fieldset>
                           <div className="field">
                              <label className="label_field">Email Address</label>
                              <input type="email" name="email" placeholder="E-mail" onClick={handleEmailChange}/>
                           </div>
                           <div className="field">
                              <label className="label_field">Password</label>
                              <input type="password" name="password" placeholder="Password" onClick={handlePasswordChange}/>
                           </div>
                           <div className="field">
                              <label className="label_field hidden">hidden label</label>
                              <label className="form-check-label">
                                 <input type="checkbox" className="form-check-input" /> Remember Me
                              </label>
                              <a className="forgot" href="">Forgotten Password?</a>
                           </div>
                           <div className="field margin_0">
                              <label className="label_field hidden">hidden label</label>
                              <button className="main_bt" onClick={handleFormSubmit}>Sign In</button>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default SignComponent;