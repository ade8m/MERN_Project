
    export const login =(user)=>{
      console.log('Request Payload:', user);
        return fetch('http://localhost:3001/auth/login/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Login Response:', data);
              const token = data.token;
              localStorage.setItem('token', token);
              return data;
            })
            .catch((error) => {
              console.error('Error:', error);
              throw error;
            });
        };

  export  const logout=()=>{
        localStorage.removeItem('token');
    } ;
   export  const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token !== null;
      };
    


  
  

  