import React, { useState,useEffect }  from 'react';
import { showAlert } from '../service/alert';
import Autocomplete from 'react-autocomplete'; 

export function VoitureComponent() {


const [societeData,setVoitureData]= useState({});
 const [models, setModels] = useState([]);
 const [colors, setColors] = useState([]);
 const [types, setTypes] = useState([]);
 const [customModel, setCustomModel] = useState('');
 const [customType, setCustomType] = useState('');
 const [customColor, setCustomColor] = useState('');
 const [selectedType, setSelectedType] = useState('');
 const [selectedModel, setSelectedModel] = useState('');




useEffect(() => {
    // Retrieve Societe data from local storage
    const storedSocieteData = JSON.parse(localStorage.getItem('societeData'));
    setVoitureData(storedSocieteData);

     // Fetch list of models from your backend
    fetch('http://localhost:3001/model')
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => {
        console.error('Error fetching models:', error);
      });
      // Fetch list of color from your backend
    fetch('http://localhost:3001/color')
    .then((response) => response.json())
    .then((data) => {
      setColors(data);
    })
    .catch((error) => {
      console.error('Error fetching models:', error);
    });
    // Fetch list of models from your backend
    fetch('http://localhost:3001/type')
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);
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
        <label className="form-label">Model</label>
        <div>
          <Autocomplete className="form-control mt-2"
            getItemValue={(item) => item.model}
            items={models}
            renderItem={(item, isHighlighted) => (
              <div className="form-control mt-2"
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
  <label className="form-label">Type</label>
  <select
    className="form-control"
    id="type"
    value={societeData.type}
    onChange={(e) => {
      const selectedType = e.target.value;
      if (selectedType === 'new') {
        setCustomType('');
        handleInputChange(e); // Update type in societeData state
      } else {
        handleInputChange(e); // Update type in societeData state
      }
    }}
  >
    <option value="">Select a type or add a new one</option>
    {types.map((type) => (
      <option key={type._id} value={type.type}>
        {type.type}
      </option>
    ))}
    <option value="new">Add New Type</option>
  </select>
  {societeData.type === 'new' && (
    <input
      type="text"
      className="form-control mt-2"
      placeholder="Enter new type"
      value={customType}
      onChange={(e) => setCustomType(e.target.value)}
    />
  )}
</div>

<div className="mb-3">
  <label className="form-label">Color</label>
  <select
    className="form-control"
    id="couleur"
    value={societeData.couleur}
    onChange={(e) => {
      const selectedColor = e.target.value;
      if (selectedColor === 'new') {
        setCustomColor('');
        handleInputChange(e); // Update color in societeData state
      } else {
        handleInputChange(e); // Update color in societeData state
      }
    }}
  >
    <option value="">Select a color or add a new one</option>
    {colors.map((color) => (
      <option key={color._id} value={color.color}>
        {color.color}
      </option>
    ))}
    <option value="new">Add New Color</option>
  </select>
  {societeData.couleur === 'new' && (
    <input
      type="text"
      className="form-control mt-2"
      placeholder="Enter new color"
      value={customColor}
      onChange={(e) => setCustomColor(e.target.value)}
    />
  )}
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
