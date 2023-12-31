import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { SocieteProvider } from './Context/SocieteContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/signin.css';
import './style/sidebar.css';
import './style/sidbar2.css';
import './style/societe.css';
import './style/alert.css';
import './style/footer.css';
import './style/nav.css';

import { SideBarC } from './component/sidebar2.js';
import { SocieteComponent } from './pages/societe';
import { VoitureComponent } from './pages/voiture';
import { FactureComponent } from './pages/facture';
import { ContratComponent } from './pages/contrat';
import {VoitureListPage} from'./pages/listVoiture';
import {AdminPage} from './pages/AdminPag';
import { SignComponent } from './component/signin';
import {UpdateSociete} from './pages/updateSociete';

const App = () => {
  

 
  return (

      
    <BrowserRouter>
<SocieteProvider>
    <Routes>
      <Route path="/" element={<SignComponent/>}/>
      <Route path="/societe/update" element={<UpdateSociete/>}/>
      
    </Routes>
    <div className="full_container">
    <div className="inner_container">
      <SideBarC />
      <div id="content">        
        
          <Routes>
          <Route path="/voiture" element={<VoitureComponent/>}/>
          <Route path="/:societeName/facture" element={<FactureComponent/>}/>
          <Route path="/:societeName" element={<SocieteComponent/>}/>
          <Route path="/voiture-list" element={<VoitureListPage/>} /> 
          
          <Route path="/admin" element={<AdminPage/>}/>
         
          
        </Routes>
      </div>
    </div>
  </div>
  </SocieteProvider>
    </BrowserRouter>
  );
};

export default App;
