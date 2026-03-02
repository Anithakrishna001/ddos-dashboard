import StatsCards from "../components/StatsCards";
import PredictionForm from "../components/PredictionForm";
import AttackChart from "../components/AttackChart";
import ShapSection from "../components/ShapSection";

function Dashboard() {
  return (
    <div style={{ padding: "20px", background: "#0f172a", minHeight: "100vh", color: "white" }}>
      <h1>Multiclass DDoS Detection Dashboard</h1>
      <StatsCards />
      <AttackChart />
      <PredictionForm />
      <ShapSection />
    </div>
  );
}

export default Dashboard;