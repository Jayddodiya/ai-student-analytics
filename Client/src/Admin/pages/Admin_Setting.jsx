import React from "react";

import "../css/Admin_Setting.css";

function Admin_Settings() {
  return (
    <div className="settings">

      {/* Header */}

      <div className="settings_header">

        <h1>Settings</h1>

      </div>

      {/* Account Settings */}

      <div className="settings_card">

        <h2>Account Settings</h2>

        <div className="form_group">

          <label>Change Name</label>

          <input
            type="text"
            placeholder="Enter new name"
          />

        </div>

        <div className="form_group">

          <label>Change Email</label>

          <input
            type="email"
            placeholder="Enter new email"
          />

        </div>

        <div className="form_group">

          <label>Change Password</label>

          <input
            type="password"
            placeholder="Enter new password"
          />

        </div>

        <button className="save_btn">
          Save Changes
        </button>

      </div>

      {/* Platform Settings */}

      <div className="settings_card">

        <h2>Platform Settings</h2>

        <div className="toggle_group">

          <label>

            <input type="checkbox" />

            Dark Mode

          </label>

          <label>

            <input type="checkbox" />

            Email Notifications

          </label>

          <label>

            <input type="checkbox" />

            Contest Alerts

          </label>

        </div>

      </div>

      {/* Security Settings */}

      <div className="settings_card">

        <h2>Security Settings</h2>

        <div className="toggle_group">

          <label>

            <input type="checkbox" />

            Two Factor Authentication

          </label>

        </div>

        <button className="logout_btn">
          Logout from all devices
        </button>

      </div>

    </div>
  );
}

export default Admin_Settings;