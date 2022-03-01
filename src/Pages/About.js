import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { MainBackground } from "../Layout/MainBackground";

export default function About() {
  return (
    <div>
      <MainBackground>
        <Header />

        <h1>About page</h1>
        <p>
          Notes is a notetaking app developed by Apple. It is provided on their
          iOS and macOS operating systems, the latter starting with OS X 10.8
          Mountain Lion. It functions as a service for making short text notes,
          which can be synchronised between devices using Apple's iCloud
          service.
        </p>
      </MainBackground>
      <Footer />
    </div>
  );
}
