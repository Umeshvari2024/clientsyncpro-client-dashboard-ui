
import React from "react";
import "../styles/ComplianceDashboard.css";

function ComplianceDashboard() {

  const complianceData = [
    {
      id: 1,
      title: "Policy Compliance",
      status: "Completed",
      progress: 100,
    },
    {
      id: 2,
      title: "Security Audit",
      status: "In Progress",
      progress: 75,
    },
    {
      id: 3,
      title: "Document Verification",
      status: "Pending",
      progress: 40,
    },
    {
      id: 4,
      title: "Risk Assessment",
      status: "Pending",
      progress: 25,
    },
    {
      id: 5,
      title: "Data Privacy Compliance",
      status: "Completed",
      progress: 100,
    },
    {
      id: 6,
      title: "Employee Training Audit",
      status: "In Progress",
      progress: 80,
    },
    {
      id: 7,
      title: "Vendor Compliance Review",
      status: "Pending",
      progress: 35,
    },
    {
      id: 8,
      title: "ISO Standards Verification",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 9,
      title: "Internal Control Review",
      status: "Completed",
      progress: 100,
    },
    {
      id: 10,
      title: "Financial Compliance Check",
      status: "Pending",
      progress: 20,
    },
    {
      id: 11,
      title: "Cyber Security Assessment",
      status: "In Progress",
      progress: 70,
    },
    {
      id: 12,
      title: "Regulatory Documentation",
      status: "Completed",
      progress: 100,
    },
  ];

  return (
    <div className="compliance-page">

      <div className="header-section">
        <h1>🛡 Compliance Dashboard</h1>

        <p>
          Monitor compliance activities, track audit status,
          manage risks and ensure regulatory requirements
          across the organization.
        </p>
      </div>

      {/* Statistics Cards */}

      <div className="stats-grid">

        <div className="stat-card">
          <h2>12</h2>
          <p>Total Audits</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Pending</p>
        </div>

      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        <div className="summary-card">
          <h3>Last Audit Date</h3>
          <p>15 Jun 2026</p>
        </div>

        <div className="summary-card">
          <h3>Compliance Score</h3>
          <p>92%</p>
        </div>

        <div className="summary-card">
          <h3>Critical Risks</h3>
          <p>2 Open Issues</p>
        </div>

      </div>

      {/* Compliance Cards */}

      <div className="compliance-grid">

        {complianceData.map((item) => (

          <div className="compliance-card" key={item.id}>

            <div className="card-header">

              <h3>{item.title}</h3>

              <span
                className={`status ${item.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.status}
              </span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              ></div>

            </div>

            <p className="progress-text">
              {item.progress}% Complete
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ComplianceDashboard;

