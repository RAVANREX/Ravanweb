import React, { useState } from "react";
import '../css/blog.css';
import {Image} from 'react-bootstrap';
import * as AiIcon from "react-icons/ai";



function Blog(){

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
    return(
        <>
        
        <h3>Blog</h3>
        <div className={isActive ? "myblogcard mystyle" : "myblogcard"} >
    <div className={isActive ? "blog mystyle" : "blog"}>
    <Image className="blog-image" src={process.env.PUBLIC_URL + "/assets/test.jpg"} alt="Italian Trulli" />      
      <div className={isActive ? "blog-content mystyle" : "blog-content"}>
        <p className="blog-header"> <a href="#">Lorem Ipsum</a> </p>
        <p className={isActive ? "blog-text blog-text-style" : "blog-text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
        </p>
        <button onClick={handleToggle}>Toggle class</button>
        <div className="author">
          <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" className="author-image"/>
          <div className="author-content">
            <p className="author-name">Özgür Kurucan</p>
            <p className="date">Jun 20, 2020</p>
          </div>
        </div>
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

export default Blog;