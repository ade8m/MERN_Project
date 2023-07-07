export function login(user) {

  return fetch('http://localhost:3001/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
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

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};
