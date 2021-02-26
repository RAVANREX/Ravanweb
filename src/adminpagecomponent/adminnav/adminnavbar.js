import React,{useState} from 'react';
import {Link,NavLink} from 'react-router-dom'
import {AdminnavData} from '../../route/adminnavData'
import '../../css/adminnav.css';
function Adminnavbar(){
    const [sidebar,setSidebar] =  useState(false)

    const showSidebar = ()=>setSidebar(!sidebar)
    return(
      <>
        <nav className="adminnav affix">
        <div className="container">
            <div className="adminlogo">
                <Link to='/admin'>Admin Pnl</Link>
            </div>
            <div className={sidebar ? "adminmain_list adminshow_list" : "adminmain_list"}>
                <ul className="adminnavlinks" style={{overflowY:"scroll"}}>
                 {AdminnavData.map((item, index)=>{
                     return(
                         <li key={index}>
                             <NavLink to={item.path} activeClassName="is-active">{item.title}</NavLink>
                         </li>
                     )
                 })}
                </ul>
            </div>
            <span className={sidebar ? "adminnavTrigger active" : "adminnavTrigger"} onClick={showSidebar}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>


        </>
                 
        
    );
}

export default Adminnavbar;