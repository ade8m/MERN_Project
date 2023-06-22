import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/signin.css'
import './style/sidebar.css';
import './style/societe.css';

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { SignComponent } from "./component/signin";
import { SideBarComponent } from "./component/sidebar";
import {SocieteComponent} from './pages/societe';
import {VoitureComponent} from './pages/voiture';
import {FactureComponent} from './pages/facture';
import {ContratComponent} from './pages/contrat.js';
import {AdminPage} from './pages/AdminPag';



const App = () => {
  return (

    <BrowserRouter>
      <SideBarComponent>
        <Routes> 
          <Route path="/" element={<AdminPage/>} />
          <Route path="/societe" element={<SocieteComponent />} />
          <Route path="/voiture" element={<VoitureComponent />} />
          <Route path="/facture" element={<FactureComponent />} />
          <Route path="/contrat" element={<ContratComponent />} />
        </Routes>
      </SideBarComponent>
   </BrowserRouter>
  );
  };

export default App;
