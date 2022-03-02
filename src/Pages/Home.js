import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LayoutContext from "../context/Layout";


export default function Home() {

  const Reset = useContext(LayoutContext)
  
  const handleReset = () => {
    
    Reset.setCounter(5);

  }

  return (
    // <div>
    <>
      <h2>Home page welcomes you!</h2>
      <h3>Let's dive into the world of notes app</h3>

      <p>
        <Link to="/about">About us</Link>
      </p>
      <button onClick={handleReset}>Reset</button>
    </>
    // </div>
  );
}
