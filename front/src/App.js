import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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

import { NavComponent } from './component/nav';
import { FooterComponent } from './component/footer';
import {HomePage} from './pages/home';

import { SideBarComponent } from './component/sidebar';
import { SideBarC } from './component/sidebar2.js';
import { SocieteComponent } from './pages/societe';
import { VoitureComponent } from './pages/voiture';
import { FactureComponent } from './pages/facture';
import { ContratComponent } from './pages/contrat';
import {AdminPage} from './pages/AdminPag';
import { SignComponent } from './component/signin';

const App = () => {
  

 
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<SignComponent/>}/>
      
      
    </Routes>
    <div className="full_container">
    <div className="inner_container">
      <SideBarC />
      <div id="content">        
        
          <Routes>
          <Route path="/voiture" element={<VoitureComponent/>}/>
          <Route path="/societe" element={<SocieteComponent/>}/>
          <Route path="/facture" element={<FactureComponent/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          {/* Add additional routes for other components */}
        </Routes>
      </div>
    </div>
  </div>
    </BrowserRouter>
  );
};

export default App;
