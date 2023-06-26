import React, { useState,useEffect } from 'react'
import { showAlert } from '../service/alert';


export function SocieteComponent() {


  const [societeData, setSocieteData] = useState({});
  const [existingNoms, setExistingNoms] = useState([]);
  const [selectedSociete, setSelectedSociete] = useState(null);


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
      })
      .catch((error) => {
        console.error('Error retrieving societes:', error);
      });
  };
  

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setSocieteData((prevData) => ({ ...prevData, [id]: value }));

    if (id === 'nomS') {
      fetchSocietes();
    }

  };

  const fetchSelectedSociete = (nom) => {
    fetch(`http://localhost:3001/societe/get/${nom}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Selected Societe:', data);
        setSelectedSociete(data);
      })
      .catch((error) => {
        console.error('Error retrieving selected societe:', error);
      });
  };

  const handleAddSociete = ()=>{
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
      })
      .catch((error) => {
        console.error('Error adding societe:', error); 
        showAlert('Failed to add societe.', 'error');
      });

      
  };

  const handleUpdateSociete = () => {
    if (!selectedSociete) {
      showAlert('No societe selected', 'error');
      return;
    }

    const { _id } = selectedSociete;

    fetch(`http://localhost:3001/societe/update/${_id}`, {
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
        setSelectedSociete(null);
        setSocieteData({});
      })
      .catch((error) => {
        console.error('Error updating societe:', error);
        showAlert('Failed to update societe.', 'error');
      });
  };

  const handleDeleteSociete = () => {
    if (!selectedSociete) {
      showAlert('No societe selected', 'error');
      return;
    }

    const { _id } = selectedSociete;

    fetch(`http://localhost:3001/societe/delete/${_id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Societe deleted:', data);
        showAlert('Societe deleted successfully!', 'success');
        setSelectedSociete(null);
        setSocieteData({});
      })
      .catch((error) => {
        console.error('Error deleting societe:', error);
        showAlert('Failed to delete societe.', 'error');
      });
  };




  return (
  
    <div className="container">
    {/* Alert */}
    <div id="alert" className="alert" style={{ display: 'none' }}></div>
    <h3>Societe:</h3>
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
      {!selectedSociete ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddSociete}
          style={{ margin: '20px' }}
        >
          Ajouter Nouveau Societe
        </button>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpdateSociete}
            style={{ margin: '20px' }}
          >
            Update Societe
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteSociete}
            style={{ margin: '20px' }}
          >
            Delete Societe
          </button>
        </>
      )}
    </div>
  </div>
);
}

export default SocieteComponent;
    