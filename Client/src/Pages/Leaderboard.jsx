import "react";
import "../css/Leaderboard.css";

const students = [
  {
    rank: 1,
    name: "Jay Patel",
    rating: 1820,
    solved: 320,
    college: "LDRP Institute",
  },
  {
    rank: 2,
    name: "Meet Shah",
    rating: 1760,
    solved: 290,
    college: "Nirma University",
  },
  {
    rank: 3,
    name: "Aarav Joshi",
    rating: 1690,
    solved: 250,
    college: "DAIICT",
  },
];

function Leaderboard() {
  return (
    <div className="leaderboard">

      {/* Header */}
      <div className="leaderboard_header">

        <h1>Top Students Ranking</h1>

        {/* Filters */}
        <div className="filters">

          <button>Weekly</button>

          <button>Monthly</button>

          <button>Global</button>

          <button>College-wise</button>

        </div>

      </div>

      {/* Top Cards */}
      <div className="top_cards">

        <div className="top_card">
          <h3>🏆 Top Rating</h3>

          <p>1820</p>

          <span>Jay Patel</span>
        </div>

        <div className="top_card">
          <h3>🔥 Most Problems Solved</h3>

          <p>320</p>

          <span>Meet Shah</span>
        </div>

        <div className="top_card">
          <h3>📈 Fastest Growth</h3>

          <p>+250</p>

          <span>Aarav Joshi</span>
        </div>

      </div>

      {/* Table */}
      <div className="table_container">

        <table>

          <thead>

            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Solved</th>
              <th>College</th>
            </tr>

          </thead>

          <tbody>

            {students.map((student) => (
              <tr key={student.rank}>

                <td>{student.rank}</td>

                <td>{student.name}</td>

                <td>{student.rating}</td>

                <td>{student.solved}</td>

                <td>{student.college}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Leaderboard;