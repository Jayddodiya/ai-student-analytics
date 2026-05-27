import React from "react";
import "../css/Profile.css";

function Profile() {
  return (
    <div className="profile">

      {/* Left Side */}
      <div className="profile_left">

        <div className="profile_card">

          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="profile_avatar"
          />

          <h2>Jay Patel</h2>

          <p>LDRP Institute of Technology</p>

          <p>
            <strong>Codeforces:</strong> jay_123
          </p>

        </div>

      </div>

      {/* Right Side */}
      <div className="profile_right">

        {/* Skills */}
        <div className="card">

          <h2>Skills</h2>

          <div className="skills">

            <span>React</span>

            <span>JavaScript</span>

            <span>DSA</span>

            <span>Node.js</span>

            <span>MongoDB</span>

          </div>

        </div>

        {/* Achievements */}
        <div className="card">

          <h2>Achievements</h2>

          <ul className="achievement_list">

            <li>🔥 100 Day Coding Streak</li>

            <li>🏆 Specialist Rank</li>

            <li>💯 500 Problems Solved</li>

          </ul>

        </div>

        {/* Activity Timeline */}
        <div className="card">

          <h2>Activity Timeline</h2>

          <div className="timeline">

            <div className="timeline_item">
              ✅ Solved Graph Problem
            </div>

            <div className="timeline_item">
              🏁 Participated in Contest
            </div>

            <div className="timeline_item">
              📈 Reached New Rating
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;