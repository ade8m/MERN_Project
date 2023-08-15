import React, { useState,useEffect }  from 'react';
import { showAlert } from '../service/alert';

export function VoitureComponent() {


const [societeData,setVoitureData]= useState({});
const [voitureList, setVoitureList] = useState([]);
const [selectedAvailability, setSelectedAvailability] = useState("Libre");


useEffect(() => {
    // Retrieve Societe data from local storage
    const storedSocieteData = JSON.parse(localStorage.getItem('societeData'));
    setVoitureData(storedSocieteData);
  }, []);
  const handleAvailabilityChange = (event) => {
    setSelectedAvailability(event.target.value);
  };
  
const handleInputChange = (event) => {
  const { id, value } = event.target;
  setVoitureData((prevData) => ({ ...prevData, [id]: value }));

};
const handleGetList = () => {
  let availabilityRoute;
    switch (selectedAvailability) {
      case "Libre":
        availabilityRoute = "libre";
        break;
      case "En panne":
        availabilityRoute = "panne";
        break;
      case "Louer":
        availabilityRoute = "louer";
        break;
      default:
        availabilityRoute = "libre"; // Default to "Libre"
    }
  fetch(`http://localhost:3001/voiture/get/${selectedAvailability}`)
    .then((response) => response.json())
    .then((data) => {
     console.log('List of voiture:', data);
        setVoitureList(data);
    })
    .catch((error) => {
      console.error('Error fetching voiture list:', error);
    });
};


  const handleAddVoiture=()=>{

  
    // Check if any required fields are empty
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
            <select className="form-control" id="type" onChange={handleInputChange}>
              <option value="BMW"> BMW</option>
              <option value="Marcedes"> Marcedes</option>
              <option value="Wolswagen">Wolswagen</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <select className="form-control" id="model" onChange={handleInputChange}>
              <option value="Golv 7">Golv 7</option>
              <option value="C180">C180</option>
              <option value="x1">x1</option>
            </select>
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
          <button
            type="button"
            className="btn btn-secondary custom-button"
            onClick={handleGetList}
>
  Get List of Voitures
</button>
     {voitureList.map((voiture) => (
        <div key={voiture._id}>
          <table>
            <tbody>
              <tr>
                <td>{voiture.matricl}</td>
                <td>{voiture.type}</td>
                <td>{voiture.model}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </div>
  );
}
export default VoitureComponent;
