import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Adminnavbar from './adminpagecomponent/adminnav/adminnavbar'
import Adminlogin from './adminpagecomponent/adminlogin';
import Adminuser from './adminpagecomponent/adminuser';
import Adminblog from './adminpagecomponent/adminblog';
import Adminskill from './adminpagecomponent/adminskill';
import Adminevent from './adminpagecomponent/adminevent';
import Adminproject from './adminpagecomponent/adminproject';
import Admincontact from './adminpagecomponent/admincontact';
import Admincertificate from './adminpagecomponent/admincertificate';
import Adminachivement from './adminpagecomponent/adminachivement';





function Adminweb()  {
    return (
      <>
     
      <Router>
      <Adminnavbar/>
        <Switch>
        </Switch>
        <div>
        <Route path='/admin' exact component={Adminlogin}/>
        <Route path='/admin/login' exact component={Adminlogin}/>
        <Route path='/admin/user' exact component={Adminuser}/>
        <Route path='/admin/blog' exact component={Adminblog}/>
        <Route path='/admin/skill' exact component={Adminskill}/>
        <Route path='/admin/event' exact component={Adminevent}/>
        <Route path='/admin/project' exact component={Adminproject}/>
        <Route path='/admin/contact' exact component={Admincontact}/>
        <Route path='/admin/certificate' exact component={Admincertificate}/>
        <Route path='/admin/achivement' exact component={Adminachivement}/>
        </div>
      </Router>
      
     
      </>
      
    );
  }
  
  export default Adminweb;