import React from "react";
import { Link } from "react-router-dom";
import './adminPanel.css'

function AdminPanel() {
  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <div className="admin__btn-container">
        <Link to="/admin/edit">
          <button>Add/Update Products</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPanel;
