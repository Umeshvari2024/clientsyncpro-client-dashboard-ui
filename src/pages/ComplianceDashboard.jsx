import React, { useState } from "react";
import "../styles/ComplianceDashboard.css";

function ComplianceDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const [progress, setProgress] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [message, setMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const handleDelete = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this record?"
  );

  if (confirmDelete) {
    const updatedData = complianceData.filter(
      (item) => item.id !== id
    );

    setComplianceData(updatedData);

    setDeleteMessage("🗑 Record deleted successfully!");

    setTimeout(() => {
      setDeleteMessage("");
    }, 2000);
  }
};

  const [complianceData, setComplianceData] = useState([
    
    
    {
      id: 101,
      title: "ISO 27001 Security Compliance",
      status: "Completed",
      progress: 100,
      assignedTo: "John Smith",
      dueDate: "2026-07-10",
    },
    {
      id: 102,
      title: "GDPR Data Protection Audit",
      status: "In Progress",
      progress: 75,
      assignedTo: "Sarah Wilson",
      dueDate: "2026-07-15",
    },
    {
      id: 103,
      title: "Employee Policy Verification",
      status: "Pending",
      progress: 40,
      assignedTo: "David Brown",
      dueDate: "2026-07-20",
    },
    {
      id: 104,
      title: "Risk Assessment Review",
      status: "Pending",
      progress: 25,
      assignedTo: "Emma Davis",
      dueDate: "2026-07-25",
    },
  ]);
    const handleSubmit = (e) => {
    e.preventDefault();
    

    const newCompliance = {
      id:
        complianceData.length > 0
          ? complianceData[complianceData.length - 1].id + 1
          : 101,
      title,
      status,
      progress: Number(progress),
      assignedTo,
      dueDate,
    };

    setComplianceData((prev) => [...prev, newCompliance]);

    setMessage("✅ Compliance Added Successfully!");

    setTitle("");
    setStatus("Pending");
    setProgress("");
    setAssignedTo("");
    setDueDate("");
    setShowForm(false);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const filteredData = complianceData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  

  const totalAudits = complianceData.length;

  const completedCount = complianceData.filter(
    (item) => item.status === "Completed"
  ).length;

  const progressCount = complianceData.filter(
    (item) => item.status === "In Progress"
  ).length;

  const pendingCount = complianceData.filter(
    (item) => item.status === "Pending"
  ).length; 
   return (
    <div className="compliance-page">

      <div className="header-section">
        <h1>🛡 Compliance Dashboard</h1>

        <p>
          Monitor compliance activities, audits,
          risk management and regulatory requirements.
        </p>
      </div>

      <div className="top-action">
        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Compliance
        </button>
      </div>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header">
              <h2>Add Compliance</h2>

              <button
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>
                        <form
              className="compliance-form"
              onSubmit={handleSubmit}>

                
              <div className="form-group">
                <label>Compliance Title</label>
                

                <input
                  type="text"
                  placeholder="Enter Compliance Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Status</label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <div className="form-group">
                <label>Assigned To</label>

                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Due Date</label>

                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>
              

              <div className="form-group">
                <label>Progress (%)</label>

                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Enter Progress"
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="save-btn"
              >
                Save Compliance
              </button>
            </form>

          </div>
        </div>
      )}
            <div className="stats-grid">

        <div className="stat-card">
          <h2>{totalAudits}</h2>
          <p>Total Audits</p>
        </div>

        <div className="stat-card">
          <h2>{completedCount}</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h2>{progressCount}</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
          <h2>{pendingCount}</h2>
          <p>Pending</p>
        </div>

      </div>
            <div className="table-container">
                

        <div className="table-header">
          <h2>Compliance Records</h2>

          <input
            type="text"
            className="search-box"
            placeholder="Search Compliance..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="compliance-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>

     <tbody>
  {filteredData.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>

      <td>{item.title}</td>

      <td>
        <span
          className={`status ${item.status
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          {item.status}
        </span>
      </td>
      

      <td>{item.progress}%</td>

      <td>{item.assignedTo}</td>

      <td>{item.dueDate}</td>
      <td>
  <button
    className="delete-btn"
    onClick={() => handleDelete(item.id)}
  >
    🗑 Delete
  </button>
</td>
    </tr>
  ))}
</tbody>
</table>

</div>
</div>
);
}

export default ComplianceDashboard;