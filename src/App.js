import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Connected from "./Connected";
import lobby from "./assets/lobby.jpg";
import "./App.css";

function Home() {
  const [error, setError] = useState(false);
  const [coupounCode, setcoupounCode] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
     if (coupounCode === "lemon263") {
      navigate("/connected");
    } else {
        setError(true);
        setTimeout(() => setError(false), 600);

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
         <h1 className="page-title">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        Sample Hotel
        </Link>
        </h1>
        <span>Wi-Fi Access</span>
      </header>

      <div className="overlay">
        <div className="form-box">
          <h2 className="page-title">
          Hotel
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Coupoun Code"
              value={coupounCode}
              onChange={(e) => setcoupounCode(e.target.value)}
              className={error ? "input-error shake" : ""}
              required
            />
                {error && <div className="error-text">Invalid coupon code</div>}
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
