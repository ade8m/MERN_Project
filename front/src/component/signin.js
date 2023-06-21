import React,{useState} from 'react';
import { login, logout, isAuthenticated } from '../service/authTokn';

export const SignComponent =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)     ;
    };
    const handleFormSubmit = (e) => {
        e.prefentDefault();
    

    // Login user
    const loginUser = {
      email: email,
      password: password,
    };

   login(loginUser)
      .then((data) => {
        
        console.log(data);
        alert('login wuth success');
      })
      .catch((error) => {
        alert('login fail');
        console.error('Error:', error);
      });
  };

return(

    <div className="center-container">
    
         <form className="Auth-form" onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            Sign In
          </h3>
              <div className="form-group mt-3">
                <label >Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control mt-1"
                  placeholder="Enter Your mail please"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control mt-1"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" id="btn">Sign In</button>
              </div>
            </form>
          </div>
          
);

};
export default SignComponent;