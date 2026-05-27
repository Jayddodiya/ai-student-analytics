import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "../css/Analytics.css";

/* Data */

const contestData = [
  { month: "Jan", contests: 4 },
  { month: "Feb", contests: 6 },
  { month: "Mar", contests: 8 },
  { month: "Apr", contests: 5 },
  { month: "May", contests: 9 },
];

const codingData = [
  { day: "Mon", solved: 5 },
  { day: "Tue", solved: 8 },
  { day: "Wed", solved: 4 },
  { day: "Thu", solved: 10 },
  { day: "Fri", solved: 7 },
];

const ratingData = [
  { month: "Jan", rating: 1200 },
  { month: "Feb", rating: 1300 },
  { month: "Mar", rating: 1420 },
  { month: "Apr", rating: 1550 },
  { month: "May", rating: 1680 },
];

function Admin_Analytics() {
  return (
    <div className="analytics">

      {/* Header */}

      <div className="analytics_header">

        <h1>Platform Analytics</h1>

      </div>

      {/* Cards */}

      <div className="analytics_cards">

        <div className="analytics_card">

          <h3>Average Rating</h3>

          <h2>1540</h2>

        </div>

        <div className="analytics_card">

          <h3>Most Active Student</h3>

          <h2>Jay Patel</h2>

        </div>

        <div className="analytics_card">

          <h3>Most Solved Problems</h3>

          <h2>520</h2>

        </div>

        <div className="analytics_card">

          <h3>Weekly Growth</h3>

          <h2>+18%</h2>

        </div>

      </div>

      {/* Charts */}

      <div className="charts_grid">

        {/* Area Chart */}

        <div className="chart_card">

          <h3>Contest Participation</h3>

          <ResponsiveContainer width="100%" height={300}>

            <AreaChart data={contestData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="contests"
                stroke="#000"
                fill="#8884d8"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* Bar Chart */}

        <div className="chart_card">

          <h3>Coding Activity</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={codingData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="solved"
                fill="#000"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Line Chart */}

        <div className="chart_card full_width">

          <h3>Rating Growth</h3>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={ratingData}>

              <CartesianGrid strokeDasharray="3 3" />

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

        </div>

      </div>

    </div>
  );
}

export default Admin_Analytics;