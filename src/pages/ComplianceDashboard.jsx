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
  ];

  return (
    <div className="compliance-page">

      <div className="header-section">
        <h1>🛡 Compliance Dashboard</h1>

        <p>
          Monitor compliance activities, track audit status,
          manage risks and ensure regulatory requirements.
        </p>
      </div>

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