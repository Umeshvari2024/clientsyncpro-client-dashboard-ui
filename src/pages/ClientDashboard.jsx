import React from "react";
import "../styles/ClientDashboard.css";

function ClientDashboard() {
  return (
    <div className="dashboard">

      {/* Welcome Banner */}
     <div className="welcome-section">

  <div className="welcome-left">
    <h1>Welcome Back 👋</h1>
    <p>ABC Technologies - Client Project Dashboard</p>

    <div className="welcome-tags">
      <span>🚀 Live Projects</span>
      <span>📊 Real-time Tracking</span>
      <span>🔐 Secure System</span>
    </div>
  </div>

  <div className="welcome-right">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
      alt="dashboard"
    />
  </div>

</div>

      {/* Statistics Cards */}
      <div className="cards">

        <div className="card">
          <h3>📊 Project Status</h3>
          <p>72%</p>
        </div>

        <div className="card">
          <h3>🎯 Milestones</h3>
          <p>8 / 12</p>
        </div>

        <div className="card">
  <h3>👥 Team Members</h3>
  <p>24</p>
</div>

<div className="card">
  <h3>📄 Documents</h3>
  <p>156</p>
</div>

        <div className="card">
          <h3>⚠ Pending Issues</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>✅ Compliance</h3>
          <p>Active</p>
        </div>

      </div>

      {/* Client Profile */}
      <div className="section">
        <h2>Client Information</h2>

        <div className="client-profile">
          <p><strong>Company:</strong> ABC Technologies</p>
          <p><strong>Email:</strong> abc@gmail.com</p>
          <p><strong>Projects:</strong> 5</p>
          <p><strong>Status:</strong> Active</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="section">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
          <div className="action-card">📁 View Projects</div>
          <div className="action-card">📄 Documents</div>
          <div className="action-card">🎫 Raise Ticket</div>
          <div className="action-card">📊 Reports</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="section">
        <h2>Project Progress Timeline</h2>

        <div className="timeline">
          <span>✔ Requirement</span>
          <span>✔ Analysis</span>
          <span>✔ Design</span>
          <span>✔ Development</span>
          <span>⏳ Testing</span>
          <span>UAT</span>
          <span>Deployment</span>
        </div>
      </div>

      {/* Recent Projects */}
     <div className="section">
  <h2>Recent Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <h3>Employee Portal</h3>
      <p>Status : Development</p>

      <div className="progress-bar">
        <div className="progress-fill" style={{width:"72%"}}></div>
      </div>

      <span>72% Complete</span>
    </div>

    <div className="project-card">
      <h3>CRM System</h3>
      <p>Status : Testing</p>

      <div className="progress-bar">
        <div className="progress-fill" style={{width:"85%"}}></div>
      </div>

      <span>85% Complete</span>
    </div>

    <div className="project-card">
      <h3>HRMS System</h3>
      <p>Status : Design</p>

      <div className="progress-bar">
        <div className="progress-fill" style={{width:"45%"}}></div>
      </div>

      <span>45% Complete</span>
    </div>

  </div>
</div>

<div className="section">
  <h2>Upcoming Milestones</h2>

  <div className="projects-grid">

    <div className="project-card">
      <h3>UI Design Approval</h3>
      <p>Due: 15 June 2026</p>
    </div>

    <div className="project-card">
      <h3>Development Complete</h3>
      <p>Due: 22 June 2026</p>
    </div>

    <div className="project-card">
      <h3>UAT Testing</h3>
      <p>Due: 28 June 2026</p>
    </div>

  </div>
</div>

      {/* Deliverables */}
      <div className="section">
        <h2>Recent Deliverables</h2>

        <div className="deliverables">
          <div className="deliverable">📄 SRS Document</div>
          <div className="deliverable">🎨 UI Designs</div>
          <div className="deliverable">📊 Sprint Report</div>
          <div className="deliverable">🧪 Test Cases</div>
        </div>
      </div>

      <div className="section">
  <h2>Recent Activities</h2>

  <ul>
    <li>📄 New BRD uploaded</li>
    <li>✅ Compliance Report Submitted</li>
    <li>🎫 Ticket #102 Resolved</li>
    <li>📊 Sprint Progress Updated</li>
  </ul>
</div>

      {/* Bottom Section */}
      <div className="bottom-sections">

        <div className="section small">
          <h2>Compliance Summary</h2>

          <ul>
            <li>Daily Reports Submitted : 24</li>
            <li>Pending Reports : 2</li>
            <li>Compliance Score : 92%</li>
          </ul>
        </div>

        <div className="section small">
          <h2>Notifications</h2>

          <ul>
            <li>Project Review Meeting - 4 PM</li>
            <li>New Deliverable Uploaded</li>
            <li>Compliance Reminder Sent</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default ClientDashboard;