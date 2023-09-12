import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {

  const [listOfPosts, setlistOfPosts] = useState([]); //keeps current data

  useEffect( () =>{
      //gets the data from the SERVER
      axios.get("htpp://localhost:5002/posts").then((response) =>{
        setlistOfPosts(resonse.data);
      });
  }, []);


  return (
    <div className="App">
      {listOfPosts.map((value, key)=>{
        return 
        <div className='post'>
          <div className='title'>{value.postText}</div>
          <div className='body'>{value.postText}</div>
          <div className='footer'>@{value.username}</div>
          <div className='date'>Date: {value.updatedAt}</div>
          </div>

      })};
    </div>
  )
}

export default Home
