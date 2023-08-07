import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { showAlert } from '../service/alert';
import { Table, Button,Form, Container, Row, Col } from 'react-bootstrap';

export function AdminPage() {


  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({ Nom: '', Email: '' });
  const [editingUserId, setEditingUserId] = useState(null);
  const [newUser, setNewUser]= useState({ Nom: '', Email: '', password: '' });

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

  const registerUser = async (e) => {
    e.preventDefault();
    if  (!newUser.name || !newUser.address || !newUser.adminUsername || !newUser.adminPassword) {
      showAlert('One or more required fields are missing', 'error');
      return;
    };
    try {
      await axios.post('http://localhost:3001/auth/login', newUser);
      setNewUser({ name: '', address: '', adminUsername: '', adminPassword: '' });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container fluid>
       
    <h1 className="text-center mt-3">Admin Page</h1>
    <Row className="justify-content-center">
      <Col lg={6} md={6}>
      <h3 className="text-center mt-3">Creé Nouveau Societe</h3>
         {/* Alert */}
         <div id="alert" className="alert" style={{ display: 'none' }}></div>
      
         <Form onSubmit={registerUser}>
      <Form.Group controlId="formName">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Nom"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          value={newUser.address}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formAdminUsername">
        <Form.Label>Admin Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Admin Username"
          value={newUser.adminUsername}
          onChange={(e) => setNewUser({ ...newUser, adminUsername: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formAdminPassword">
        <Form.Label>Admin Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Admin Password"
          value={newUser.adminPassword}
          onChange={(e) => setNewUser({ ...newUser, adminPassword: e.target.value })}
        />
      </Form.Group>

          <div className="d-flex justify-content-first">
            <Button variant="primary" type="submit">
              Creé
            </Button>
          </div>
        </Form>
      </Col>
      <Col lg={6} md={6}>
        <h3 className="text-center mt-3">Configuration des comptes des Societés:</h3>
        <div className="d-flex justify-content-center">
          <Button variant="success" className="mb-3" onClick={fetchUsers}>
            Afficher tous les societés:
          </Button>
        </div>

        <Table striped bordered hover responsive>
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
                    <Button variant="danger"  style={{margin:'5px'}} onClick={() => deleteUser(user._id)}>
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
                        className="form-control mb-2"
                        placeholder="Enter new Nom"
                        value={updatedUser.Nom}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, Nom: e.target.value })}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter new Email"
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

        </Col>
    </Row>
  </Container>
);
}

export default AdminPage;
