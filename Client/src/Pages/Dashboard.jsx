import "react";
import {  Card } from "react-bootstrap";
import '../css/dashboard.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";


function Dashboard() {

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

const weeklyData = [
  { day: "Mon", solved: 2 },
  { day: "Tue", solved: 5 },
  { day: "Wed", solved: 3 },
  { day: "Thu", solved: 6 },
  { day: "Fri", solved: 4 },
  { day: "Sat", solved: 7 },
];
  return (
    <>
      <div className="dashboard_cards">
        <Card className="cards">
          <Card.Body>
            <Card.Title>Current Rating</Card.Title>
            <h1>24</h1>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Body>
            <Card.Title>Problems Solved</Card.Title>
                       <h1>24</h1>

          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Body>
            <Card.Title>Contest Count</Card.Title>
                        <h1>24</h1>

          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Body>
            <Card.Title>Weekly Growth</Card.Title>
                       <h1>24</h1>

          </Card.Body>
        </Card>
      </div>


      {/* <h1 className="title">Dashboard Charts</h1> */}

      {/* Charts */}
      <div className="chartGrid">

        {/* Line Chart */}
        <div className="chartCard">
          <h3>Rating Growth</h3>

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
        <div className="chartCard">
          <h3>Problem Difficulty Distribution</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={difficultyData}>
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="problems" fill="black" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="chartCard">
          <h3>Weekly Activity</h3>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="solved"
                stroke="#000"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Bottom Panels */}
      <div className="bottomGrid">

        {/* Activity Panel */}
        <div className="panel">
          <h3>Activity Panel</h3>

          <ul>
            <li>✅ Solved 5 problems today</li>
            <li>🏆 Participated in Codeforces Round</li>
            <li>📈 Reached 1400 rating</li>
          </ul>
        </div>

        {/* AI Suggestion */}
        <div className="panel">
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

export default Dashboard;
