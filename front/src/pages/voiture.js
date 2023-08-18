import React, { useState,useEffect }  from 'react';
import { showAlert } from '../service/alert';

export function VoitureComponent() {


const [societeData,setVoitureData]= useState({});




useEffect(() => {
    // Retrieve Societe data from local storage
    const storedSocieteData = JSON.parse(localStorage.getItem('societeData'));
    setVoitureData(storedSocieteData);
  }, []);
 
  
const handleInputChange = (event) => {
  const { id, value } = event.target;
  setVoitureData((prevData) => ({ ...prevData, [id]: value }));

};



  const handleAddVoiture=()=>{

  
   
const requiredFields = [
  'matricl',
  'type',
  'model',
  'couleur',
  'dispo',
  'assu',
  'vigni',
  'laispasse',
];

const isEmpty = requiredFields.some((field) => !societeData[field]);

if (isEmpty) {
  showAlert('One or more required fields are missing', 'error');
  return;
}


const storedId = societeData._id;

  if (!storedId) {
    showAlert('Societe ID not found in local storage.', 'error');
    return;
  }
  const newData = {
    ...societeData,
    societeId: storedId,
  };
    fetch('http://localhost:3001/voiture/New', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
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
            <input type="text" className="form-control" id="matricl"   onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <input type="text" className="form-control" id="type" onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <input type="text"  className="form-control" id="model" onChange={handleInputChange}/>
              
          </div>
          <div className="mb-3">
            <label className="form-label">Couleur</label>
            <select className="form-control" id="couleur" onChange={handleInputChange}>
              <option value="bleu">bleu</option>
              <option value="noir">noir</option>
              <option value="blanc">blanc</option>
              <option value="rouge">rouge</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Disponibilite</label>
            <select className="form-control" id="dispo" onChange={handleInputChange}>
              <option value="Libre">Libre</option>
              <option value="Louer">Louer</option>
              <option value="En panne">En panne</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Numéro Assurance</label>
            <input type="number" className="form-control" id="assu"   onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="numFacture" className="form-label">Numéro Vignette</label>
            <input type="number" className="form-control" id="vigni"  onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tfNumero" className="form-label">Numéro Laisse Passer</label>
            <input type="number" className="form-control" id="laispasse"  onChange={handleInputChange}/>
          </div>
        </div>
        <button
            type="button"
            className="btn btn-primary  custom-button"
            onClick={handleAddVoiture}
            
          >
            Ajouter Nouveau Voiture 
          </button>
        
     
      
    </div>
    </div>
  );
}
export default VoitureComponent;
