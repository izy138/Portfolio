import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;