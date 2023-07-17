import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { SideBarC } from '../component/sidebar2.js';
import { SocieteComponent } from '../pages/societe';
import { VoitureComponent } from '../pages/voiture';
import { FactureComponent } from '../pages/facture';

export const HomePage = () => {
  return (
    <div className="full_container">
      <div className="inner_container">
        <SideBarC />
        <div id="content">
          <Switch>
            <Route path="/societe" component={SocieteComponent} />
            <Route path="/voiture" component={VoitureComponent} />
            <Route path="/facrure" component={FactureComponent} />
            {/* Add additional routes for other components */}
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
