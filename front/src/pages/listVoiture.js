import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSociete } from '../Context/SocieteContext';

export function VoitureListPage() {

    const { societeId } = useSociete();
  const [voitureList, setVoitureList] = useState([]);
  const [availability, setAvailability] = useState("Libre");

  useEffect(() => {
    if (!societeId) {
      return; // Don't fetch voitures if societe ID is not set
    }
    fetch(`http://localhost:3001/voiture/${availability}?societeId=${societeId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('List of voiture:', data);
        setVoitureList(data); 
     
      })
      .catch((error) => {
        console.error('Error fetching voiture list:', error);
      });
  },  [availability, societeId]);

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste de voitures</h2>
      <div className="mb-3">
        <label htmlFor="availability" className="form-label">Sélectionnez la disponibilité:</label>
        <select id="availability" className="form-select" value={availability} onChange={handleAvailabilityChange}>
          <option value="Libre">Libre</option>
          <option value="Louer">Louer</option>
          <option value="En panne">En panne</option>
        </select>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Matricule</th>
            <th>Type</th>
            <th>Model</th>
            <th>couleur</th>
          </tr>
        </thead>
        <tbody>
          {voitureList.map((voiture, index) => (
            <tr key={voiture._id}>
              <td>{index + 1}</td>
              <td>{voiture.matricule}</td>
              <td>{voiture.type}</td>
              <td>{voiture.model}</td>
              <td>{voiture.color}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default VoitureListPage;
