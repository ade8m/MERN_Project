import React, { useState, useEffect } from 'react';
import { showAlert } from '../service/alert';
import { useParams } from 'react-router-dom';



export function SocieteComponent() {
  const [societeData, setSocieteData] = useState({});
  const { id: routeId } = useParams();
 


  useEffect(() => {
    // Retrieve Societe data from local storage
    const storedSocieteData = JSON.parse(localStorage.getItem('societeData'));
    setSocieteData(storedSocieteData);
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setSocieteData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleAddSociete = () => {
    const requiredFields = ['TVA', 'Anneé', 'Ncontrat', 'Nfacture', 'Description'];
    const isEmpty = requiredFields.some((field) => !societeData[field]);
  
    if (isEmpty) {
      showAlert('One or more required fields are missing', 'error');
      return;
    }
  
    
    const newData = {
      Ncontrat: societeData.Ncontrat,
      Nfacture: societeData.Nfacture,
      TVA: societeData.TVA,
      Description: societeData.Description,
      Anneé: societeData.Anneé,
    };
    console.log(newData);
     // Check if societeData contains all the required properties
  const missingFields = requiredFields.filter((field) => !societeData[field]);

  if (missingFields.length > 0) {
    showAlert('One or more required fields are missing in societeData.', 'error');
    return;
  }
  
  
    const storedId = societeData._id;
  
    if (!storedId) {
      showAlert('Societe ID not found in local storage.', 'error');
      return;
    }
  
    fetch(`http://localhost:3001/societe/${storedId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData), 
     })
     
      .then((response) => response.json())
      .then((data) => {
        console.log('Societe added:', data);
        console.log(storedId);
        showAlert('Societe added successfully!', 'success');
        setSocieteData({});
      })
      .catch((error) => {
        console.error('Error adding societe:', error);
        showAlert('Failed to add societe.', 'error');
      });
  };
  const handleUpdateSociete = () => {
    // Prepare the updated data based on the current state
    const updatedData = {
      nom: societeData.nom,
      adress: societeData.adress,
      Ncontrat: societeData.Ncontrat,
      Nfacture: societeData.Nfacture,
      tva: societeData.TVA,
      Description: societeData.Description,
      Anneé: societeData.Anneé,
    };
    const storedId = societeData._id;
    // Send a request to update the societe object
    fetch(`http://localhost:3001/societe/${storedId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Societe updated:', data);
        showAlert('Societe updated successfully!', 'success');
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
              
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="adresse" className="form-label">
              Adresse
            </label>
            <input
              type="text"
              className="form-control"
              id="adressS"
              value={societeData.adress}
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
              id="TVA"
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
              id="Anneé"
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
              id="Ncontrat"
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
              id="Nfacture"
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
              id="Description"
              rows="3"
              value={societeData.Description}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        
          <button
            type="button"
            className="btn btn-primary   custom-button"
            onClick={handleAddSociete}
            style={{ margin: '5px' }}
          >
            Ajouter Nouveau Societe
          </button>
          <button
  type="button"
  className="btn btn-primary custom-button"
  onClick={handleUpdateSociete}
  style={{ margin: '5px' }}
>
  Update Societe
</button>
       
      </div>  
      </div>
  );
}

export default SocieteComponent;
