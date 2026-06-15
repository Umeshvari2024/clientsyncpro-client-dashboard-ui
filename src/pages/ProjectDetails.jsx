import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    1: {
      name: "Employee Portal",
      status: "Development",
      manager: "John Smith",
      budget: "₹2,50,000",
      progress: 72,
      team: 12,
      startDate: "01 June 2026",
      endDate: "30 June 2026",
      description:
        "Employee Portal helps employees manage attendance, leave requests, payroll and internal communication.",
    },

    2: {
      name: "CRM System",
      status: "Testing",
      manager: "David Lee",
      budget: "₹3,80,000",
      progress: 85,
      team: 15,
      startDate: "10 May 2026",
      endDate: "25 June 2026",
      description:
        "CRM System helps manage customer interactions, leads, sales pipelines and reports.",
    },

    3: {
      name: "HRMS System",
      status: "Design",
      manager: "Sarah Johnson",
      budget: "₹1,90,000",
      progress: 45,
      team: 8,
      startDate: "15 June 2026",
      endDate: "30 July 2026",
      description:
        "HRMS System manages recruitment, employee records, attendance and payroll processes.",
    },

    4: {
      name: "Client Management",
      status: "Completed",
      manager: "Michael Brown",
      budget: "₹4,20,000",
      progress: 100,
      team: 20,
      startDate: "01 April 2026",
      endDate: "31 May 2026",
      description:
        "Client Management platform helps track clients, contracts, invoices and communication history.",
    },
  };

  const project = projects[id];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <h1 className="page-title">{project.name}</h1>

        <p className="project-description">
          {project.description}
        </p>

        <div className="info-grid">

          <div className="info-box">
            <h4>Status</h4>
            <p>{project.status}</p>
          </div>

          <div className="info-box">
            <h4>Project Manager</h4>
            <p>{project.manager}</p>
          </div>

          <div className="info-box">
            <h4>Budget</h4>
            <p>{project.budget}</p>
          </div>

          <div className="info-box">
            <h4>Team Members</h4>
            <p>{project.team}</p>
          </div>

          <div className="info-box">
            <h4>Start Date</h4>
            <p>{project.startDate}</p>
          </div>

          <div className="info-box">
            <h4>End Date</h4>
            <p>{project.endDate}</p>
          </div>

        </div>

        <h3 className="section-title">Project Progress</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>

        <p className="progress-text">
          {project.progress}% Complete
        </p>

        <h3 className="section-title">👨‍💻 Team Members</h3>

        <div className="team-grid">

          <div className="team-card">
            <h4>John Smith</h4>
            <p>Project Manager</p>
          </div>

          <div className="team-card">
            <h4>David Lee</h4>
            <p>Frontend Developer</p>
          </div>

          <div className="team-card">
            <h4>Sarah Johnson</h4>
            <p>UI/UX Designer</p>
          </div>

          <div className="team-card">
            <h4>Michael Brown</h4>
            <p>Backend Developer</p>
          </div>

        </div>

        <h3 className="section-title">📊 Recent Activities</h3>

        <div className="activity-box">
          <p>✅ UI Design Approved</p>
          <p>✅ Sprint Report Uploaded</p>
          <p>⏳ Testing In Progress</p>
          <p>📄 Documentation Updated</p>
        </div>

        <h3 className="section-title">📁 Deliverables</h3>

        <div className="deliverable-grid">

          <div className="deliverable-card">📄 SRS Document</div>
          <div className="deliverable-card">🎨 UI Design</div>
          <div className="deliverable-card">📊 Progress Report</div>
          <div className="deliverable-card">🧪 Test Cases</div>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;