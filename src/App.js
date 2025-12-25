import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Connected from "./Connected";
import lobby from "./assets/lobby.jpg";
import "./App.css";

function Home() {

  const [coupounCode, setcoupounCode] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
     if (coupounCode === "lemon263") {
      navigate("/connected");
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage:  `url(${lobby})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",    
        flexDirection: "column" 
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
              placeholder="Coupoun Code"
              value={coupounCode}
              onChange={(e) => setcoupounCode(e.target.value)}
              required
            />
            <button type="submit">Connect</button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Vasu Chopra · All rights reserved
      </footer>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connected" element={<Connected />} />
      </Routes>
    </Router>
      );
}

export default App;
