import React from "react";

function Connected() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>✅ Internet Connected!</h1>
      <p>You can now browse freely.</p>
    </div>
  );
}

export default Connected;