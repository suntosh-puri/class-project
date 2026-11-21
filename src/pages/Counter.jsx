
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add= ()=> {
    setCount(count)
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        width: "300px"
      }}>
        <h1 style={{ color: "#333" }}>Counter App</h1>

        <h1 style={{
          fontSize: "60px",
          color: "#667eea",
          margin: "25px 0"
        }}>
          {count}
        </h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px"
        }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              background: "#ff4757",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            style={{
              background: "#747d8c",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            style={{
              background: "#2ed573",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
