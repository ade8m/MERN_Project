import React, { useState,useEffect }  from 'react';
import { showAlert } from '../service/alert';

export function VoitureComponent() {


const [voitureData,setVoitureData]= useState({});


const handleInputChange = (event) => {
  const { id, value } = event.target;
  setVoitureData((prevData) => ({ ...prevData, [id]: value }));

  

};


  const handleAddVoiture=()=>{

    // Check if any required fields are empty
const requiredFields = [
  'nomvoiture',
  'type',
  'model',
  'couleur',
  'Disponibilite',
  'numASSu',
  'numFacture',
  'tfNumero',
];

const isEmpty = requiredFields.some((field) => !voitureData[field]);

if (isEmpty) {
  showAlert('One or more required fields are missing', 'error');
  return;
}
    fetch('http://localhost:3001/voiture/New', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(voitureData),
    })
    .then((response) => response.json())
      .then((data) => {
        console.log('voiture added:', data);
        showAlert('voiture added successfully!', 'success');
      })
      .catch((error) => {
        console.error('Error adding voiture:', error); 
        showAlert('Failed to add voiture.', 'error');
      });

      
  };

  
  return (
    <div className="containe">
      {/* Alert */}
      <div id="alert" className="alert" style={{ display: 'none' }}></div>
      <h3>voir votre voiture:</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Matricule</label>
            <input type="text" className="form-control" id="nomvoiture"   onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-control" id="type" onChange={handleInputChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <select className="form-control" id="model" onChange={handleInputChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Couleur</label>
            <select className="form-control" id="couleur" onChange={handleInputChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Disponibilite</label>
            <select className="form-control" id="Disponibilite" onChange={handleInputChange}>
              <option value="option1">Libre</option>
              <option value="option2">Louer</option>
              <option value="option3">En panne</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Numéro Assurance</label>
            <input type="number" className="form-control" id="numASSu"   onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="numFacture" className="form-label">Numéro</label>
            <input type="number" className="form-control" id="numFacture"  onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tfNumero" className="form-label">TF Numéro</label>
            <input type="number" className="form-control" id="tfNumero"  onChange={handleInputChange}/>
          </div>
        </div>
        <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddVoiture}
            
          >
            Ajouter Nouveau Voiture 
          </button>
      </div>
    </div>
  );
}

export default VoitureComponent;
