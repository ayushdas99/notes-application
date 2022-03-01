import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import { MainBackground } from "../Layout/MainBackground";
import Footer from "../Layout/Footer";

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
