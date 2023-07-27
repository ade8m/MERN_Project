import React, { useState, useEffect } from 'react';
import { showAlert } from '../service/alert';


export function SocieteComponent() {
  const [societeData, setSocieteData] = useState({});
  const [existingNoms, setExistingNoms] = useState([]);
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [fetchedSocietes, setFetchedSocietes] = useState([]);

  useEffect(() => {
    fetchSocietes();
  }, []);

  const fetchSocietes = () => {
    fetch('http://localhost:3001/societe/get')
      .then((response) => response.json())
      .then((data) => {
        console.log('Societes retrieved:', data);
        const nomSocietes = data.map((societe) => societe.nom);
        setExistingNoms(nomSocietes);
        setFetchedSocietes(data); 
        // Set the 'id' value if needed
        if (data.length > 0) {
          setId(data[0]._id); // Assuming you want to set the 'id' with the first societe's _id
        }
      })
      .catch((error) => {
        console.error('Error retrieving societes:', error);
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setSocieteData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleEditSociete = (societe) => {
    setSocieteData(societe);
    setIsEditing(true);
  };

  const handleAddSociete = () => {
    
    const requiredFields = [
      'nomS',
      'adressS',
      'tva',
      'annee',
      'numcontrat',
      'numfacture',
      'description',
    ];

    const isEmpty = requiredFields.some((field) => !societeData[field]);

    if (isEmpty) {
      showAlert('One or more required fields are missing', 'error');
      return;
    }

    fetch('http://localhost:3001/societe/New', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(societeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Societe added:', data);
        showAlert('Societe added successfully!', 'success');
        setSocieteData({});
      })
      .catch((error) => {
        console.error('Error adding societe:', error);
        showAlert('Failed to add societe.', 'error');
      });
  };

  const handleUpdateSociete = () => {
    // Check if any required fields are empty
    const requiredFields = [
      'nomS',
      'adressS',
      'tva',
      'annee',
      'numcontrat',
      'numfacture',
      'description',
    ];

    const isEmpty = requiredFields.some((field) => !societeData[field]);

    if (isEmpty) {
      showAlert('One or more required fields are missing', 'error');
      return;
    }

    fetch(`http://localhost:3001/societe/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(societeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Societe updated:', data);
        showAlert('Societe updated successfully!', 'success');
        setIsEditing(false);
        setSocieteData({});
      })
      .catch((error) => {
        console.error('Error updating societe:', error);
        showAlert('Failed to update societe.', 'error');
      });
  };

  return (
    <div className="containe">
      {/* Alert */}
      <div id="alert" className="alert" style={{ display: 'none' }}></div>
      <h3>societe:</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="nomSociete" className="form-label">
              Nom Societe
            </label>
            <input
              type="text"
              className="form-control"
              id="nomS"
              value={societeData.nom}
              onChange={handleInputChange}
              list="existingNoms"
            />
            <datalist id="existingNoms" style={{ color: '#d4edda' }}>
              {existingNoms.map((nom) => (
                <option key={nom} value={nom} />
              ))}
            </datalist>
          </div>
          <div className="mb-3">
            <label htmlFor="adresse" className="form-label">
              Adresse
            </label>
            <input
              type="text"
              className="form-control"
              id="adressS"
              value={societeData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tva" className="form-label">
              TVA
            </label>
            <input
              type="number"
              className="form-control"
              id="tva"
              value={societeData.TVA}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="annee" className="form-label">
              Année
            </label>
            <input
              type="date"
              className="form-control"
              id="annee"
              value={societeData.Anneé}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="numContrat" className="form-label">
              Numéro Contrat
            </label>
            <input
              type="number"
              className="form-control"
              id="numcontrat"
              value={societeData.Ncontrat}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numFacture" className="form-label">
              Numéro Facture
            </label>
            <input
              type="number"
              className="form-control"
              id="numfacture"
              value={societeData.Nfacture}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">
              Textarea
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={societeData.Description}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        {isEditing ? (
          <button
            type="button"
            className="btn btn-info"
            onClick={handleUpdateSociete}
          >
            Update Societe
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary   custom-button"
            onClick={handleAddSociete}
            style={{ margin: '5px' }}
          >
            Ajouter Nouveau Societe
          </button>
        )}
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom Societe</th>
            <th>Adresse</th>
            <th>TVA</th>
            <th>Année</th>
            <th>Numéro Contrat</th>
            <th>Numéro Facture</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the societe data in the table */}
          {existingNoms.map((nom) => {
             const societe = fetchedSocietes.find((societe) => societe.nom === nom);
             return (
          
            <tr key={nom}>
              <td>{nom}</td>
              <td>{societeData.address}</td>
              <td>{societeData.TVA}</td>
              <td>{societeData.Anneé}</td>
              <td>{societeData.Ncontrat}</td>
              <td>{societeData.Nfacture}</td>
              <td>{societeData.Description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-primary  custom-button"
                  onClick={() => handleEditSociete(societe)}
                >
                  Edit
                </button>
              </td>
            </tr>
             );
          })}
        </tbody>
      </table>
      </div>
  );
}

export default SocieteComponent;
