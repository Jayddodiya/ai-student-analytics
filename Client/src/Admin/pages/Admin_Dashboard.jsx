import "react";
import {  Card } from "react-bootstrap";
import '../css/Admin_dashboard.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
    PieChart,
  Pie,
  Cell,
    Legend,
} from "recharts";


function Admin_Dashboard() {

const ratingData = [
  { day: "Mon", rating: 1200 },
  { day: "Tue", rating: 1250 },
  { day: "Wed", rating: 1280 },
  { day: "Thu", rating: 1320 },
  { day: "Fri", rating: 1380 },
  { day: "Sat", rating: 1400 },
];

const difficultyData = [
  { level: "Easy", problems: 20 },
  { level: "Medium", problems: 12 },
  { level: "Hard", problems: 5 },
];

const topicData = [
  { name: "Arrays", value: 35 },
  { name: "Graphs", value: 25 },
  { name: "DP", value: 20 },
  { name: "Greedy", value: 15 },
  { name: "Binary Search", value: 10 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7",
];
  return (
    <>
      <div className="admin_dashboard_cards">
        <Card className="admin_cards">
          <Card.Body>
            <Card.Title  style={{fontSize:"20px"}}>Total Students</Card.Title>
            <h1>1250</h1>
          </Card.Body>
        </Card>
        <Card className="admin_cards">
          <Card.Body>
            <Card.Title  style={{fontSize:"20px"}}>Active Users</Card.Title>
                       <h1>870</h1>

          </Card.Body>
        </Card>
        <Card className="admin_cards">
          <Card.Body>
            <Card.Title style={{fontSize:"20px"}}>Reports Generated</Card.Title>
                        <h1>342</h1>

          </Card.Body>
        </Card>
        <Card className="admin_cards">
          <Card.Body>
            <Card.Title style={{fontSize:"20px"}}>Top College</Card.Title>
                       <h5>LDRP Institute</h5>

          </Card.Body>
        </Card>
      </div>


      {/* <h1 className="title">Dashboard Charts</h1> */}

      {/* Charts */}
      <div className="admin_chartGrid">

        {/* Line Chart */}
        <div className="admin_chartCard">
          <h3>Student Growth</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ratingData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#000"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="admin_chartCard">
          <h3>Weekly Activity</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={difficultyData}>
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="problems" fill="black" />
            </BarChart>
          </ResponsiveContainer>
        </div>

     {/* Pie Chart */}
<div className="admin_chartCard">

  <h3>Topic Strength Distribution</h3>

  <ResponsiveContainer width="100%" height={250}>

    <PieChart>

      <Pie
        data={topicData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >

        {topicData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>

  </ResponsiveContainer>

</div>
      </div>

      {/* Bottom Panels */}
      <div className="admin_bottomGrid">

        {/* Activity Panel */}
        <div className="admin_panel">
          <h3>Activity Panel</h3>

          <ul>
            <li>✅ Solved 5 problems today</li>
            <li>🏆 Participated in Codeforces Round</li>
            <li>📈 Reached 1400 rating</li>
          </ul>
        </div>

        {/* AI Suggestion */}
        <div className="admin_panel">
          <h3>AI Suggestion</h3>

          <p>
            <strong>Weak Topic:</strong> Dynamic Programming
          </p>

          <p>
            <strong>Suggestion:</strong> Solve 3 DP problems daily.
          </p>
        </div>

      </div>
    </>
  );
}

export default Admin_Dashboard;
