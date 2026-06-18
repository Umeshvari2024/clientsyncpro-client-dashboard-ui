import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`sidebar ${open ? "show" : ""}`}>
        <div className="logo-section">
          <h2>🚀 ClientSync</h2>
          <p>Project Management CRM</p>
        </div>

        <ul>
          <li>
            <Link to="/">
              🏠 Dashboard
            </Link>
          </li>

          <li>
            <Link to="/clients">
              👥 Clients
            </Link>
          </li>

          <li>
            <Link to="/projects">
              📁 Projects
            </Link>
          </li>

          <li>
            <Link to="/milestones">
              🎯 Milestones
            </Link>
          </li>

          <li>
            <Link to="/compliance">
              🛡 Compliance Dashboard
            </Link>
          </li>

          <li>
            <Link to="/deliverables">
              📦 Deliverables
            </Link>
          </li>

          <li>
            <Link to="/documents">
              📄 Documents
            </Link>
          </li>

          <li>
            <Link to="/tickets">
              🎫 Tickets
            </Link>
          </li>

          <li>
            <Link to="/reports">
              📊 Reports
            </Link>
          </li>

          <li>
            <Link to="/settings">
              ⚙ Settings
            </Link>
          </li>
        </ul>

        <div className="sidebar-footer">
          <p>ClientSync Pro v1.0</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;