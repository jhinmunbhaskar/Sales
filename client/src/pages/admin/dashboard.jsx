import React from "react";
import { useAuth } from "../features/auth/authContext";

export default function AdminDashboard() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name || "Admin"}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
