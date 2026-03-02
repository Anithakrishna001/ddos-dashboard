function ShapSection() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>SHAP Feature Importance</h2>

      <ul>
        <li>Flow Duration → +0.45</li>
        <li>Packet Rate → +0.31</li>
        <li>Byte Rate → -0.12</li>
      </ul>
    </div>
  );
}

export default ShapSection;