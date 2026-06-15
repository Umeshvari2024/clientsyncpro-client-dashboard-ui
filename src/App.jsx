import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import ClientDashboard from "./pages/ClientDashboard";
import ProjectList from "./pages/ProjectList";
import ProjectDetails from "./pages/ProjectDetails";
import ClientList from "./pages/ClientList";
import MilestoneTracking from "./pages/MilestoneTracking";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Navbar />

          <Routes>
            <Route path="/" element={<ClientDashboard />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/milestones" element={<MilestoneTracking />}/>
            <Route
              path="/project-details/:id"
              element={<ProjectDetails />}
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;