import React from "react";
import { Switch, Route } from "react-router-dom";
import Demo from './Demo';
import Phonenumber from './Login/Phonenumber';
import Verify from './Login/Verify';

import Login from './Login/Login';

export default (
    <Switch>
      <Route path='/demo' component={Demo} />
      <Route exact path='/' component={Login} />
      <Route path='/phone' component={Phonenumber}/>
      <Route path='/verify' component={Verify} />  
    </Switch>
  );