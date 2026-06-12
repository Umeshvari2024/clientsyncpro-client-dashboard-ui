import { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`sidebar ${open ? "show" : ""}`}>
        <h2>ClientSync Pro</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>👥 Clients</li>
          <li>📁 Projects</li>
          <li>📄 Documents</li>
          <li>🎫 Tickets</li>
          <li>📊 Reports</li>
          <li>⚙ Settings</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;