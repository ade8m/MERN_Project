import React from 'react';

export function VoitureComponent() {
  return (
    <div className="containe">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Matricule</label>
            <input type="text" className="form-control" id="nomSociete" />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-control" id="type">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <select className="form-control" id="model">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Couleur</label>
            <select className="form-control" id="couleur">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Disponibilite</label>
            <select className="form-control" id="couleur">
              <option value="option1">Libre</option>
              <option value="option2">Louer</option>
              <option value="option3">En panne</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Numéro Assurance</label>
            <input type="number" className="form-control" id="numContrat" />
          </div>
          <div className="mb-3">
            <label htmlFor="numFacture" className="form-label">Numéro</label>
            <input type="number" className="form-control" id="numFacture" />
          </div>
          <div className="mb-3">
            <label htmlFor="tfNumero" className="form-label">TF Numéro</label>
            <input type="number" className="form-control" id="tfNumero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoitureComponent;
