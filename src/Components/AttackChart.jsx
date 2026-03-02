import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "SYN Flood", value: 1200 },
  { name: "UDP Flood", value: 800 },
  { name: "HTTP Flood", value: 600 },
  { name: "Benign", value: 9300 },
];

const COLORS = ["#ff4d4d", "#ff944d", "#ffcc00", "#00cc66"];

function AttackChart() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Attack Distribution</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default AttackChart;