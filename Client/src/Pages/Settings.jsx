import React from "react";
import "../css/Settings.css";

function Settings() {
  return (
    <div className="settings">

      <h1 className="settings_title">
        Settings
      </h1>

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

      {/* Theme Settings */}
      <div className="settings_card">

        <h2>Theme Settings</h2>

        <div className="toggle_group">

          <label>
            <input type="radio" name="theme" />

            Dark Mode
          </label>

          <label>
            <input type="radio" name="theme" />

            Light Mode
          </label>

        </div>

      </div>

      {/* Notification Settings */}
      <div className="settings_card">

        <h2>Notification Settings</h2>

        <div className="toggle_group">

          <label>
            <input type="checkbox" />

            Email Notifications
          </label>

          <label>
            <input type="checkbox" />

            Contest Alerts
          </label>

          <label>
            <input type="checkbox" />

            Weekly Reports
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

export default Settings;