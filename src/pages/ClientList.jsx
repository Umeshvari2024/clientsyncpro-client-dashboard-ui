import React, { useState } from "react";
import "../styles/ClientList.css";

function ClientList() {

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Active");

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "John Smith",
      company: "ABC Technologies",
      email: "john@abc.com",
      phone: "+91 9876543210",
      status: "Active",
    },

    {
      id: 2,
      name: "Sarah Johnson",
      company: "XYZ Solutions",
      email: "sarah@xyz.com",
      phone: "+91 9876501234",
      status: "Active",
    },

    {
      id: 3,
      name: "David Lee",
      company: "Global Tech",
      email: "david@global.com",
      phone: "+91 9876540000",
      status: "Inactive",
    },

    {
      id: 4,
      name: "Michael Brown",
      company: "NextGen Systems",
      email: "michael@nextgen.com",
      phone: "+91 9876511111",
      status: "Active",
    },
  ]);

  const totalClients = clients.length;

  const activeClients =
    clients.filter(
      (client) => client.status === "Active"
    ).length;

  const inactiveClients =
    clients.filter(
      (client) => client.status === "Inactive"
    ).length;
      const resetForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setStatus("Active");
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {

      const updatedClients =
        clients.map((client) =>
          client.id === editingId
            ? {
                ...client,
                name,
                company,
                email,
                phone,
                status,
              }
            : client
        );

      setClients(updatedClients);

    } else {

      const newClient = {
        id: Date.now(),
        name,
        company,
        email,
        phone,
        status,
      };

      setClients([
        ...clients,
        newClient,
      ]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleEdit = (client) => {

    setEditingId(client.id);

    setName(client.name);
    setCompany(client.company);
    setEmail(client.email);
    setPhone(client.phone);
    setStatus(client.status);

    setShowForm(true);
  };

  const handleDelete = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this client?"
      );

    if (confirmDelete) {

      const updatedClients =
        clients.filter(
          (client) => client.id !== id
        );

      setClients(updatedClients);
    }
  };

  const handleView = (client) => {
    setSelectedClient(client);
  };

  const filteredClients =
    clients.filter((client) =>
      client.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="client-page">

      <div className="bg-blur"></div>

      <div className="client-header">

        <h1>
          👥 Client Management Dashboard
        </h1>

        <p className="sub-text">
          Manage clients, track engagement,
          monitor active accounts and
          maintain strong business
          relationships.
        </p>

      </div>
            {/* STATS CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <h3>{clients.length}</h3>
          <p>Total Clients</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              clients.filter(
                (client) =>
                  client.status === "Active"
              ).length
            }
          </h3>
          <p>Active Clients</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              clients.filter(
                (client) =>
                  client.status === "Inactive"
              ).length
            }
          </h3>
          <p>Inactive Clients</p>
        </div>

      </div>

      {/* SEARCH + ADD */}

      <div className="top-actions">

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search Client..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <button
          className="add-btn"
          onClick={() =>
            setShowForm(true)
          }
        >
          + Add Client
        </button>

      </div>

      {/* CLIENT GRID */}

      <div className="client-grid">

        {filteredClients.map(
          (client) => (

            <div
              className="client-card"
              key={client.id}
            >

              <div className="card-top">

                <h3>
                  {client.name}
                </h3>

                <span
                  className={
                    client.status ===
                    "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {client.status}
                </span>

              </div>

              <p>
                🏢 {client.company}
              </p>

              <p>
                📧 {client.email}
              </p>

              <p>
                📞 {client.phone}
              </p>

              <div className="card-actions">

                <button
                  className="view-btn"
                  onClick={() =>
                    handleView(client)
                  }
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(client)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(
                      client.id
                    )
                  }
                >
                  Delete
                </button>

              </div>

            </div>))}
                  </div>

      {/* ADD / EDIT CLIENT MODAL */}

      {showForm && (

        <div className="modal-overlay">

          <div className="modal-box">

            <h2>
              {editingId
                ? "✏ Edit Client"
                : "➕ Add Client"}
            </h2>

            <form
              className="client-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Client Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) =>
                  setCompany(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                required
              />

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
              >
                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

              <button
                type="submit"
                className="save-btn"
              >
                {editingId
                  ? "Update Client"
                  : "Save Client"}
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
              >
                Cancel
              </button>

            </form>

          </div>

        </div>

      )}

      {/* VIEW CLIENT MODAL */}

      {selectedClient && (

        <div className="modal-overlay">

          <div className="modal-box">

            <h2>
              👤 Client Details
            </h2>
                        <div className="client-details">

              <p>
                <strong>ID:</strong>{" "}
                {selectedClient.id}
              </p>

              <p>
                <strong>Name:</strong>{" "}
                {selectedClient.name}
              </p>

              <p>
                <strong>Company:</strong>{" "}
                {selectedClient.company}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {selectedClient.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {selectedClient.phone}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    selectedClient.status ===
                    "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {selectedClient.status}
                </span>
              </p>

            </div>

            <button
              className="close-btn"
              onClick={() =>
                setSelectedClient(null)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ClientList;