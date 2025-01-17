import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || { username: "Guest" };

  const handleStartShopping = () => {
    navigate("/products"); 
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container mt-4 text-center">
      <h1>Welcome, {username}!</h1>
      <button
        onClick={handleStartShopping}
        className="btn btn-success mt-3 me-2"
      >
        Start Shopping
      </button>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Log Out
      </button>
    </div>
  );
}
