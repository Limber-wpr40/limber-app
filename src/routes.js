import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from './Components/Chat/Chat';
import Feed from './Components/Feed/Feed';
import Messages from './Components/Messages/Messages';


import Login from './Login/Login';

export default (
    <Switch>
      
      <Route path='/login' component={Login} />
      <Route path='/chat/:match_id' component={Chat} />
      <Route path='/feeds' component={Feed} />
      <Route path='/messages' component={Messages} />

      
    
    </Switch>
  );