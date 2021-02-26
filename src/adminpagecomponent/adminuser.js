import React from 'react';

function Adminuser(){
    return(
        <>
      <div align="center">

     


        <form>
          <p>Cover Picture</p>
            <input type="image" width="100" height="100"/>
            <input type="submit"/>
        </form>

        <form>
        <p>profile Picture</p>
            <input type="image" width="100" height="100"/>
            <input type="submit"/>
        </form>


        <form>
            <p>User Name</p>
            <textarea type="text"/>
            <input type="submit"/>
        </form>

        <form>
        <p>bio</p>
            <input type="text"/>
            <input type="submit"/>
        </form>


        <form>
        <p>about</p>
            <textarea type="text"/>
            <input type="submit"/>
        </form>
        <form>
        <p>Hobbies</p>
            <textarea type="text"/>
            <input type="submit"/>
        </form>

        </div>


        </>
        
            
        
    );
}

export default Adminuser;