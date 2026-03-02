import StatsCards from "../Components/StatsCards";
import PredictionForm from "../Components/PredictionForm";
import AttackChart from "../Components/AttackChart";
import ShapSection from "../Components/ShapSection";

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