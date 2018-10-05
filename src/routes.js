import React from "react";
import { Switch, Route } from "react-router-dom";
import Demo from './Demo';
import Phonenumber from './Login/Phonenumber';
import Email from './Login/Email';

import Login from './Login/Login';

export default (
    <Switch>
      <Route path='/demo' component={Demo} />
      <Route exact path='/' component={Login} />
      <Route path='/phone' component={Phonenumber}/>
      <Route path='/email' component={Email} />  
    </Switch>
  );