
import React from 'react';

export function UpdateSociete({
  societeData,
  handleInputChange,
  handleUpdateSociete,
  toggleUpdateForm,
}) {
  return (
    <div>
      <h3>Update Societe</h3>
      <form>
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
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={societeData.Description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              handleUpdateSociete();
              toggleUpdateForm();
            }}
          >
            Update Societe
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleUpdateForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateSociete;
