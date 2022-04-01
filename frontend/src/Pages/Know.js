import React from 'react'
import './Blog.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Know() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setData(response.data);
        setError(null);
      }
      catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getData();
  }, []);

  return (
    <div className='Blog'>
      <h1>Blogs</h1>
      <ul>
        { data && data.map(post => {
            return(
                <div key={ post.id }>
                    <p>{ post.body }</p>
                </div>
            )
        })}
      </ul>
    </div>
  )
}