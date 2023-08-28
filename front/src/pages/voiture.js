import React, { useState,useEffect }  from 'react';
import { showAlert } from '../service/alert';
import Autocomplete from 'react-autocomplete'; 

export function VoitureComponent() {


const [societeData,setVoitureData]= useState({});
 const [Types, setTypes] = useState([]);
 const [colors, setColors] = useState([]);

 const [customModel, setCustomModel] = useState('');
 const [customType, setCustomType] = useState('');
 const [customColor, setCustomColor] = useState('');
 const [selectedType, setSelectedType] = useState('');
 const [selectedModel, setSelectedModel] = useState('');
 const [selectedColor, setSelectedColor] = useState('');
  const [item, setItem] = useState([]);
  




useEffect(() => {
    // Retrieve Societe data from local storage
    const storedSocieteData = JSON.parse(localStorage.getItem('societeData'));
    setVoitureData(storedSocieteData);

     
      // Fetch list of color from your backend
    fetch('http://localhost:3001/color')
    .then((response) => response.json())
    .then((data) => {
      setColors(data);
    })
    .catch((error) => {
      console.error('Error fetching colors:', error);
    });
    // Fetch list of models from your backend
    fetch('http://localhost:3001/type')
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);
        console.log(setTypes);
      })
      .catch((error) => {
        console.error('Error fetching models:', error);
      });
     
        // Fetch list of models from your backend
        fetch('http://localhost:3001/model')
          .then((response) => response.json())
          .then((data) => {
            setItem(data); // Update the list of models
            
          })
          .catch((error) => {
            console.error('Error fetching models:', error);
          });
      
  }, []);
 
  
const handleInputChange = (event) => {
  const { id, value } = event.target;
  setVoitureData((prevData) => ({ ...prevData, [id]: value }));

};
const handleModelChange = (newValue) => {
  setSelectedModel(newValue);
  setCustomModel(''); // Clear custom model if selected from suggestions
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

//if (isEmpty) {
  //showAlert('One or more required fields are missing', 'error');
  //return;
//}


const storedId = societeData._id;

  if (!storedId) {
    showAlert('Societe ID not found in local storage.', 'error');
    return;
  }
   
  const newData = {
    ...societeData,
    societeId: storedId,
     model: selectedModel || customModel,
    
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

  
  return  (
    <div className="container">
      {/* Alert */}
      <div id="alert" className="alert" style={{ display: 'none' }}></div>
      <h3>voir votre voiture:</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Matricule</label>
            <input type="text" className="form-control" id="matricl" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <div>
              <Autocomplete
                getItemValue={(item) => item.model}
                items={item}
                renderItem={(item, isHighlighted) => (
                  <div
                    key={item._id}
                    style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                  >
                    {item.model}
                  </div>
                )}
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                onSelect={(value) => {
                  setSelectedModel(value);
                  setCustomModel(''); // Clear custom model if selected from suggestions
                }}
                inputProps={{
                  placeholder: 'Select a model or add a new one',
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">type</label>
            <div>
              <Autocomplete
                getItemValue={(Types) => Types.Type}
                items={Types}
                renderItem={(item, isHighlighted) => (
                  <div
                    key={item._id}
                    style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                  >
                    {item.Type}
                  </div>
                )}
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                onSelect={(value) => {
                  setSelectedType(value);
                  setCustomType(''); // Clear custom Type if selected from suggestions
                }}
                inputProps={{
                  placeholder: 'Select a Type or add a new one',
                }}
              />
            </div>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Color</label>
            <div>
              <Autocomplete
                getItemValue={(item) => item.couleur}
                items={colors}
                renderItem={(item, isHighlighted) => (
                  <div
                    key={item._id}
                    style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                  >
                    {item.couleur}
                  </div>
                )}
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                onSelect={(value) => {
                  setSelectedColor(value);
                  setCustomColor(''); // Clear custom Type if selected from suggestions
                }}
                inputProps={{
                  placeholder: 'Select a Color or add a new one',
                }}
              />
            </div>
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
            <input type="number" className="form-control" id="assu" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="numFacture" className="form-label">Numéro Vignette</label>
            <input type="number" className="form-control" id="vigni" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tfNumero" className="form-label">Numéro Laisse Passer</label>
            <input type="number" className="form-control" id="laispasse" onChange={handleInputChange} />
          </div>
        </div>
      </div>
  
      <button
        type="button"
        className="btn btn-primary custom-button"
        onClick={handleAddVoiture}
      >
        Ajouter Nouveau Voiture
      </button>
    </div>
  );
  
}

export default VoitureComponent;
