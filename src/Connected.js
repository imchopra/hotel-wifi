import React, { useState, useEffect } from "react";
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
        <h1>Lemon Hotels</h1>
        <span>Wi-Fi Access</span>
      </header>

   
      <div className="overlay">
        <div className="form-box">
          {!connected ? (
            <h1>Connecting to WiFi...</h1>
          ) : (
            <>
              <h1>✅ Internet Connected!</h1>
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
