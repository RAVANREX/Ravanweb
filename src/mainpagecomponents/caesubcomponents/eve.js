import React from 'react';
import {Image} from 'react-bootstrap';

function eve(){
    return(
        
        <>
        <div className="myblogcard">
    <div className="blog">
    <Image className="blog-image" src={process.env.PUBLIC_URL + "/assets/test.jpg"} alt="Italian Trulli" />      
      <div className="blog-content">
        <p className="blog-header"> <a href="#">Event</a> </p>
        <p className="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!myname is bro prohajabvajbvhjasbvjbas,j
        </p>
        <p className="blog-seemore">SEE more</p>
        <div className="author">
          <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" className="author-image"/>
          <div className="author-content">
            <p className="author-name">Özgür Kurucan</p>
            <p className="date">Jun 20, 2020</p>
          </div>
        </div>
        <div className="blogbottom">
          <p>A</p>
          <p>A</p>
          <p>A</p>

        </div>
        
      </div>
    </div>
  </div>


        </>
        
    );
}

export default eve;