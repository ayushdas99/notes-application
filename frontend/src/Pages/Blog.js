import React from 'react'
import './Blog.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Blog() {
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
        { data && data.map(({ id, title }) => (
          <li key = {id}>
            <h2>{ title }</h2>
            <button>
                <Link to="/know">Know More...</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

