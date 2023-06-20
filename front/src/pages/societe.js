import React, { useState } from 'react'

export function SocieteComponent() {

  const [societeData, setSocieteData] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setSocieteData((prevData) => ({ ...prevData, [id]: value }));

  };

  const handleAddSociete = ()=>{
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
      })
      .catch((error) => {
        console.error('Error adding societe:', error); 
      });
  };








  return (
  
      <div className="containe">
        <h3> societe:</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="nomSociete" className="form-label">Nom Societe</label>
            <input type="text" className="form-control" id="nomSociete" />
          </div>
          <div className="mb-3">
            <label htmlFor="adresse" className="form-label">Adresse</label>
            <input type="text" className="form-control" id="adresse" />
          </div>
          <div className="mb-3">
            <label htmlFor="tva" className="form-label">TVA</label>
            <input type="number" className="form-control" id="tva" />
          </div>
          <div className="mb-3">
            <label htmlFor="annee" className="form-label">Année</label>
            <input type="text" className="form-control" id="annee" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="numContrat" className="form-label">Numéro Contrat</label>
            <input type="number" className="form-control" id="numContrat" />
          </div>
          <div className="mb-3">
            <label htmlFor="numFacture" className="form-label">Numéro Facture</label>
            <input type="number" className="form-control" id="numFacture" />
          </div>
          <div className="mb-3">
            <label htmlFor="tfNumero" className="form-label">TF Numéro</label>
            <input type="number" className="form-control" id="tfNumero" />
          </div>
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">Textarea</label>
            <textarea className="form-control" id="textarea" rows="3"></textarea>
          </div>
        </div>
        <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddSociete}
            
          >
            Add Societe
          </button>
      </div>
    </div>
  )
}

export default SocieteComponent;
    