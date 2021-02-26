import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import '../css/contact.css'
import * as AiIcon from "react-icons/ai";
import * as FaIcon from "react-icons/fa";
import * as TiIcon  from "react-icons/ti";

function contact(){
    return(
        <>
            <h3>contact</h3>
            <p style={{fontSize:"3rem",fontWeight:"900",textAlign:"center"}}>wanna do a project with me?</p>
            <div className="social-icon-list">
                <div className="social-icon">
                <Link><p><FaIcon.FaFacebookF/></p></Link>
                </div>
                <div className="social-icon">
                <Link><p><FaIcon.FaInstagramSquare/></p></Link>
                </div>
                <div className="social-icon">
                <Link><p><AiIcon.AiOutlineTwitter/></p></Link>
                </div>
                <div className="social-icon">
                <Link><p><AiIcon.AiOutlineLinkedin/></p></Link>
                </div>
                <div className="social-icon">
                <Link><p><FaIcon.FaGooglePlus/></p></Link>
                </div>
                <div className="social-icon">
                <Link><p><TiIcon.TiSocialGithub/></p></Link>
                </div>

            </div>

            </>
        
    );
}

export default contact;