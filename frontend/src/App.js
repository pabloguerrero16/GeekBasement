import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`App ${isSidebarVisible ? "toggle-sidebar" : ""}`}>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="content">
        <Home></Home>
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
