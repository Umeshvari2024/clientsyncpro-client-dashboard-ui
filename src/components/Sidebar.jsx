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
☰ </button>

```
  <div className={`sidebar ${open ? "show" : ""}`}>
    <h2>ClientSync Pro</h2>

    <ul>
      <li>
        <Link to="/">🏠 Dashboard</Link>
      </li>

      <li>👥 Clients</li>

      <li>
        <Link to="/projects">📁 Projects</Link>
      </li>

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
