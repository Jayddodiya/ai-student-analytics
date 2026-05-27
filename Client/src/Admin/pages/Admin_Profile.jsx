import React from "react";

import "../css/Admin_Profile.css";

function Admin_Profile() {
  return (
    <div className="profile">

      {/* Left Section */}

      <div className="profile_left">

        <div className="profile_card">

          <img
            src="https://i.pravatar.cc/150"
            alt="admin"
            className="profile_avatar"
          />

          <h2>Jay Patel</h2>

          <p className="admin_role">
            Admin
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="profile_right">

        {/* Skills */}

        <div className="profile_section">

          <h2>Skills</h2>

          <div className="skills">

            <span>Management</span>

            <span>Analytics</span>

            <span>React</span>

            <span>Node.js</span>

          </div>

        </div>

        {/* Activity */}

        <div className="profile_section">

          <h2>Activity</h2>

          <div className="activity_list">

            <div className="activity_item">
              📄 Created Report
            </div>

            <div className="activity_item">
              👨‍🎓 Added Student
            </div>

            <div className="activity_item">
              📢 Sent Announcement
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin_Profile;