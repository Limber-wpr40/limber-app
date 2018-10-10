import React from "react";
import { Switch, Route } from "react-router-dom";
import Demo from './Demo';
import Phonenumber from './Login/Phonenumber';
import Verify from './Login/Verify';
import Landing from './Landing';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Chat from './Components/Chat/ChatNav';
import Feed from './Components/Feed/Feed';
import Messages from './Components/Messages/Messages';


export default (
    <Switch>
      <Route path='/demo' component={Demo} />
      <Route exact path='/' component={Login} />
      <Route path='/phone' component={Phonenumber}/>
      <Route path='/verify' component={Verify} /> 
      <Route path='/landing' component={Landing}/>
      <Route path='/profile' component={Profile}/> 
      <Route path='/chat' component={Chat}/>
      <Route path='/messages' component={Messages}/>
      <Route path='/feed' component={Feed}/>

    </Switch>
  );