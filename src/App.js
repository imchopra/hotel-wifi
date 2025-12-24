import React, { useState } from "react";
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
        backgroundImage: `url('https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
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
