import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './css/app.css'
import Navbar from './mainpagecomponents/subcomponents/navbar';
import Home from './mainpagecomponents/home';
import Blog from './mainpagecomponents/blog';
import Contact from './mainpagecomponents/contact';
import Project from './mainpagecomponents/project';
import Resume from './mainpagecomponents/resume';
import Cae from './mainpagecomponents/cae';


function Clientweb()  {
    return (
      <>
      <Router>
      <Navbar/>
         
          <Route path='/home' exact component={Home}/>
          <Route path='/' exact component={Home}/>
          <Route path='/blog' exact component={Blog}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/resume' exact component={Resume}/>
          <Route path='/project' exact component={Project}/>
          <Route path='/cae'  component={Cae}/>
  
    
          
      </Router>
      
      
      </>
      
    );
  }
  
  export default Clientweb;