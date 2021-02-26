import React,{useState} from 'react';
import {Link,NavLink} from 'react-router-dom'
import {navbarData} from '../../route/navbarData'
import '../../css/nav.css';
import $ from 'jquery';
$(document).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
  });
function Navbar() {
    const [sidebar,setSidebar] =  useState(false)

    const showSidebar = ()=>setSidebar(!sidebar)
    return (
        <>
        <nav className="nav">
        <div className="container">
            <div className="logo">
                <Link to="/">Ravanweb</Link>
            </div>
            <div className={sidebar ? "main_list show_list" : "main_list"}>
                <ul className="navlinks">
                 {navbarData.map((item, index)=>{
                     return(
                         <li key={index} className={item.cName}>
                             <NavLink to={item.path} activeClassName="is-active">{item.title}</NavLink>
                         </li>
                     )
                 })}
                </ul>
            </div>
            <span className={sidebar ? "navTrigger active" : "navTrigger"} onClick={showSidebar}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <section className="coverpic">
    </section>



        </>
        
    
    
    );
}

export default Navbar
