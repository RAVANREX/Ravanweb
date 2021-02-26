import React,{useEffect,useContext} from 'react';


function Adminskill(){
    const getuser = async()=>{
        try {
            const responce = await fetch('http://localhost:4000/')
            const jsonres = await responce.json()
            console.log(jsonres)
            
        } catch (error) {
            
        }


    }
   

    useEffect(()=>{
        getuser();
    },[])
    return(
        <>
         




        


        </>
        
            
        
    );
}

export default Adminskill;