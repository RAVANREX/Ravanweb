import React from 'react';
import './admincss/adminlogin.css'

function Adminlogin(){
    return(
        <>
        <div >
            <h3>Admin Login</h3>
            <div className="adminlogin">
            <form post="/adminloginpost" 
             >
                <input placeholder="email"  type="text"/>
                <input placeholder="password" type="password"/>
                <input  type="submit"/>
            </form>
            </div>
            






        
        </div>

        </>
        
            
        
    );
}

export default Adminlogin;