function StatsCards() {
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <div style={cardStyle}>Total Traffic: 12500</div>
      <div style={cardStyle}>Attacks: 3200</div>
      <div style={cardStyle}>Benign: 9300</div>
      <div style={cardStyle}>False Alarm: 2%</div>
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  flex: 1,
  textAlign: "center",
};

export default StatsCards;