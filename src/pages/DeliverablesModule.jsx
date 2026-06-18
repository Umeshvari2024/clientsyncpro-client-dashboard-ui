import React, { useState } from "react";
import "../styles/DeliverablesModule.css";

function DeliverablesModule() {

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [deliverableName, setDeliverableName] = useState("");

  const [assignedTo, setAssignedTo] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [priority, setPriority] = useState("Medium");

  const [status, setStatus] = useState("Pending");

  const [message, setMessage] = useState("");

  const [deliverables, setDeliverables] = useState([
    {
      id: 1,
      deliverable: "UI Design",
      assignedTo: "Umeshvari",
      dueDate: "2026-06-20",
      priority: "High",
      status: "Pending",
    },

    {
      id: 2,
      deliverable: "Frontend Development",
      assignedTo: "Rahul",
      dueDate: "2026-06-25",
      priority: "High",
      status: "In Progress",
    },

    {
      id: 3,
      deliverable: "Backend API",
      assignedTo: "Amit",
      dueDate: "2026-06-30",
      priority: "Medium",
      status: "Completed",
    },
  ]);

  const handleSubmit = (e) => {

    e.preventDefault();

  const newDeliverable = {
  id: Math.max(...deliverables.map((d) => d.id), 0) + 1,
  deliverable: deliverableName,
  assignedTo,
  dueDate,
  priority,
  status,
};

setDeliverables([
  ...deliverables,
  newDeliverable,
]);

setMessage(
  "✅ Deliverable Added Successfully!"
);

setDeliverableName("");
setAssignedTo("");
setDueDate("");
setPriority("Medium");
setStatus("Pending");

setShowForm(false);

setTimeout(() => {
  setMessage("");
}, 3000);
};

const handleDelete = (id) => {

  const confirmDelete = window.confirm(
    "Delete this deliverable?"
  );

  if (confirmDelete) {

    const updated = deliverables.filter(
      (item) => item.id !== id
    );

    setDeliverables(updated);
  }
};

const handleDateChange = (
  id,
  newDate
) => {

  const updated = deliverables.map((item) =>
    item.id === id
      ? {
          ...item,
          dueDate: newDate,
        }
      : item
  );

  setDeliverables(updated);
};

const handleStatusChange = (
  id,
  newStatus
) => {

  const updated = deliverables.map((item) =>
    item.id === id
      ? {
          ...item,
          status: newStatus,
        }
      : item
  );

  setDeliverables(updated);
};

const filteredDeliverables =
  deliverables.filter((item) =>
    (item.deliverable || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="deliverables-page">

      <h1 className="page-title">
        📦 Deliverables Module
      </h1>

      <div className="top-bar">

        <input
          type="text"
          placeholder="Search Deliverable..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button
          className="add-btn"
          onClick={() =>
            setShowForm(true)
          }
        >
          + Add Deliverable
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

            <h2>
              Add Deliverable
            </h2>

            <form
              className="deliverable-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Deliverable Name"
                value={deliverableName}
                onChange={(e) =>
                  setDeliverableName(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="text"
                placeholder="Assigned To"
                value={assignedTo}
                onChange={(e) =>
                  setAssignedTo(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setDueDate(
                    e.target.value
                  )
                }
                required
              />
                            <select
                value={priority}
                onChange={(e) =>
                  setPriority(
                    e.target.value
                  )
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

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
              >
                <option value="Pending">
                  Pending
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>

              <button
                type="submit"
                className="save-btn"
              >
                Save Deliverable
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

            </form>

          </div>

        </div>

      )}

     <div className="table-container">

  <div className="table-wrapper">

    <table className="deliverable-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Deliverable</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {filteredDeliverables.map((item) => (

          <tr key={item.id}>

            <td>{item.id}</td>

            <td>{item.deliverable}</td>

            <td>{item.assignedTo}</td>

            <td>
              <input
                type="date"
                value={item.dueDate}
                className="date-input"
                onChange={(e) =>
                  handleDateChange(
                    item.id,
                    e.target.value
                  )
                }
              />
            </td>

            <td>
              <span
                className={`priority ${item.priority.toLowerCase()}`}
              >
                {item.priority}
              </span>
            </td>

            <td>
              <select
                value={item.status}
                className="status-dropdown"
                onChange={(e) =>
                  handleStatusChange(
                    item.id,
                    e.target.value
                  )
                }
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </td>

            <td>
              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(item.id)
                }
              >
                Delete
              </button>
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
</div>
  );
}

export default DeliverablesModule;