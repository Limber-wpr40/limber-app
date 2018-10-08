import React from "react";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Chat from './Components/Chat/Chat';
import Feed from './Components/Feed/Feed';
import Messages from './Components/Messages/Messages';


=======
import Demo from './Demo';
import Phonenumber from './Login/Phonenumber';
import Verify from './Login/Verify';
import Landing from './Landing';
>>>>>>> master
import Login from './Login/Login';
import Profile from './Profile/Profile';

export default (
    <Switch>
<<<<<<< HEAD
      
      <Route path='/login' component={Login} />
      <Route path='/chat/:match_id' component={Chat} />
      <Route path='/feeds' component={Feed} />
      <Route path='/messages' component={Messages} />

      
    
=======
      <Route path='/demo' component={Demo} />
      <Route exact path='/' component={Login} />
      <Route path='/phone' component={Phonenumber}/>
      <Route path='/verify' component={Verify} /> 
      <Route path='/landing' component={Landing}/>
      <Route path='/profile' component={Profile}/> 
>>>>>>> master
    </Switch>
  );