
export const login = (user) => {

 
  
  return fetch('http://localhost:3001/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Login response:', data);
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
    


  
  

  