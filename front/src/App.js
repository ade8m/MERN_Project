import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/signin.css';
import './style/sidebar.css';
import './style/societe.css';
import './style/alert.css';
import './style/footer.css';

import { NavComponent } from './component/nav';
import { FooterComponent } from './component/footer';
import { Home } from './pages/home';
import { SideBarComponent } from './component/sidebar';
import { SocieteComponent } from './pages/societe';
import { VoitureComponent } from './pages/voiture';
import { FactureComponent } from './pages/facture';
import { ContratComponent } from './pages/contrat';
import { AdminPage } from './pages/AdminPag';
import { SignComponent } from './component/signin';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <NavComponent loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<SignComponent onLogin={handleLogin} />} />
        {loggedIn && (
          <>
            <Route path="/home" element={<Home/>} />
            <Route
              path="/societe"
              element={
                <SideBarComponent>
                  <SocieteComponent />
                </SideBarComponent>
              }
            />
            <Route
              path="/voiture"
              element={
                <SideBarComponent>
                  <VoitureComponent />
                </SideBarComponent>
              }
            />
            <Route
              path="/facture"
              element={
                <SideBarComponent>
                  <FactureComponent />
                </SideBarComponent>
              }
            />
            <Route
              path="/contrat"
              element={
                <SideBarComponent>
                  <ContratComponent />
                </SideBarComponent>
              }
            />
            <Route path="/admin" element={<AdminPage/>} />
          </>
        )}
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
