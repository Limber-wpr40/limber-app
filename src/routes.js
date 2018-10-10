import React from "react";
import { Switch, Route } from "react-router-dom";
import Phonenumber from './Login/Phonenumber';
import Verify from './Login/Verify';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Profile from './Profile/Profile';
<<<<<<< HEAD
import Chat from './Components/Chat/ChatNav';
import Feed from './Components/Feed/Feed';
import Messages from './Components/Messages/Messages';
=======
import Settings from './Profile/Settings';
import Editinfo from './Profile/Editinfo';
>>>>>>> master


export default (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/phone' component={Phonenumber}/>
      <Route path='/verify' component={Verify} /> 
      <Route path='/landing' component={Landing}/>
      <Route path='/profile' component={Profile}/> 
      <Route path='/chat' component={Chat}/>
      <Route path='/messages' component={Messages}/>
      <Route path='/feed' component={Feed}/>

      <Route path='/settings' component={Settings}/>
      <Route path='/editinfo' component={Editinfo}/>
    </Switch>
  );