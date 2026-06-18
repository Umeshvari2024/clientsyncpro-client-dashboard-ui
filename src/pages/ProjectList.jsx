import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

function ProjectList() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const [showForm, setShowForm] = useState(false);

  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    budget: "",
    deadline: "",
    priority: "Medium",
    status: "Pending",
    manager: "",
    team: "",
    progress: 0,
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Employee Portal",
      client: "Infosys",
      budget: "₹5,00,000",
      deadline: "30 Jun 2026",
      priority: "High",
      status: "Development",
      progress: 72,
      manager: "John Smith",
      team: 8,
    },
    {
      id: 2,
      name: "CRM System",
      client: "TCS",
      budget: "₹8,50,000",
      deadline: "15 Jul 2026",
      priority: "Medium",
      status: "Testing",
      progress: 85,
      manager: "David Lee",
      team: 12,
    },
    {
      id: 3,
      name: "HRMS System",
      client: "Wipro",
      budget: "₹4,00,000",
      deadline: "10 Aug 2026",
      priority: "Low",
      status: "Pending",
      progress: 0,
      manager: "Sarah Johnson",
      team: 6,
    },
    {
      id: 4,
      name: "Client Management",
      client: "HCL",
      budget: "₹12,00,000",
      deadline: "05 Jul 2026",
      priority: "High",
      status: "Completed",
      progress: 100,
      manager: "Michael Brown",
      team: 15,
    },
    {
      id: 5,
      name: "E-Commerce Platform",
      client: "Amazon",
      budget: "₹20,00,000",
      deadline: "25 Aug 2026",
      priority: "High",
      status: "Development",
      progress: 60,
      manager: "Amit Patil",
      team: 10,
    },
    {
      id: 6,
      name: "School Management",
      client: "EduTech",
      budget: "₹7,00,000",
      deadline: "18 Jul 2026",
      priority: "Medium",
      status: "Testing",
      progress: 78,
      manager: "Neha Sharma",
      team: 9,
    },
  ]);

  const totalProjects = projects.length;

  const completedProjects =
    projects.filter(
      (p) => p.status === "Completed"
    ).length;

  const pendingProjects =
    projects.filter(
      (p) => p.status === "Pending"
    ).length;

  const inProgressProjects =
    projects.filter(
      (p) =>
        p.status === "Development" ||
        p.status === "Testing"
    ).length;

  const addProject = () => {

    if (
      !newProject.name ||
      !newProject.client ||
      !newProject.manager
    ) {
      alert("Please fill required fields");
      return;
    }

    const project = {
      id: projects.length + 1,
      ...newProject,
    };

    setProjects([
      ...projects,
      project,
    ]);

    setShowForm(false);

    setNewProject({
      name: "",
      client: "",
      budget: "",
      deadline: "",
      priority: "Medium",
      status: "Pending",
      manager: "",
      team: "",
      progress: 0,
    });

    alert(
      "✅ Project Added Successfully"
    );
  };

  const deleteProject = (id) => {

    const confirmDelete =
      window.confirm(
        "⚠️ This project will be permanently deleted.\n\nDo you want to continue?"
      );

    if (confirmDelete) {

      setProjects(
        projects.filter(
          (project) =>
            project.id !== id
        )
      );

      alert(
        "✅ Project deleted successfully!"
      );
    }
  };

  const filtered =
    projects.filter((p) => {

      return (
        (status === "All Status" ||
          p.status === status) &&
        p.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    });
      return (
    <div className="project-page">

      <div className="content">

        <div className="page-header">

          <h1>
            📁 Enterprise Project Dashboard
          </h1>

          <p>
            Manage Client Projects,
            Teams, Budgets and
            Deadlines
          </p>

        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>{totalProjects}</h2>
            <p>Total Projects</p>
          </div>

          <div className="dashboard-card">
            <h2>{inProgressProjects}</h2>
            <p>In Progress</p>
          </div>

          <div className="dashboard-card">
            <h2>{pendingProjects}</h2>
            <p>Pending</p>
          </div>

          <div className="dashboard-card">
            <h2>{completedProjects}</h2>
            <p>Completed</p>
          </div>

        </div>

        <div className="add-project-btn">

          <button
            onClick={() =>
              setShowForm(true)
            }
          >
            ➕ Add Project
          </button>

        </div>

        {showForm && (

          <div className="project-modal">

            <div className="project-form">

              <h2>
                Add New Project
              </h2>

              <input
                type="text"
                placeholder="Project Name"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    name:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Client Name"
                value={newProject.client}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    client:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Manager Name"
                value={newProject.manager}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    manager:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Budget"
                value={newProject.budget}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    budget:
                      e.target.value,
                  })
                }
              />

              <input
                type="date"
                value={
                  newProject.deadline
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    deadline:
                      e.target.value,
                  })
                }
              />

              <input
                type="number"
                placeholder="Team Members"
                value={newProject.team}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    team:
                      e.target.value,
                  })
                }
              />

              <select
                value={
                  newProject.priority
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    priority:
                      e.target.value,
                  })
                }
              >
                <option>
                  High
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Low
                </option>

              </select>

              <div className="form-buttons">

                <button
                  className="save-btn"
                  onClick={
                    addProject
                  }
                >
                  Save Project
                </button>

                <button
                  className="cancel-btn"
                  onClick={() =>
                    setShowForm(
                      false
                    )
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )}

        <div className="search-filter">

          <input
            type="text"
            placeholder="Search Project..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
          >
            <option>
              All Status
            </option>

            <option>
              Development
            </option>

            <option>
              Testing
            </option>

            <option>
              Pending
            </option>

            <option>
              Completed
            </option>

          </select>

        </div>

       <div className="project-grid">

  {filtered.map((p) => (

    <div
      className="project-card"
      key={p.id}
    >

              <h3>{p.name}</h3>

              <p>
                🏢 Client :
                <strong>
                  {" "}
                  {p.client}
                </strong>
              </p>

              <p>
                👨‍💼 Manager :
                <strong>
                  {" "}
                  {p.manager}
                </strong>
              </p>

              <p>
                👥 Team :
                <strong>
                  {" "}
                  {p.team} Members
                </strong>
              </p>

              <p>
                💰 Budget :
                <strong>
                  {" "}
                  {p.budget}
                </strong>
              </p>

              <p>
                📅 Deadline :
                <strong>
                  {" "}
                  {p.deadline}
                </strong>
              </p>

              <p>
                ⚡ Priority :
                <strong>
                  {" "}
                  {p.priority}
                </strong>
              </p>

              <p>
                📌 Status :

                <span
                  className={`status ${p.status.toLowerCase()}`}
                >
                  {p.status}
                </span>

              </p>

              <div className="progress">

                <div
                  style={{
                    width: `${p.progress}%`,
                  }}
                ></div>

              </div>

              <span className="progress-text">
                {p.progress}% Completed
              </span>

              <div className="action-buttons">

                <Link
  to={`/project-details/${p.id}`}
  state={{ project: p }}
>
  <button className="view-btn">
    View Details
  </button>
</Link>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteProject(p.id)
                  }
                >
                  Delete Project
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ProjectList;