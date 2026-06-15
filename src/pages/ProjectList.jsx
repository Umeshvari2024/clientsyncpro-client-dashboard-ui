import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

function ProjectList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const projects = [
    {
      id: 1,
      name: "Employee Portal",
      status: "Development",
      progress: 72,
      manager: "John Smith",
      team: 8,
    },
    {
      id: 2,
      name: "CRM System",
      status: "Testing",
      progress: 85,
      manager: "David Lee",
      team: 12,
    },
    {
      id: 3,
      name: "HRMS System",
      status: "Design",
      progress: 45,
      manager: "Sarah Johnson",
      team: 6,
    },
    {
      id: 4,
      name: "Client Management",
      status: "Completed",
      progress: 100,
      manager: "Michael Brown",
      team: 15,
    },
    {
      id: 5,
      name: "E-Commerce Platform",
      status: "Development",
      progress: 60,
      manager: "Amit Patil",
      team: 10,
    },
    {
      id: 6,
      name: "School Management System",
      status: "Testing",
      progress: 78,
      manager: "Neha Sharma",
      team: 9,
    },
  ];

  const filtered = projects.filter((p) => {
    return (
      (status === "All Status" || p.status === status) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="project-page">

      <div className="overlay"></div>

      <div className="content">

        <div className="page-header">
          <h1>📁 Project Dashboard</h1>
          <p>Manage all enterprise projects in one place</p>
        </div>

        <div className="search-filter">
          <input
            placeholder="Search project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>All Status</option>
            <option>Development</option>
            <option>Testing</option>
            <option>Design</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="project-grid">
          {filtered.map((p) => (
            <div className="project-card" key={p.id}>

              <h3>{p.name}</h3>

              <p>👨‍💼 Manager: {p.manager}</p>
              <p>👥 Team: {p.team} Members</p>

              <div className="progress">
                <div style={{ width: `${p.progress}%` }}></div>
              </div>

              <span>{p.progress}% Completed</span>

              <Link to={`/project-details/${p.id}`}>
                <button>View Details</button>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectList;