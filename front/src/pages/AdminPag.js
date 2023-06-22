import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

export function AdminPage() {


  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({ Nom: '', Email: '' });
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/get');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/api/delete/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = (userId) => {
    setEditingUserId(userId);
    const userToUpdate = users.find((user) => user._id === userId);
    setUpdatedUser({ Nom: userToUpdate.Nom, Email: userToUpdate.Email });
  };

  const saveUpdatedUser = async (userId) => {
    try {
      await axios.put(`http://localhost:3001/api/update/${userId}`, updatedUser);
      setEditingUserId(null);
      setUpdatedUser({ Nom: '', Email: '' });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <React.Fragment key={user._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{user.Nom}</td>
                <td>{user.Email}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteUser(user._id)}>
                    Delete
                  </Button>
                  <Button variant="info" onClick={() => updateUser(user._id)}>
                    Update
                  </Button>
                </td>
              </tr>
              {user._id === editingUserId && (
                <tr>
                  <td colSpan="4">
                    <input
                      type="text"
                      placeholder='Entre nouveau nom' 
                      value={updatedUser.Nom}
                      onChange={(e) => setUpdatedUser({ ...updatedUser, Nom: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder='Entre nouveau Email'
                      value={updatedUser.Email}
                      onChange={(e) => setUpdatedUser({ ...updatedUser, Email: e.target.value })}
                    />
                    <Button variant="primary" onClick={() => saveUpdatedUser(user._id)}>
                      Save
                    </Button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminPage;
