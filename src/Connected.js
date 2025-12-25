import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lobby from "./assets/lobby.jpg";
import "./App.css";

function Connected() {
        const [connected, setConnected] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
            setConnected(true);
            }, 2000); // 2000ms = 2 seconds
            return () => clearTimeout(timer);
        }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${lobby})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
          {!connected ? (
            <h2>Connecting to WiFi...</h2>
          ) : (
            <>
              <h2>✅ Internet Connected!</h2>
              <p>You can now browse freely.</p>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Vasu Chopra · All rights reserved
      </footer>
    </div>
  );
}

export default Connected;
