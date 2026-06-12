import React from "react";
import "../styles/Project.css";

function ProjectList() {
  const projects = [
    { id: 1, name: "Employee Portal", status: "Development", progress: 72 },
    { id: 2, name: "CRM System", status: "Testing", progress: 85 },
    { id: 3, name: "HRMS System", status: "Design", progress: 45 },
    { id: 4, name: "Client Management", status: "Completed", progress: 100 },
  ];

  return (
    <div className="project-page">
      <h1>📁 Project Listing</h1>

      <div className="search-filter">
        <input type="text" placeholder="Search Project..." />

        <select>
          <option>All Status</option>
          <option>Development</option>
          <option>Testing</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-box" key={project.id}>
            <h3>{project.name}</h3>

            <p>
              <strong>Status:</strong> {project.status}
            </p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <span>{project.progress}% Complete</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;