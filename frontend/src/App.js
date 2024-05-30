import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/Home";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className={`App ${isSidebarVisible ? "toggle-sidebar" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} exact />
          </Routes>
        </div>
        <Footer />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
