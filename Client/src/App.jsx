import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* User Layout */

import Layout from "./component/Layout";

import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import Leaderboard from "./Pages/Leaderboard";
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Admin_Layout from "./Admin/layout/Admin_Layout";
import Admin_Dashboard from "./Admin/pages/Admin_Dashboard";
import Students from "./Admin/pages/Students";
import Admin_Analytics from "./Admin/pages/Admin_Analytics";
import Admin_Reports from "./Admin/pages/Admin_report";
import Admin_Settings from "./Admin/pages/Admin_Setting";
import Admin_Profile from "./Admin/pages/Admin_Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import AdminRoute from "./Routes/AdminRotes";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* User Routes */}
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Dashboard />} />

    //       <Route path="analytics" element={<Analytics />} />

    //       <Route path="leaderboard" element={<Leaderboard />} />

    //       <Route path="reports" element={<Reports />} />

    //       <Route path="profile" element={<Profile />} />

    //       <Route path="settings" element={<Settings />} />
    //     </Route>

    //     {/* Admin Routes */}

    //     <Route path="/admin" element={<Admin_Layout />}>
    //       <Route index element={<Admin_Dashboard />} />

    //       <Route path="students" element={<Students />} />

    //       <Route path="analytics" element={<Admin_Analytics />} />

    //       <Route path="reports" element={<Admin_Reports />} />

    //       <Route path="settings" element={<Admin_Settings />} />
    //       <Route path="profile" element={<Admin_Profile />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        {/* Default Login Page */}
        <Route path="/" element={<Login />} />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        {/* <Route
      path="/dashboard"
      element={<Layout />}
    > */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="analytics" element={<Analytics />} />

          <Route path="leaderboard" element={<Leaderboard />} />

          <Route path="reports" element={<Reports />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Dashboard */}
        {/* <Route
      path="/admin"
      element={<Admin_Layout />}
    > */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin_Layout />
            </AdminRoute>
          }
        >
          <Route index element={<Admin_Dashboard />} />

          <Route path="students" element={<Students />} />

          <Route path="analytics" element={<Admin_Analytics />} />

          <Route path="reports" element={<Admin_Reports />} />

          <Route path="settings" element={<Admin_Settings />} />

          <Route path="profile" element={<Admin_Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
