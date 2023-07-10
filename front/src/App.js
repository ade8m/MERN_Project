import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/signin.css'
import './style/sidebar.css';
import './style/societe.css';
import './style/alert.css';
import './style/footer.css';

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {SignComponent } from "./component/signin";
import {SideBarComponent } from "./component/sidebar";
import {SocieteComponent} from './pages/societe';
import {VoitureComponent} from './pages/voiture';
import {FactureComponent} from './pages/facture';
import {ContratComponent} from './pages/contrat.js';
import {AdminPage} from './pages/AdminPag';
import {Home} from './pages/home';
import {FooterComponent} from './component/footer';
import { NavComponent } from './component/nav';





const App = () => {
  return (

    <BrowserRouter>
    <router><NavComponent/></router>
    <Routes>
      <Route path="/" element={<SignComponent/>} />
      <Route path="/societe" element={<SideBarComponent><SocieteComponent /></SideBarComponent>} />
      <Route path="/voiture" element={<SideBarComponent><VoitureComponent /></SideBarComponent>} />
      <Route path="/facture" element={<SideBarComponent><FactureComponent /></SideBarComponent>} />
      <Route path="/contrat" element={<SideBarComponent><ContratComponent /></SideBarComponent>} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
    <router><FooterComponent/></router>
  </BrowserRouter>

  );
  };

export default App;
