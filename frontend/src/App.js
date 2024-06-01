import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

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
            <Route path="/product/:id" Component={ProductDetails} exact />
          </Routes>
        </div>
        <Footer />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
