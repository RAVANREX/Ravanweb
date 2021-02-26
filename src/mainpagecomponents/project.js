import React, { useState } from "react";
import '../css/project.css';
import {Image} from 'react-bootstrap';

import * as AiIcon from "react-icons/ai";

function Project(){

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };


    return(
        <>
            <h3>Project</h3>

            <div className={isActive ? "myblogcard mystyle" : "myblogcard"} >
    <div className={isActive ? "blog mystyle" : "blog"}>
    <Image className="blog-image" src={process.env.PUBLIC_URL + "/assets/test.jpg"} alt="Italian Trulli" />      
      <div className={isActive ? "blog-content mystyle" : "blog-content"}>
        <p className="blog-header"> <a href="#">Lorem Ipsum</a> </p>
        <p className={isActive ? "project-text project-text-style" : "project-text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          
        </p>
        <button onClick={handleToggle}>Toggle class</button>
        
        <div className="blogbottom">
          <p><AiIcon.AiFillEye />123</p>
          <p><AiIcon.AiFillLike style={{color:"green"}}/>123</p>
          <p><AiIcon.AiFillDislike style={{color:"red"}}/>123</p>

        </div>
        
      </div>
    </div>
  </div>



  

            
        </>
    );
}

export default Project;