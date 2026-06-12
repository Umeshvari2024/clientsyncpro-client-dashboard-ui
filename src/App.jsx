import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ClientDashboard from "./pages/ClientDashboard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <ClientDashboard />
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;