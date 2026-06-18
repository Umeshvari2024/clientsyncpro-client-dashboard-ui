import React, { useState } from "react";
import "../styles/MilestoneTracking.css";

function MilestoneTracking() {

 const [showForm, setShowForm] = useState(false);
const [search, setSearch] = useState("");

const [name, setName] = useState("");
const [dueDate, setDueDate] = useState("");
const [progress, setProgress] = useState("");
const [status, setStatus] = useState("Pending");
const [priority, setPriority] = useState("Medium");

const [message, setMessage] = useState("");

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      name: "UI Design",
      dueDate: "20 Jun 2026",
      progress: 100,
      status: "Completed",
      priority: "High",
    },

    {
      id: 2,
      name: "Frontend Development",
      dueDate: "25 Jun 2026",
      progress: 70,
      status: "In Progress",
      priority: "High",
    },

    {
      id: 3,
      name: "Backend Integration",
      dueDate: "30 Jun 2026",
      progress: 40,
      status: "Pending",
      priority: "Medium",
    },
        {
      id: 4,
      name: "Testing & QA",
      dueDate: "05 Jul 2026",
      progress: 20,
      status: "Pending",
      priority: "Low",
    },

    {
      id: 5,
      name: "Database Schema Design",
      dueDate: "02 Jul 2026",
      progress: 55,
      status: "In Progress",
      priority: "Medium",
    },

    {
      id: 6,
      name: "Testing & QA Automation",
      dueDate: "05 Jul 2026",
      progress: 25,
      status: "Pending",
      priority: "Low",
    },

    {
      id: 7,
      name: "Deployment & DevOps Setup",
      dueDate: "08 Jul 2026",
      progress: 10,
      status: "Pending",
      priority: "High",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMilestone = {
      id: Date.now(),
      name,
      dueDate,
      progress: Number(progress),
      status,
      priority,
    };

    setMilestones([
      ...milestones,
      newMilestone,
    ]);
        setMessage(
      "✅ Milestone Added Successfully!"
    );

    setName("");
    setDueDate("");
    setProgress("");
    setStatus("Pending");
    setPriority("Medium");

    setShowForm(false);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
const handleExtendTimeline = (
  id,
  newDate
) => {

  const updatedMilestones =
    milestones.map((item) =>
      item.id === id
        ? {
            ...item,
            dueDate: newDate,
          }
        : item
    );

  setMilestones(updatedMilestones);

};

const handleDelete = (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this milestone?"
  );

  if (confirmDelete) {

    const updated = milestones.filter(
      (item) => item.id !== id
    );

    setMilestones(updated);
  }
};

  const filteredMilestones =
    milestones.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="milestone-page">

      <h1 className="page-title">
        🎯 Project Timeline & Milestones
      </h1>

      <div className="top-actions">

        <input
          type="text"
          placeholder="Search Milestone..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Milestone
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

            <h2>Add New Milestone</h2>

            <form
              className="milestone-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Milestone Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

              <input
         type="date"
          value={dueDate}
         onChange={(e) =>
         setDueDate(e.target.value)
            }
              required
            />

              <input
                type="number"
                placeholder="Progress %"
                value={progress}
                onChange={(e) =>
                  setProgress(e.target.value)
                }
                required
              />              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >
                <option value="Completed">
                  Completed
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Pending">
                  Pending
                </option>

              </select>

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              >
                <option value="High">
                  High Priority
                </option>

                <option value="Medium">
                  Medium Priority
                </option>

                <option value="Low">
                  Low Priority
                </option>

              </select>

              <button
                type="submit"
                className="save-btn"
              >
                Save Milestone
              </button>

            </form>

          </div>

        </div>

      )}

     <div className="table-container">

  <table className="milestone-table">

    <thead>
      <tr>
        <th>ID</th>
        <th>Milestone Name</th>
        <th>Status</th>
        <th>Priority</th>
        <th>Progress</th>
        <th>Due Date</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>

      {filteredMilestones.map((m, index) => (

        <tr key={m.id}>

          <td>MS-{index + 1}</td>

          <td className="milestone-name">
            {m.name}
          </td>

          <td>
            <span
              className={`status ${m.status
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              {m.status}
            </span>
          </td>

          <td>
            <span
              className={`priority ${m.priority.toLowerCase()}`}
            >
              {m.priority}
            </span>
          </td>

          <td>
            <strong>{m.progress}%</strong>
          </td>

          <td className="due-date-cell">
            {m.dueDate}
          </td>

          <td>
            <div className="actions">

              <button
                className="extend-btn"
                onClick={() =>
                  document
                    .getElementById(`date-${m.id}`)
                    .showPicker()
                }
              >
                📅 Extend
              </button>

              <input
                id={`date-${m.id}`}
                type="date"
                className="hidden-date"
                onChange={(e) =>
                  handleExtendTimeline(
                    m.id,
                    e.target.value
                  )
                }
              />

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(m.id)
                }
              >
                🗑 Delete
              </button>

            </div>
          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>
    </div>
  );
}

export default MilestoneTracking;