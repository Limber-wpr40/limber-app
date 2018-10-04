import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from './Login/Login';

export default (
    <Switch>
      
      <Route path='/login' component={Login} />
      
    
    </Switch>
  );