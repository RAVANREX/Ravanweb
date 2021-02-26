import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './css/app.css'
import Client from './clientweb';
import Admin from './adminweb';

function App()  {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/admin' exect component={Admin}/>
        <Route path='/' exect component={Client}/>
      </Switch>
    </Router>

    
    
    </>
    
  );
}

export default App;
