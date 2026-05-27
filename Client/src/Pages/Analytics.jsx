import  "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import "../css/Analytics.css";

const contestData = [
  { month: "Jan", rating: 1200 },
  { month: "Feb", rating: 1280 },
  { month: "Mar", rating: 1350 },
  { month: "Apr", rating: 1420 },
  { month: "May", rating: 1500 },
];

const difficultyData = [
  { level: "Easy", solved: 40 },
  { level: "Medium", solved: 25 },
  { level: "Hard", solved: 10 },
];

const topics = [
  { name: "Arrays", status: "Strong" },
  { name: "Graphs", status: "Average" },
  { name: "DP", status: "Weak" },
  { name: "Greedy", status: "Strong" },
  { name: "Binary Search", status: "Average" },
];

function Analytics() {
  return (
    <div className="analytics">

      {/* Header */}
      <div className="header">
        <h1>Performance Analytics</h1>

        <p>
          Detailed coding insights and growth analysis.
        </p>
      </div>

      {/* Contest Performance */}
      <div className="card">
        <h2>Contest Performance</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={contestData}>
            <XAxis dataKey="month" />
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

        <div className="contestInfo">
          <p>🏆 Best Ranking: 245</p>
          <p>📈 Participation Frequency: 12 Contests</p>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid2">

        {/* Topic Strength */}
        <div className="card">
          <h2>Topic Strength Analysis</h2>

          {topics.map((topic, index) => (
            <div className="topicRow" key={index}>
              <span>{topic.name}</span>

              <span className={topic.status.toLowerCase()}>
                {topic.status}
              </span>
            </div>
          ))}
        </div>

        {/* Difficulty Analysis */}
        <div className="card">
          <h2>Problem Difficulty Analysis</h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={difficultyData}>
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="solved" fill="black" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Heatmap */}
      <div className="card">
        <h2>Daily Coding Heatmap</h2>

        <div className="heatmap">

          {[...Array(70)].map((_, index) => (
            <div
              key={index}
              className={`box ${
                index % 4 === 0
                  ? "dark"
                  : index % 3 === 0
                  ? "medium"
                  : "light"
              }`}
            ></div>
          ))}

        </div>

        <div className="heatInfo">
          <p>🔥 Coding Streak: 15 Days</p>
          <p>📅 Active Coding Days: 120</p>
        </div>
      </div>

    </div>
  );
}

export default Analytics;