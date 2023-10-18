import React, { useState } from "react";

function Section() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p style={{ fontSize: "30px" }}>clicked {number} times</p>
      <button
        style={{
          backgroundColor: "#262626",
          marginRight: "10px",
          border: "none",
          outline: "none",
          height: "40px",
          width: "140px",
          fontSize: "20px",
          color: "aliceblue",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => setNumber(number + 1)}
        disabled={number === 50}
      >
        Incremet
      </button>

      <button
        style={{
          backgroundColor: "#262626",
          marginRight: "10px",
          border: "none",
          outline: "none",
          height: "40px",
          width: "140px",
          fontSize: "20px",
          color: "aliceblue",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => setNumber(number - 1)}
        disabled={number === 0}
      >
        Decrement
      </button>

      <button
        style={{
          backgroundColor: "#f20000",
          marginRight: "10px",
          border: "none",
          outline: "none",
          height: "40px",
          width: "140px",
          fontSize: "20px",
          color: "aliceblue",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => setNumber(0)}
        disabled={number === 0}
      >
        Reset
      </button>
    </div>
  );
}

export default Section;
