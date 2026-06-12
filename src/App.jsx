import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import ClientDashboard from "./pages/ClientDashboard";
import ProjectList from "./pages/ProjectList";

import "./App.css";

function App() {
return ( <BrowserRouter> <div className="app-container"> <Sidebar />

```
    <div className="main-content">
      <Navbar />

      <Routes>
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>

      <Footer />
    </div>
  </div>
</BrowserRouter>
);
}
export default App;
