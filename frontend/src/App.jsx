import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Performance from "./pages/Performance";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";
import Admin from "./pages/Admin";

function App() {
  const [closeMenu, setCloseMenu] = useState(false);
  const [selectedContent, setSelectedContent] = useState('Dashboard');

  const handleContentChange = (content) => {
    setSelectedContent(content);
    setCloseMenu(true);
  };

  return (
    <Router>
      <div className={`d-flex ${closeMenu ? 'toggled' : ''}`}>
        <Sidebar closeMenu={closeMenu} onContentChange={handleContentChange} />
        <div className="flex-grow-2 p-4">
        <div>
                <h1>Hello Admin</h1>
                <hr /><hr />
            </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/support" element={<Support />} /> */}
            <Route path="/support" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
