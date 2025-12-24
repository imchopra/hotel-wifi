import React, { useState } from "react";
import lobby from "./assets/lobby.jpg";

import "./App.css";

function App() {
  const [room, setRoom] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Room: ${room}, Last Name: ${lastName}`);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage:  `url(${lobby})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
        {/* Header */}
      <header className="header">
        <h1>Lemon Hotels</h1>
        <span>Wi-Fi Access</span>
      </header>

      <div className="overlay">
        <div className="form-box">
          <h1>Hotel Wi-Fi Access</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Room Number"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <button type="submit">Connect</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
