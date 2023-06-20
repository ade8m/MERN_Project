import React,{useState} from 'react';

export const SignComponent =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)     ;
    };
    const handleFormSubmit = (e) =>{
        e.prefentDefault();
    

    //login user
    const loginUser = {
      email:setEmail,
      password:setPassword,
    };
    fetch('http://localhost:3001/auth/login/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginUser),
    })
    .then((Response) => Response.json())
    .then((data) => {
      // Handle the response from the backend
      console.log(data);
    })
    .catch((error) => {
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