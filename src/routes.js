import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from './Login/Login';
import Landing from './Landing/Landing';

export default (
    <Switch>
      
      <Route path='/login' component={Login} />
      <Route path='/landing' component={Landing} />

      
    
    </Switch>
  );