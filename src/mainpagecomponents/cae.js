import React,{useState} from 'react';
import {Link,NavLink} from 'react-router-dom'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import caenavData from '../route/caenavData';
import '../css/cae.css'
import Cer from '../mainpagecomponents/caesubcomponents/cer';
import Ach from '../mainpagecomponents/caesubcomponents/ach';
import Eve from '../mainpagecomponents/caesubcomponents/eve';



function cae(){
    return(
        <>
        <Router>
            <div className="caenav">
                <ul className="caenavmenu">
                 {caenavData.map((item, index)=>{
                     return(
                         <li key={index}>
                             <NavLink to={item.path} exact activeClassName="cae-active">{item.title}</NavLink>
                         </li>
                     )
                 })}
                </ul>
                </div>
                
         <div className="caeview">
          <Switch>
        </Switch>  
        <Route path='/cae/' exact component={Cer}/>
        <Route path='/cae/ach/' exact component={Ach}/>
        <Route path='/cae/eve/' exact component={Eve}/>
        </div>
        </Router>

              
        </>
        
        
    );
}

export default cae;