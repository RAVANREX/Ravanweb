import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './css/app.css'
import Clientweb from './clientweb';
import Adminweb from './adminweb';

function App()  {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/admin' exact component={Adminweb}/>
        <Route path='/' exect component={Clientweb}/>
      </Switch>
    </Router>

    
    
    </>
    
  );
}

export default App;
