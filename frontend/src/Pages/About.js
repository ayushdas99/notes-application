import React from "react";
import LayoutContext from "../context/Layout";
import { useContext } from "react";
//import Layout from "../Layout/Layout";


export default function About() {

  const Reset = useContext(LayoutContext)
  
  const handleReset = () => {
    
    Reset.setCounter(5);
  }

  return (
    <div>
      

        <h1>About page</h1>
        <p>
          Notes is a notetaking app developed by Apple. It is provided on their
          iOS and macOS operating systems, the latter starting with OS X 10.8
          Mountain Lion. It functions as a service for making short text notes,
          which can be synchronised between devices using Apple's iCloud
          service.
        </p>
        <button onClick={handleReset}>Reset</button>
      
    </div>
  );
}
