import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import jsPDF from "jspdf";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state?.project;

  const [isEditing, setIsEditing] =
    useState(false);

  const [editedProject, setEditedProject] =
    useState(
      project || {
        name: "",
        client: "",
        manager: "",
        budget: "",
        priority: "",
        status: "",
        progress: 0,
        team: 0,
        deadline: "",
      }
    );

  if (!project) {
    return (
      <div className="details-page">
        <div className="details-card">
          <h2>
            ❌ Project Not Found
          </h2>

          <button
            className="back-btn"
            onClick={() =>
              navigate("/projects")
            }
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const downloadReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "Project Report",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Project Name : ${editedProject.name}`,
      20,
      40
    );

    doc.text(
      `Client : ${editedProject.client}`,
      20,
      50
    );

    doc.text(
      `Manager : ${editedProject.manager}`,
      20,
      60
    );

    doc.text(
      `Budget : ${editedProject.budget}`,
      20,
      70
    );

    doc.text(
      `Priority : ${editedProject.priority}`,
      20,
      80
    );

    doc.text(
      `Status : ${editedProject.status}`,
      20,
      90
    );

    doc.text(
      `Team Members : ${editedProject.team}`,
      20,
      100
    );

    doc.text(
      `Deadline : ${editedProject.deadline}`,
      20,
      110
    );

    doc.text(
      `Progress : ${editedProject.progress}%`,
      20,
      120
    );

    doc.save(
      `${editedProject.name}.pdf`
    );
  };

  const saveChanges = () => {
    alert(
      "✅ Project Updated Successfully"
    );

    setIsEditing(false);
  };

  return (
    <div className="details-page">

      <div className="details-card">

        <div className="header-actions">

          <h1 className="page-title">
            {editedProject.name}
          </h1>

          <div>

            <button
              className="edit-btn"
              onClick={() =>
                setIsEditing(
                  !isEditing
                )
              }
            >
              ✏️ Edit
            </button>

            <button
              className="download-btn"
              onClick={
                downloadReport
              }
            >
              📥 Download PDF
            </button>

          </div>

        </div>

        <p className="project-description">
          Complete Project
          Information Dashboard
        </p>

        {isEditing && (

          <div className="edit-form">

            <input
              type="text"
              value={
                editedProject.name
              }
              placeholder="Project Name"
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  name:
                    e.target.value,
                })
              }
            />

            <input
              type="text"
              value={
                editedProject.client
              }
              placeholder="Client"
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  client:
                    e.target.value,
                })
              }
            />         
               <input
              type="text"
              value={
                editedProject.manager
              }
              placeholder="Manager"
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  manager:
                    e.target.value,
                })
              }
            />

            <input
              type="text"
              value={
                editedProject.budget
              }
              placeholder="Budget"
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  budget:
                    e.target.value,
                })
              }
            />

            <input
              type="number"
              value={
                editedProject.team
              }
              placeholder="Team"
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  team:
                    e.target.value,
                })
              }
            />

            <input
              type="date"
              value={
                editedProject.deadline
              }
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  deadline:
                    e.target.value,
                })
              }
            />

            <select
              value={
                editedProject.priority
              }
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  priority:
                    e.target.value,
                })
              }
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select
              value={
                editedProject.status
              }
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  status:
                    e.target.value,
                })
              }
            >
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

            <input
              type="number"
              value={
                editedProject.progress
              }
              placeholder="Progress"
              onChange={(e) =>
                setEditedProject({
                  ...editedProject,
                  progress:
                    e.target.value,
                })
              }
            />

            <button
              className="save-btn"
              onClick={
                saveChanges
              }
            >
              💾 Save Changes
            </button>

          </div>

        )}

        <h3 className="section-title">
          📋 Project Details
        </h3>

        <table className="details-table">

          <tbody>

            <tr>
              <th>
                Project Name
              </th>

              <td>
                {
                  editedProject.name
                }
              </td>
            </tr>

            <tr>
              <th>
                Client
              </th>

              <td>
                {
                  editedProject.client
                }
              </td>
            </tr>

            <tr>
              <th>
                Manager
              </th>

              <td>
                {
                  editedProject.manager
                }
              </td>
            </tr>

            <tr>
              <th>
                Budget
              </th>

              <td>
                {
                  editedProject.budget
                }
              </td>
            </tr>

            <tr>
              <th>
                Team Members
              </th>

              <td>
                {
                  editedProject.team
                }
              </td>
            </tr>

            <tr>
              <th>
                Deadline
              </th>

              <td>
                {
                  editedProject.deadline
                }
              </td>
            </tr>

          </tbody>

        </table>
                <h3 className="section-title">
          📊 Project Progress
        </h3>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${editedProject.progress}%`,
            }}
          ></div>

        </div>

        <p className="progress-text">
          {editedProject.progress}% Complete
        </p>

        <h3 className="section-title">
          👨‍💻 Team Information
        </h3>

        <div className="team-grid">

          <div className="team-card">
            <h4>
              {editedProject.manager}
            </h4>

            <p>
              Project Manager
            </p>
          </div>

          <div className="team-card">
            <h4>
              Team Size
            </h4>

            <p>
              {editedProject.team}
              {" "}Members
            </p>
          </div>

        </div>

        <h3 className="section-title">
          📌 Project Status
        </h3>

        <div className="activity-box">

          <p>
            Status :
            {" "}
            {editedProject.status}
          </p>

          <p>
            Priority :
            {" "}
            {editedProject.priority}
          </p>

          <p>
            Deadline :
            {" "}
            {editedProject.deadline}
          </p>

        </div>

        <h3 className="section-title">
          📂 Project Summary
        </h3>

        <div className="activity-box">

          <p>
            Project :
            {" "}
            {editedProject.name}
          </p>

          <p>
            Client :
            {" "}
            {editedProject.client}
          </p>

          <p>
            Budget :
            {" "}
            {editedProject.budget}
          </p>

          <p>
            Progress :
            {" "}
            {editedProject.progress}%
          </p>

        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >

          <button
            className="download-btn"
            onClick={() =>
              navigate(-1)
            }
          >
            ⬅ Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;