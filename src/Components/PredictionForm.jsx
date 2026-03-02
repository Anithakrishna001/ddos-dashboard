import { useState } from "react";

function PredictionForm() {
  const [prediction, setPrediction] = useState("");

  const handlePredict = () => {
    // Later connect to backend
    setPrediction("SYN Flood (98% confidence)");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Traffic Prediction</h2>

      <input placeholder="Flow Duration" style={inputStyle} />
      <input placeholder="Total Packets" style={inputStyle} />
      <input placeholder="Total Bytes" style={inputStyle} />

      <button onClick={handlePredict} style={buttonStyle}>
        Predict
      </button>

      {prediction && <h3>Prediction: {prediction}</h3>}
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px 0",
  padding: "8px",
};

const buttonStyle = {
  padding: "10px",
  background: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default PredictionForm;