import React from 'react'

export function SocieteComponent() {
  return (
  
      <div className="containe">
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
      </div>
    </div>
  )
}

export default SocieteComponent;
    