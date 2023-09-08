import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechartbox.scss";

const data = [
  { name: "North", value: 400, color: "#0088FE" },
  { name: "North Central", value: 300, color: "#00C49F" },
  { name: "Western", value: 300, color: "#FFBB28" },
  { name: "North Western", value: 200, color: "#FF8042" },
  { name: "Central", value: 200, color: "#FF8042" },
  { name: "Southern", value: 200, color: "#FF8042" },
  { name: "Sabaragamuwa", value: 200, color: "#FF8042" },
  { name: "Eastern", value: 200, color: "#FF8042" },
  { name: "Uwa", value: 200, color: "#FF8042" },
];

const Piechartbox = () => {
  return (
    <div className="pieChartBox">
      <h1>Provincial Energy Consumption</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"50%"}
              outerRadius={"90%"}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            {/* <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piechartbox;