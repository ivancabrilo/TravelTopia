import React from "react";
import Navbar from "../components/Navbar";
import backgroundPhoto from "../assets/images/background.jpg";

function Home() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div
          style={{
            backgroundImage: `url(${backgroundPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 19%",
            minHeight: "100vh",
            position: "relative",
            zIndex: -1,
          }}
        ></div>
      </div>
    </>
  );
}

export default Home;
