import React, { useState } from "react";
import "../styles/ClientList.css";

function ClientList() {
  const [search, setSearch] = useState("");

  const clients = [
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
  ];

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="client-page">

      {/* BACKGROUND DECOR */}
      <div className="bg-blur"></div>

     <div className="client-header">
  <h1>👥 Client Management Dashboard</h1>

  <p className="sub-text">
    A powerful dashboard to manage clients, track performance, monitor status,
    and build strong business relationships in one place.
  </p>
</div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="client-grid">
        {filteredClients.map((client) => (
          <div className="client-card" key={client.id}>

            <div className="card-top">
              <h3>{client.name}</h3>
              <span
                className={
                  client.status === "Active"
                    ? "status active"
                    : "status inactive"
                }
              >
                {client.status}
              </span>
            </div>

            <p>🏢 {client.company}</p>
            <p>📧 {client.email}</p>
            <p>📞 {client.phone}</p>

            <button className="view-btn">
              View Client
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;