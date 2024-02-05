import React from "react";
import Head from "../../assets/Head.png";
import "./Home.css";

function Home() {
  return (
    <main className="text-secondary animate__animated animate__fadeIn">
      <img src={Head} alt="" className="head" />
      <h1>Abdelrahman Ghazal</h1>
      <p>Developer - Web Designer - Engineer</p>
    </main>
  );
}

export default Home;
