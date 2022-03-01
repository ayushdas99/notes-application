import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    // <div>
    <>
      <h2>Home page welcomes you!</h2>
      <h3>Let's dive into the world of notes app</h3>

      <p>
        <Link to="/about">About us</Link>
      </p>
    </>
    // </div>
  );
}
