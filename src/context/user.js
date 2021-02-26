import React,{useState,createContext} from 'react';

export const Usercontext = createContext();

export const UsercontextProvider = (props)=>{
     
    const [user,setuser]=useState([]);


    return(
        <Usercontext.Provider values={{user,setuser}}>
            {props.childern}
        </Usercontext.Provider>
    )
}

export default UsercontextProvider