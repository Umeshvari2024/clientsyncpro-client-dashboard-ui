import React from "react";
import "../styles/MilestoneTracking.css";

function MilestoneTracking() {
  const milestones = [
    {
      id: 1,
      name: "UI Design",
      dueDate: "20 Jun 2026",
      progress: 100,
      status: "Completed",
    },
    {
      id: 2,
      name: "Frontend Development",
      dueDate: "25 Jun 2026",
      progress: 70,
      status: "In Progress",
    },
    {
      id: 3,
      name: "Backend Integration",
      dueDate: "30 Jun 2026",
      progress: 40,
      status: "Pending",
    },
    {
      id: 4,
      name: "Testing & QA",
      dueDate: "05 Jul 2026",
      progress: 20,
      status: "Pending",
    },
     {
    id: 5,
    name: "Database Schema Design",
    dueDate: "02 Jul 2026",
    progress: 55,
    status: "In Progress",
  },
  {
    id: 6,
    name: "Testing & QA Automation",
    dueDate: "05 Jul 2026",
    progress: 25,
    status: "Pending",
  },
  {
    id: 7,
    name: "Deployment & DevOps Setup",
    dueDate: "08 Jul 2026",
    progress: 10,
    status: "Pending",
  },
  ];

  return (
    <div className="milestone-page">

      <h1 className="page-title">🎯 Milestone Tracking</h1>

      <div className="milestone-grid">

        {milestones.map((m) => (
          <div className="milestone-card" key={m.id}>

            <div className="milestone-header">
              <h3>{m.name}</h3>

              <span
                className={`status ${m.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {m.status}
              </span>
            </div>

            <p className="due-date">📅 Due Date: {m.dueDate}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${m.progress}%` }}
              ></div>
            </div>

            <p className="progress-text">{m.progress}% Complete</p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default MilestoneTracking;